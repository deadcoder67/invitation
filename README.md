# 🎉 Tanisha's Birthday Invitation Page

A beautiful, interactive birthday invitation page built with HTML, CSS, and JavaScript. Fully responsive and ready to deploy on GitHub Pages!

## 📋 Features

✨ **Two-Page Interactive Experience:**
- **Page 1**: Dark, elegant name entry screen with glowing effects
- **Page 2**: Animated letter-by-letter reveal of guest name with background image and music

🎵 **Audio Integration:**
- Background music plays when transitioning to the invitation page
- Pauses when popup is opened
- Automatically resumes when popup is closed

🎨 **Responsive Design:**
- Works perfectly on mobile, tablet, and desktop
- Optimized for all screen sizes (320px to 4K)
- Touch-friendly interactive elements

💬 **Interactive Popup:**
- Clickable message box reveals the invitation message
- Smooth animations and transitions
- Close with button or ESC key

## 📁 File Structure

```
.
├── index.html                 # Main HTML page
├── styles.css                 # Styling and responsive design
├── script.js                  # JavaScript interactivity
├── download (2).jfif          # Background image
├── Pretty_Woman_...mp3        # Background music
└── README.md                  # This file
```

## 🚀 How to Deploy on GitHub Pages

### Step 1: Create a GitHub Repository
1. Go to [github.com](https://github.com)
2. Click "+" → "New repository"
3. Name it: `birthday-invitation` (or any name)
4. Click "Create repository"

### Step 2: Upload Files
1. Click "uploading an existing file"
2. Upload these files:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `download (2).jfif`
   - `Pretty_Woman_-_Kal_Ho_Naa_Ho___Shah_Rukh_Khan___Preity___Shankar_Mahadevan___SEL___4K_Video(256k).mp3`
3. Add a commit message and click "Commit changes"

### Step 3: Enable GitHub Pages
1. Go to repository Settings
2. Scroll to "Pages" section (left sidebar)
3. Under "Source", select branch: `main`
4. Under "Folder", select: `/ (root)`
5. Click "Save"

### Step 4: Share Your Invitation!
Your page will be live at: `https://yourusername.github.io/birthday-invitation`

**Example:** `https://john.github.io/birthday-invitation`

## 📱 How It Works

### Page 1 - Name Entry
- User enters their name
- Black elegant background with glowing title
- Validates input before proceeding

### Page 2 - Invitation Display
- Username appears letter-by-letter (1 second per letter)
- Background image displays
- Music plays automatically
- User can click the message box to view the full invitation
- Invitation message pops up in a modal

## ⚙️ Customization

### Change the Invitation Message
Edit the popup message in `index.html` (lines 44-50):
```html
<div class="popup-message">
    <h2>Hi There!</h2>
    <p>Your custom message here...</p>
</div>
```

### Change Background Image
Replace `download (2).jfif` with your image, then update the path in `styles.css`.

### Change Music
Replace the MP3 file with your own music file, then update the path in `index.html`.

### Customize Colors
Edit the color values in `styles.css`:
- `#ff69b4` - Pink accent color
- `#ff1493` - Deep pink
- `#0a0a0a` - Dark background

### Adjust Animation Speed
In `script.js`, change the timeout in the `animateNameAndText()` function:
```javascript
setTimeout(typeNextCharacter, 1000); // Change 1000 to desired milliseconds
```

## 🎯 Browser Compatibility

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Full support

**Note:** Some older devices may not support audio autoplay due to browser restrictions.

## 💡 Tips

1. **Custom Domain**: If you have a custom domain, configure it in GitHub Pages settings
2. **Mobile Preview**: Test on phone before sharing
3. **Audio Issues**: If music doesn't play, it might be due to browser autoplay policies. Users can still interact normally
4. **Large Image File**: Compress images for faster loading
5. **CDN Option**: For slow loading, consider using a CDN to host the image and music

## 📞 Troubleshooting

### Music not playing?
- Browsers require user interaction for autoplay. The music will play when users interact with the page.
- Check browser autoplay policy settings
- Try a different browser

### Image not showing?
- Ensure the image file name is correct and matches exactly (including spaces and parentheses)
- Check file is in the same folder as HTML file

### Page not loading?
- Wait 5-10 minutes after enabling GitHub Pages (it takes time to publish)
- Clear browser cache (Ctrl+Shift+Delete)

## 📝 License

Feel free to customize and use for personal purposes!

---

**Made with ❤️ for a special celebration!**
