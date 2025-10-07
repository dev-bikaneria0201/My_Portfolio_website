# Google Sheets Integration Setup

## Step 1: Create Google Apps Script

1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1muAOwB_SFPDNWDpXALVHZCPcc1xZ91tMxb_5bUEi59k/edit
2. Click **Extensions** > **Apps Script**
3. Delete any existing code and paste the following:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    // Append data to sheet
    sheet.appendRow([
      new Date(),
      data.name,
      data.contact || 'N/A',
      data.email,
      data.message
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Data saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click **Deploy** > **New deployment**
5. Select **Web app**
6. Set:
   - Execute as: **Me**
   - Who has access: **Anyone**
7. Click **Deploy**
8. Copy the **Web app URL**

## Step 2: Update Contact Component

Replace the `scriptURL` in `src/components/Contact.jsx` (line 23) with your deployed Web app URL:

```javascript
const scriptURL = 'YOUR_DEPLOYED_WEB_APP_URL_HERE';
```

## Step 3: Setup Sheet Headers

Add these headers to Row 1 of your Google Sheet:
- Column A: Timestamp
- Column B: Name
- Column C: Contact
- Column D: Email
- Column E: Message

## Testing

1. Fill out the contact form on your website
2. Submit the form
3. Check your Google Sheet - new row should appear with the data

## Troubleshooting

- If you get CORS errors, the `mode: 'no-cors'` in the fetch call handles this
- Ensure the Apps Script is deployed with "Anyone" access
- Check the Apps Script logs for any errors
