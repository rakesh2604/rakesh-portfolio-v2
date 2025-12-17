/**
 * Utility functions for handling Google Drive image URLs
 */

/**
 * Extracts file ID from Google Drive URL
 */
export const extractDriveFileId = (url) => {
  if (!url) return null;
  
  // Handle different Google Drive URL formats
  const patterns = [
    /[?&]id=([a-zA-Z0-9_-]+)/,  // ?id= or &id=
    /\/d\/([a-zA-Z0-9_-]+)/,     // /d/FILE_ID
    /\/file\/d\/([a-zA-Z0-9_-]+)/, // /file/d/FILE_ID
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }
  
  return null;
};

/**
 * Converts Google Drive URL to a working direct view URL
 * Uses Google Drive's uc?export=view format which works for publicly shared files
 */
export const convertDriveUrl = (url) => {
  if (!url) return url;
  
  // If it's already a working format, return as is
  if (url.includes('uc?export=view') && url.includes('id=')) {
    return url;
  }
  
  const fileId = extractDriveFileId(url);
  if (!fileId) {
    // If we can't extract ID, return original URL
    return url;
  }
  
  // Use uc?export=view format which works for publicly shared files
  // This format requires the file to be shared publicly (Anyone with the link can view)
  const viewUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;
  return viewUrl;
};

/**
 * Converts Google Drive URL to direct download URL (fallback)
 * Note: This may trigger download instead of display, use as last resort
 */
export const convertDriveUrlToDownload = (url) => {
  if (!url) return url;
  
  const fileId = extractDriveFileId(url);
  if (!fileId) return url;
  
  // Try uc?export=view first (same as convertDriveUrl but with auth bypass attempt)
  // If that fails, the image component will show error state
  return `https://drive.google.com/uc?export=view&id=${fileId}`;
};

