# Portfolio Website - Rakesh Kumar

A modern, responsive portfolio website showcasing full-stack development projects, skills, and achievements. Built with React, Vite, Tailwind CSS, and deployed on Vercel.

## 🚀 Features

- **Modern UI/UX**: Dark mode support, smooth animations, and responsive design
- **Contact Form**: EmailJS integration for seamless contact form submissions
- **Project Showcase**: Featured projects with live demos and GitHub links
- **Skills & Experience**: Interactive skills section with technology stack
- **Achievements**: Hackathon wins and notable accomplishments
- **Education**: Academic background and certifications
- **SEO Optimized**: Meta tags, Open Graph, and Twitter cards
- **Performance**: Optimized assets, lazy loading, and fast load times

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Radix UI** - Accessible component primitives
- **EmailJS** - Contact form email service


## 📋 Prerequisites

- Node.js 18+ and npm
- Git
- EmailJS account (for contact form)
- Vercel account (for deployment)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📧 EmailJS Setup

The contact form uses EmailJS to send emails directly from the frontend.

### Quick Setup:

1. **Create EmailJS Account**
   - Go to [EmailJS.com](https://www.emailjs.com/)
   - Sign up (200 emails/month free)

2. **Create Email Service**
   - Dashboard → Email Services → Add New Service
   - Choose Gmail and connect your account
   - Copy the **Service ID**

3. **Create Email Template**
   - Dashboard → Email Templates → Create New Template
   - Use these variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`
   - Copy the **Template ID**

4. **Get Public Key**
   - Account → General → Public Key
   - Copy the **Public Key**

5. **Add to .env**
   ```env
   VITE_EMAILJS_SERVICE_ID=service_xxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxx
   ```

## 🏗️ Project Structure

```
Portfolio/
├── public/                 # Static assets
│   └── Rakesh_Kumar_Resume.pdf
├── src/
│   ├── components/        # React components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   └── ...
│   ├── contexts/          # React contexts
│   │   └── ThemeContext.jsx
│   ├── images/            # Image assets
│   ├── lib/               # Utility functions
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── .env.example           # Environment variables template
├── .gitignore
├── package.json
├── vite.config.js
├── tailwind.config.js
└── vercel.json            # Vercel deployment config
```

## 🚀 Deployment to Vercel

### Quick Deployment Steps

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Portfolio website - Production ready"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click **"New Project"**
   - Import your GitHub repository
   - Vercel will auto-detect Vite settings

3. **Configure Environment Variables**
   - In Vercel dashboard → **Project Settings** → **Environment Variables**
   - Add these three variables (for Production, Preview, and Development):
     - `VITE_EMAILJS_SERVICE_ID`
     - `VITE_EMAILJS_TEMPLATE_ID`
     - `VITE_EMAILJS_PUBLIC_KEY`
   - Click **"Save"**

4. **Deploy**
   - Click **"Deploy"**
   - Wait for build to complete (~2-3 minutes)
   - Your site will be live at `your-project.vercel.app`

### Build Settings (Auto-detected by Vercel)

- **Framework Preset**: Vite ✅
- **Build Command**: `npm run build` ✅
- **Output Directory**: `dist` ✅
- **Install Command**: `npm install` ✅

### Detailed Deployment Guide

For complete step-by-step instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

### Pre-Deployment Checklist

Before pushing to GitHub, ensure:
- ✅ `node_modules/` is in `.gitignore` (will not be committed)
- ✅ `dist/` is in `.gitignore` (will not be committed)
- ✅ `.env` is in `.gitignore` (will not be committed)
- ✅ All images are in `src/images/` folder
- ✅ Build succeeds locally (`npm run build`)
- ✅ Contact form works with EmailJS

See [GITHUB_DEPLOYMENT.md](./GITHUB_DEPLOYMENT.md) for complete checklist.

## 🔧 Configuration

### Vite Configuration

The project uses Vite with React plugin. Configuration is in `vite.config.js`:

```js
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
```

### Tailwind Configuration

Tailwind CSS is configured in `tailwind.config.js` with custom colors and animations.

### Vercel Configuration

`vercel.json` handles routing and caching:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ],
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

## 📝 Available Scripts

- `npm run dev` - Start development server (port 3000)
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🎨 Customization

### Update Personal Information

1. **Hero Section**: Edit `src/components/Hero.jsx`
2. **About Section**: Edit `src/components/About.jsx`
3. **Contact Info**: Edit `src/components/Contact.jsx`
4. **Projects**: Edit `src/components/Projects.jsx`
5. **Skills**: Edit `src/components/Skills.jsx`
6. **Resume**: Replace `public/Rakesh_Kumar_Resume.pdf`

### Update Images

Place images in `src/images/`:
- `profile.jpeg` - Profile photo
- Project images (PlacedAI.png, Resumify.png, Books4SBU.png)
- Achievement images

### Theme Customization

Edit `tailwind.config.js` to change colors, fonts, and spacing.

## 🔒 Environment Variables

### Frontend (.env)

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_EMAILJS_SERVICE_ID` | EmailJS service ID | Yes |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template ID | Yes |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS public key | Yes |

## 🐛 Troubleshooting

### Contact Form Not Working

1. Check EmailJS credentials in `.env`
2. Verify EmailJS service is connected
3. Check browser console for errors
4. Ensure environment variables start with `VITE_`

### Build Errors

1. Clear cache: `rm -rf node_modules dist && npm install`
2. Check Node.js version: `node --version` (should be 18+)
3. Verify all dependencies are installed

### Vercel Deployment Issues

1. Check build logs in Vercel dashboard
2. Verify environment variables are set
3. Ensure `vercel.json` is correct
4. Check that `dist` folder is in `.gitignore`

## 📚 Additional Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [Vercel Documentation](https://vercel.com/docs)

## 📄 License

This project is private and proprietary.

## 👤 Author

**Rakesh Kumar**
- Email: rakesh.kr2604@gmail.com
- Phone: +91 9709999477
- Location: Ranchi, India

---

Built with ❤️ using React and Vite
