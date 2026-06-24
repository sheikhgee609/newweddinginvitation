# 💍 Faiz & Suhada — Wedding Website
## Complete Setup & Customization Guide

---

## 📁 Files
```
wedding-invite/
├── index.html          ← Main website (do not edit directly)
├── wedding.config.js   ← Edit THIS file only ✅
├── vercel.json         ← Deploy config
└── README.md           ← This guide
```

---

## ✏️ HOW TO CUSTOMIZE

Open **`wedding.config.js`** — change any value and the whole website updates.

| What to change | Key in config |
|---|---|
| Couple names | `groomName`, `brideName` |
| Envelope seal letters | `groomInitial`, `brideInitial` |
| Mehndi date/time/venue | `mehndiDate`, `mehndiTime`, `mehndiVenue` |
| Barat date/time/venue | `baratDate`, `baratTime`, `baratVenue` |
| Walima date/time/venue | `walimaDate`, `walimaTime`, `walimaVenue` |
| Countdown target | `countdownTarget` (ISO date string) |
| Dress codes | `mehndiDress`, `baratDress`, `walimaDress` |
| Map embed | `mapEmbedUrl` |
| Hero background photo | `heroBgPhoto` |
| Gallery photos | `gallery[]` array |
| Background music | `musicSrc` (MP3 URL) |
| WhatsApp message | `whatsappMsg` |

> ⚠️ Note: `wedding.config.js` is referenced in the HTML via `<script src="wedding.config.js">`.
> If hosting on Vercel/Netlify just keep both files in the same folder.

---

## 🗂️ RSVP — Where Does Data Go?

### Option 1: Browser localStorage (default, zero setup)
Data is saved in the guest's browser. To read it:
1. Open browser DevTools (F12)
2. Application → Local Storage → your site
3. Key: `weddingRSVPs_FaizSuhada`

Good for small guest lists. Data is per-device.

---

### Option 2: Formspree (Email delivery, free tier = 50/month)

1. Go to **[formspree.io](https://formspree.io)** → Create free account
2. Click **+ New Form** → Give it a name
3. Copy your **Form ID** (looks like `xrgvkpno`)
4. In `wedding.config.js`:
   ```js
   formspreeId: "xrgvkpno",   // ← your ID here
   ```
5. Every RSVP goes to your email ✅

---

### Option 3: Google Sheets (Recommended — live spreadsheet!)

#### Step 1: Create the Google Sheet
1. Go to **[sheets.google.com](https://sheets.google.com)** → New spreadsheet
2. Name it: `Faiz & Suhada RSVP`
3. Add headers in Row 1:
   ```
   A1: Timestamp  B1: Name  C1: Phone  D1: Guests  E1: Event  F1: Message
   ```

#### Step 2: Create Apps Script
1. In the sheet: **Extensions → Apps Script**
2. Delete default code, paste this:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data  = JSON.parse(e.postData.contents);
    sheet.appendRow([
      data.ts || new Date().toISOString(),
      data.name  || '',
      data.phone || '',
      data.count || '',
      data.event || '',
      data.msg   || ''
    ]);
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch(err) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Click **Deploy → New deployment**
4. Type: **Web App**
5. Execute as: **Me**
6. Who has access: **Anyone**
7. Click **Deploy** → copy the **Web App URL**

#### Step 3: Add URL to config
```js
// In wedding.config.js:
googleSheetURL: "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec",
```

Done! Every RSVP now appears in your Google Sheet live. 🎉

---

## 🚀 DEPLOY TO VERCEL (Free)

1. Create account at **[github.com](https://github.com)**
2. New repository → `faiz-suhada-wedding`
3. Upload: `index.html` + `wedding.config.js` + `vercel.json`
4. Go to **[vercel.com](https://vercel.com)** → Login with GitHub
5. **Add New Project** → Select your repo → **Deploy**
6. Done! Your site is live at `faiz-suhada-wedding.vercel.app`

### Custom Domain (Optional)
- Vercel Dashboard → Your project → Settings → Domains
- Add `faiz-suhada.com` (domain costs ~RM45/year from Namecheap)

---

## 🌐 LANGUAGE SWITCHING

The EN/MY toggle is in the top-right corner. It switches:
- All nav links
- All section titles and subtitles
- Event card details (date labels, dress code labels)
- Gallery tab labels
- RSVP form labels and success message
- Countdown labels
- Buttons
- Share messages
- Footer text

To add more translated text, add `data-en="..."` and `data-my="..."` attributes to any HTML element.

---

## 📸 ADDING YOUR OWN PHOTOS

In `wedding.config.js`, edit the `gallery` array:
```js
gallery: [
  { url: "https://your-cdn.com/photo1.jpg", cat: "mehndi" },
  { url: "https://your-cdn.com/photo2.jpg", cat: "barat" },
  { url: "https://your-cdn.com/photo3.jpg", cat: "highlights" },
  // add as many as you want
],
```

**Free photo hosting options:**
- [Cloudinary](https://cloudinary.com) — free 25GB
- [ImgBB](https://imgbb.com) — simple free upload
- Google Drive (share as public, use direct link)

---

## 🎵 ADDING BACKGROUND MUSIC

```js
musicSrc:   "https://your-cdn.com/wedding-song.mp3",
musicLabel: "♪ Sejuta Cinta",
```

**Free music hosting:**
- [archive.org](https://archive.org) (royalty-free)
- Your own Google Drive (get direct download link)

---

*Made with ❤️ & Doa · Faiz & Suhada 2025*
