# 🚀 QUICK DEPLOYMENT GUIDE - GitHub Pages

## Pre-Requisites
- GitHub account (free)
- All files ready to upload

## 5-Minute Setup Guide

### 1️⃣ Create GitHub Repository
```
Go to github.com → Click "+" → "New repository"
Name: birthday-invitation
Click "Create repository"
```

### 2️⃣ Upload Your Files
On your new repository page:
- Click "uploading an existing file"
- Drag and drop or select these files:
  ✓ index.html
  ✓ styles.css
  ✓ script.js
  ✓ download (2).jfif
  ✓ Pretty_Woman_...mp3
- Add message: "Initial commit"
- Click "Commit changes"

### 3️⃣ Enable GitHub Pages
- Click "Settings" tab
- Scroll to "Pages" section (left sidebar)
- Source: Select "main" branch
- Click "Save"
- Wait 5-10 minutes for deployment

### 4️⃣ Get Your Live URL
Your site will be at:
```
https://YOUR_USERNAME.github.io/birthday-invitation
```

Example: `https://john.github.io/birthday-invitation`

## ✅ Verification
- Visit your URL
- Try entering a name
- Background image should load
- Music should play (may require interaction)
- Click message box to see invitation

## 🔧 Advanced: Git Command Line (Optional)

If you prefer using Git commands:

```bash
# Clone repository (replace with your repo URL)
git clone https://github.com/YOUR_USERNAME/birthday-invitation.git
cd birthday-invitation

# Copy your files here, then:
git add .
git commit -m "Add birthday invitation page"
git push origin main
```

## 📊 File Checklist

- [ ] index.html (HTML page)
- [ ] styles.css (Styling)
- [ ] script.js (JavaScript)
- [ ] download (2).jfif (Background image)
- [ ] Pretty_Woman_...mp3 (Music)
- [ ] README.md (Documentation)
- [ ] .gitignore (Git ignore)

## 🎨 Customization Quick Tips

**Change Colors:**
Open `styles.css`, find and replace:
- `#ff69b4` → Your preferred pink
- `#0a0a0a` → Your preferred dark color

**Change Music:**
1. Upload your MP3 to the repository
2. In `index.html`, change the source file name

**Change Background Image:**
1. Upload your image to the repository
2. In `styles.css`, update the background-image URL

**Change Animation Speed:**
In `script.js`, find:
```javascript
setTimeout(typeNextCharacter, 1000); // Change 1000 (milliseconds)
```

## ⚠️ Common Issues & Solutions

| Problem | Solution |
|---------|----------|
| Page not loading | Clear cache, or wait 10 minutes after enabling Pages |
| Image not showing | Check filename matches exactly (case-sensitive) |
| Music not playing | This may be browser autoplay policy. Click page first |
| File names with spaces | Should work fine, but URL-encode if needed |

## 🎯 Share Your Invitation!

Once deployed:
1. Copy your URL: `https://YOUR_USERNAME.github.io/birthday-invitation`
2. Share via:
   - WhatsApp
   - Email
   - Social Media
   - Messaging apps
   - SMS

Recipients just click the link and enter their name!

---

**Enjoy your interactive birthday invitation! 🎉**
