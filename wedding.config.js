/**
 * ============================================================
 *  💍 WEDDING WEBSITE — CONFIG FILE
 *  Sirf yeh file edit karo. Puri website auto-update hogi.
 *  Edit ONLY this file. Everything updates automatically.
 * ============================================================
 */
const WC = {

  /* ── COUPLE ──────────────────────────────────────────── */
  groomName:      "Faiz",
  brideName:      "Suhada",
  groomInitial:   "F",          // Envelope wax seal letter
  brideInitial:   "S",

  /* ── MEHNDI ──────────────────────────────────────────── */
  mehndiDate:     "Friday, 12 December 2025",
  mehndiTime:     "8:00 PM",
  mehndiDateISO:  "2025-12-12T20:00:00",
  mehndiVenue:    "Faiz Family Residence, Petaling Jaya",
  mehndiDress:    "Traditional Colours / Baju Kurung",

  /* ── BARAT ───────────────────────────────────────────── */
  baratDate:      "Saturday, 13 December 2025",
  baratTime:      "7:00 PM",
  baratDateISO:   "2025-12-13T19:00:00",
  baratVenue:     "The Grand Ballroom, Kuala Lumpur",
  baratDress:     "Formal Attire / Baju Melayu Diraja",

  /* ── WALIMA ──────────────────────────────────────────── */
  walimaDate:     "Sunday, 14 December 2025",
  walimaTime:     "12:00 PM",
  walimaDateISO:  "2025-12-14T12:00:00",
  walimaVenue:    "The Grand Ballroom, Kuala Lumpur",
  walimaDress:    "Smart Casual / Baju Melayu",

  /* ── COUNTDOWN TARGET (main event) ──────────────────── */
  countdownTarget: "2025-12-13T19:00:00",

  /* ── MAP ─────────────────────────────────────────────── */
  // Google Maps: maps.google.com → cari venue → Share → Embed a map → copy src URL
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.8!2d101.6869!3d3.1390!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc49c701efeae7%3A0xf4d98e5b2f1b9b8b!2sKuala%20Lumpur%20City%20Centre!5e0!3m2!1sen!2smy!4v1234567890",
  city:        "Kuala Lumpur, Malaysia",

  /* ── PHOTOS ──────────────────────────────────────────── */
  // Ganti dengan URL gambar pasangan anda (min 1600px lebar)
  heroBgPhoto: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&auto=format&fit=crop",
  ogImage:     "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200",

  // Galeri — tukar URL gambar anda di sini
  // category: "mehndi" | "barat" | "highlights"
  gallery: [
    { url:"https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&auto=format&fit=crop", cat:"mehndi" },
    { url:"https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&auto=format&fit=crop", cat:"barat" },
    { url:"https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop", cat:"highlights" },
    { url:"https://images.unsplash.com/photo-1537907510278-b2f09ff0e3a1?w=600&auto=format&fit=crop", cat:"mehndi" },
    { url:"https://images.unsplash.com/photo-1547573854-74d2a71d0826?w=600&auto=format&fit=crop", cat:"highlights" },
    { url:"https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&auto=format&fit=crop", cat:"barat" },
    { url:"https://images.unsplash.com/photo-1616440347437-b1c73416efc2?w=600&auto=format&fit=crop", cat:"mehndi" },
    { url:"https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&auto=format&fit=crop", cat:"highlights" },
    { url:"https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&auto=format&fit=crop", cat:"barat" },
  ],

  /* ── MUSIC ───────────────────────────────────────────── */
  // Letak URL muzik MP3 anda di sini (kosongkan "" untuk nyahaktifkan)
  musicSrc:   "",
  musicLabel: "♪ Lagu Kami",

  /* ── RSVP ────────────────────────────────────────────── */
  rsvpDeadline: "1 December 2025",

  // Formspree: buat akaun percuma di formspree.io, tampal ID borang anda
  formspreeId:    "",

  // Google Sheets: lihat README untuk setup
  googleSheetURL: "",

  /* ── SHARE ───────────────────────────────────────────── */
  whatsappMsg: "💍 Jemputan Perkahwinan Faiz & Suhada!\n\nSila hadir meraikan majlis perkahwinan kami 🌟\n",
};
