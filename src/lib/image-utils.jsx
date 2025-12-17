import React, { useState, useEffect, useRef } from 'react';
import { ImageOff, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { convertDriveUrl, convertDriveUrlToDownload, extractDriveFileId } from '@/lib/drive-utils';

/**
 * A robust image component that handles loading states and errors.
 * It attempts to load the source image, and if it fails, displays a fallback UI.
 * Includes timeout and retry mechanism for failed loads.
 */
// Track failed URLs to prevent retrying on remount
// Use sessionStorage to persist across hot module reloads
const getFailedUrls = () => {
  try {
    const stored = sessionStorage.getItem('imageFailedUrls');
    return stored ? new Set(JSON.parse(stored)) : new Set();
  } catch {
    return new Set();
  }
};

const addFailedUrl = (url) => {
  try {
    const failedUrls = getFailedUrls();
    failedUrls.add(url);
    sessionStorage.setItem('imageFailedUrls', JSON.stringify(Array.from(failedUrls)));
  } catch {
    // Ignore storage errors
  }
};

// Helper to normalize URLs for comparison
const normalizeUrl = (url) => {
  if (!url) return url;
  try {
    // Handle relative URLs (like /assets/image.png from Vite imports)
    if (url.startsWith('/') || url.startsWith('./')) {
      // For relative URLs, just remove query params
      return url.split('?')[0];
    }
    
    const urlObj = new URL(url);
    // Keep only the pathname and id parameter for Google Drive URLs
    if (url.includes('drive.google.com')) {
      const id = urlObj.searchParams.get('id');
      return id ? `https://drive.google.com/uc?export=view&id=${id}` : url.split('?')[0];
    }
    return url.split('?')[0]; // Remove query params for other URLs
  } catch {
    // If URL parsing fails (e.g., relative path), just remove query params
    return url.split('?')[0];
  }
};

// Helper to check if URL is a local/Vite-imported image
const isLocalImage = (url) => {
  if (!url) return false;
  
  // Convert to string if needed (Vite imports return strings, but be safe)
  const urlString = typeof url === 'string' ? url : String(url);
  if (urlString === '') return false;
  
  // Vite imports return URLs like /assets/image-abc123.png
  // Local images don't have http:// or https:// and aren't external domains
  // Check for Vite asset paths (most common) or relative paths
  if (urlString.startsWith('http://') || urlString.startsWith('https://')) {
    return false; // External URL
  }
  
  // Vite asset paths start with /assets/
  if (urlString.startsWith('/assets/')) {
    return true;
  }
  
  // Relative paths
  if (urlString.startsWith('./') || urlString.startsWith('../')) {
    return true;
  }
  
  // Absolute paths starting with / (but not // which is protocol-relative)
  if (urlString.startsWith('/') && !urlString.startsWith('//')) {
    return true;
  }
  
  return false;
};

// Check if URL (or normalized version) is in failed set
// Skip check for local/Vite-imported images (they're bundled assets)
const isUrlFailed = (url) => {
  if (!url) return false;
  
  // Don't mark local/Vite-imported images as failed (they're bundled assets)
  if (isLocalImage(url)) {
    return false;
  }
  
  const normalized = normalizeUrl(url);
  const failedUrls = getFailedUrls();
  return Array.from(failedUrls).some(failedUrl => normalizeUrl(failedUrl) === normalized);
};

export const ImageWithFallback = ({ src, alt, className, fallbackText = "Image unavailable" }) => {
  // Handle empty string or falsy src - immediately show error state
  if (!src || src === '') {
    return (
      <div className={cn("relative overflow-hidden bg-slate-900 w-full h-full", className)}>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500 p-4 text-center z-10 border border-slate-800 bg-slate-900">
          <ImageOff className="w-8 h-8 mb-2 opacity-50" />
          <span className="text-xs text-slate-400">{fallbackText}</span>
        </div>
      </div>
    );
  }
  
  // Convert src to string if it's not already (Vite imports might return different types)
  const srcString = typeof src === 'string' ? src : String(src);
  
  // For local/Vite-imported images, always start with loading state (don't check sessionStorage)
  const srcIsLocal = isLocalImage(srcString);
  const initialIsFailed = !srcIsLocal && isUrlFailed(srcString);
  
  const [isLoading, setIsLoading] = useState(() => initialIsFailed ? false : true);
  const [hasError, setHasError] = useState(() => initialIsFailed ? true : false);
  const [retryCount, setRetryCount] = useState(0);
  const [imageSrc, setImageSrc] = useState(srcString);
  const timeoutRef = useRef(null);
  const imgRef = useRef(null);
  const loadingStateRef = useRef({ isLoading: initialIsFailed ? false : true, hasError: initialIsFailed ? true : false });

  const MAX_RETRIES = 1;
  const LOAD_TIMEOUT = 8000; // 8 seconds timeout

  // Helper function to set timeout
  const setLoadTimeout = (currentSrc) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      // Use ref to check current state to avoid stale closure
      const currentState = loadingStateRef.current;
      // Only set error if still loading (image hasn't loaded yet)
      if (currentState.isLoading && !currentState.hasError) {
        console.warn(`Image load timeout: ${currentSrc || imageSrc}`);
        
        // Don't mark local/Vite-imported images as failed (they're bundled assets)
        const srcIsLocal = isLocalImage(src);
        
        if (!srcIsLocal) {
          // Mark URL as failed to prevent retrying on remount (add both currentSrc and src to cover all cases)
          const failedUrl = currentSrc || imageSrc || src;
          addFailedUrl(failedUrl);
          addFailedUrl(src); // Also add the original src prop
        }
        
        // Update ref first, then state
        loadingStateRef.current = { isLoading: false, hasError: true };
        setIsLoading(false);
        setHasError(true);
      }
    }, LOAD_TIMEOUT);
  };

  // Update ref when state changes
  useEffect(() => {
    loadingStateRef.current = { isLoading, hasError };
  }, [isLoading, hasError]);

  useEffect(() => {
    // Convert src to string if needed
    const srcString = typeof src === 'string' ? src : String(src);
    
    // Don't reset if we're already in error state (prevents infinite reset loop)
    if (hasError) {
      return;
    }
    
    // For local/Vite-imported images, skip failed URL check (they're bundled assets)
    const srcIsLocal = isLocalImage(srcString);
    
    // Check if this URL (or a normalized version) has already failed - if so, don't reset to loading
    // Skip this check for local images
    if (!srcIsLocal) {
      const isFailed = isUrlFailed(srcString);
      if (isFailed) {
        setIsLoading(false);
        setHasError(true);
        loadingStateRef.current = { isLoading: false, hasError: true };
        return;
      }
    }
    
    // Reset state when src changes (only if URL hasn't failed before, or if it's a local image)
    setIsLoading(true);
    setHasError(false);
    setRetryCount(0);
    setImageSrc(srcString);
    loadingStateRef.current = { isLoading: true, hasError: false };
    setLoadTimeout(srcString);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [src, hasError]);

  // Reset timeout when imageSrc changes (during retry)
  useEffect(() => {
    if (imageSrc && imageSrc !== src) {
      setIsLoading(true);
      setHasError(false);
      loadingStateRef.current = { isLoading: true, hasError: false };
      setLoadTimeout(imageSrc);
    }

    return () => {
      if (timeoutRef.current && imageSrc !== src) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [imageSrc, src]);

  const handleLoad = () => {
    // Clear timeout immediately to prevent race condition
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    // Update ref before state to ensure timeout check sees correct state
    loadingStateRef.current = { isLoading: false, hasError: false };
    setIsLoading(false);
    setHasError(false);
  };

  const handleError = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Check if this is a local/Vite-imported image
    const srcIsLocal = isLocalImage(src);

    if (retryCount < MAX_RETRIES) {
      // Retry loading the image once
      setTimeout(() => {
        setRetryCount(prev => prev + 1);
        setIsLoading(true);
        setHasError(false);
        
        // For Google Drive URLs, try alternative formats
        const fileId = extractDriveFileId(src);
        if (fileId && src.includes('drive.google.com')) {
          // Try download format as fallback
          const newUrl = convertDriveUrlToDownload(src);
          setImageSrc(newUrl);
        } else if (!srcIsLocal) {
          // Force reload by appending timestamp (only for non-local images)
          const separator = src.includes('?') ? '&' : '?';
          const retryUrl = `${src}${separator}_retry=${retryCount + 1}&t=${Date.now()}`;
          setImageSrc(retryUrl);
        } else {
          // For local images, just retry with same URL
          setImageSrc(src);
        }
      }, 1000);
    } else {
      // Only mark URL as failed if it's not a local image
      // Local images shouldn't be persisted as failed (they're bundled assets)
      if (!srcIsLocal) {
        addFailedUrl(src);
      }
      setIsLoading(false);
      setHasError(true);
      console.error(`Failed to load image after ${MAX_RETRIES + 1} attempts: ${src}`);
    }
  };

  // Generate a gradient placeholder based on the alt text
  const getPlaceholderGradient = () => {
    const hash = alt.split('').reduce((acc, char) => {
      return char.charCodeAt(0) + ((acc << 5) - acc);
    }, 0);
    const hue = Math.abs(hash % 360);
    return `linear-gradient(135deg, hsl(${hue}, 70%, 20%), hsl(${(hue + 60) % 360}, 70%, 15%))`;
  };

  return (
    <div className={cn("relative overflow-hidden bg-slate-900 w-full h-full", className)}>
      {/* Loading State */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-900 z-10">
          <Loader2 className="w-8 h-8 text-cyan-500 animate-spin" />
        </div>
      )}

      {/* Error State */}
      {hasError ? (
        <div 
          className="absolute inset-0 flex flex-col items-center justify-center text-slate-500 p-4 text-center z-10 border border-slate-800 bg-slate-900"
        >
          <ImageOff className="w-8 h-8 mb-2 opacity-50" />
          <span className="text-xs text-slate-400">{fallbackText}</span>
        </div>
      ) : (
        /* Actual Image */
        <img
          ref={imgRef}
          src={imageSrc}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
          className={cn(
            "w-full h-full object-cover transition-opacity duration-500",
            isLoading ? "opacity-0" : "opacity-100"
          )}
          style={{ filter: 'none' }}
        />
      )}
    </div>
  );
};