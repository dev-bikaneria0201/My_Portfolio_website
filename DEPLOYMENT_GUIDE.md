# Deployment Guide

## Pre-Deployment Checklist

### 1. Replace Resume PDF
- Replace `public/RESUME_DEV_BIKANERIA.pdf` with your actual resume
- Ensure the filename matches exactly

### 2. Setup Google Sheets Integration

#### Step A: Prepare Your Google Sheet
1. Open: https://docs.google.com/spreadsheets/d/1muAOwB_SFPDNWDpXALVHZCPcc1xZ91tMxb_5bUEi59k/edit
2. Add headers in Row 1:
   - A1: `Timestamp`
   - B1: `Name`
   - C1: `Contact`
   - D1: `Email`
   - E1: `Message`

#### Step B: Create Apps Script
1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete existing code and paste:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.openById('1muAOwB_SFPDNWDpXALVHZCPcc1xZ91tMxb_5bUEi59k').getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      new Date(),
      data.name || '',
      data.contact || '',
      data.email || '',
      data.message || ''
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success'
    })).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Click **Deploy** → **New deployment**
4. Click gear icon → Select **Web app**
5. Configure:
   - Description: "Portfolio Contact Form"
   - Execute as: **Me**
   - Who has access: **Anyone**
6. Click **Deploy**
7. **Copy the Web app URL** (looks like: https://script.google.com/macros/s/ABC.../exec)

#### Step C: Update Contact Component
1. Open `src/components/Contact.jsx`
2. Find line 23: `const scriptURL = '...'`
3. Replace with your deployed Web app URL

### 3. Test Contact Form
1. Run the app locally: `npm run dev`
2. Fill out the contact form
3. Submit and check your Google Sheet for the new entry

## Deployment Options

### Option 1: Vercel (Recommended)
```bash
npm install -g vercel
vercel login
vercel
```

### Option 2: Netlify
```bash
npm run build
# Drag and drop 'dist' folder to Netlify
```

### Option 3: GitHub Pages
```bash
npm run build
# Push 'dist' folder to gh-pages branch
```

## Post-Deployment

1. Test all navigation links
2. Test resume download
3. Test contact form submission
4. Verify responsive design on mobile
5. Check all external links (LinkedIn, GitHub)

## Troubleshooting

**Resume not downloading?**
- Ensure PDF is in `public/` folder
- Check filename matches exactly

**Contact form not working?**
- Verify Apps Script is deployed with "Anyone" access
- Check scriptURL is correct in Contact.jsx
- Look for errors in browser console

**Images not loading?**
- Images are hosted on CDN and should work automatically
- Check internet connection

## Support

For issues, check:
- Browser console for errors
- Apps Script execution logs
- Network tab for failed requests
