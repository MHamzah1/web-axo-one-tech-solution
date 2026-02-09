# 🚀 Quick Deploy Guide - Hostinger

## Langkah Cepat:

### 1. Build Project

```bash
npm run build
```

✅ File static akan di-generate di folder `out/`

### 2. Upload ke Hostinger

- Login ke **hPanel Hostinger**
- Buka **File Manager**
- Masuk ke folder **public_html**
- **Hapus semua file** di public_html
- **Upload semua isi folder `out`** ke public_html
- Upload file `.htaccess` ke public_html

### 3. Test Website

Akses domain Anda dan test semua halaman!

---

## 📦 Build & Zip (Recommended)

```bash
npm run build:hostinger
```

Akan menghasilkan `hostinger-build.zip` yang siap diupload!

---

## ⚡ Update Website

```bash
npm run build:hostinger
```

Upload & extract `hostinger-build.zip` di public_html

---

**That's it! Easy! 🎉**
