# 🚀 Panduan Deploy ke Hostinger Shared Hosting

## Langkah-langkah Deploy

### 1️⃣ Build Project

Jalankan perintah build di terminal:

```bash
npm run build
```

Setelah build selesai, folder `out` akan dibuat dengan semua file static.

### 2️⃣ Persiapan File

File yang perlu di-upload ke Hostinger ada di folder `out/`:

- `index.html`
- `_next/` folder
- Semua file static lainnya

### 3️⃣ Upload ke Hostinger

#### Opsi A: Menggunakan File Manager

1. Login ke **hPanel Hostinger**
2. Buka **File Manager**
3. Navigasi ke folder `public_html` (atau domain folder Anda)
4. **Hapus semua file default** di `public_html`
5. Upload **semua isi folder `out`** ke `public_html`
6. Pastikan struktur folder seperti:
   ```
   public_html/
   ├── index.html
   ├── _next/
   ├── about.html
   ├── services.html
   ├── contact.html
   └── ...
   ```

#### Opsi B: Menggunakan FTP

1. Download FTP Client (FileZilla recommended)
2. Koneksi ke Hostinger menggunakan kredensial FTP dari hPanel
3. Upload semua isi folder `out` ke `public_html`

### 4️⃣ Konfigurasi .htaccess (Penting!)

Buat file `.htaccess` di `public_html` dengan isi:

```apache
# Redirect HTTP to HTTPS (optional tapi recommended)
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Handle routing untuk Next.js static export
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_URI} !^/.*\..+$
RewriteRule ^(.*)$ /$1.html [L]

# Gzip compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/x-javascript application/json
</IfModule>

# Browser caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType text/javascript "access plus 1 month"
  ExpiresByType application/x-javascript "access plus 1 month"
  ExpiresByType text/html "access plus 1 day"
</IfModule>
```

### 5️⃣ Verifikasi

1. Akses domain Anda di browser
2. Test semua halaman:
   - Homepage: `https://yourdomain.com`
   - About: `https://yourdomain.com/about`
   - Services: `https://yourdomain.com/services`
   - Contact: `https://yourdomain.com/contact`
3. Periksa di browser console untuk error

---

## 🔧 Script Otomatis (Optional)

Tambahkan script di `package.json` untuk build dan zip:

```json
"scripts": {
  "build": "next build",
  "build:hostinger": "next build && cd out && tar -czf ../hostinger-build.tar.gz .",
  "build:zip": "next build && cd out && powershell Compress-Archive -Path * -DestinationPath ../hostinger-build.zip -Force"
}
```

Kemudian jalankan:

```bash
npm run build:zip
```

Upload file `hostinger-build.zip` ke Hostinger dan extract di `public_html`.

---

## 📝 Checklist Deployment

- [ ] Run `npm run build` berhasil
- [ ] Folder `out` sudah terbuat
- [ ] Upload semua isi folder `out` ke `public_html`
- [ ] Buat file `.htaccess` dengan konfigurasi di atas
- [ ] Test semua halaman website berfungsi
- [ ] Periksa console browser tidak ada error
- [ ] Test pada mobile dan desktop
- [ ] Setup SSL certificate (biasanya gratis di Hostinger)

---

## ⚠️ Troubleshooting

### Halaman 404 saat navigasi

- Pastikan file `.htaccess` sudah di-upload
- Periksa `trailingSlash: true` di `next.config.ts`

### Gambar tidak muncul

- Pastikan `images: { unoptimized: true }` di `next.config.ts`
- Periksa URL gambar menggunakan path yang benar

### CSS/JS tidak load

- Clear cache browser
- Periksa struktur folder `_next` sudah terupload lengkap

### Error "Cannot GET /"

- Pastikan `index.html` ada di root `public_html`
- Periksa permission folder (755) dan file (644)

---

## 🔄 Update Website

Setiap kali ada perubahan:

1. Jalankan `npm run build`
2. Hapus isi `public_html` (kecuali `.htaccess`)
3. Upload ulang isi folder `out`
4. Hard refresh browser (Ctrl + Shift + R)

---

## ✅ Konfigurasi Saat Ini

Project Anda sudah dikonfigurasi dengan benar:

```typescript
// next.config.ts
const nextConfig: NextConfig = {
  output: "export", // ✅ Enable static export
  trailingSlash: true, // ✅ Better compatibility
  images: {
    unoptimized: true, // ✅ Required for static export
  },
};
```

**Status: Ready to Deploy! 🎉**

---

## 📞 Support

Jika ada masalah:

1. Check Hostinger Knowledge Base
2. Contact Hostinger Support (24/7 chat)
3. Periksa error log di hPanel Hostinger

Good luck! 🚀
