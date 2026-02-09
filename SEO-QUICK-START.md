# 🎯 Quick Start - SEO Checklist

## ✅ Langkah Wajib (Lakukan Hari Ini!)

### 1. Verifikasi Google Search Console

- [ ] Login ke https://search.google.com/search-console
- [ ] Tambahkan properti domain: `axoindotechsolution.com`
- [ ] Salin kode verifikasi Google
- [ ] Update di `app/layout.tsx` → `verification.google`
- [ ] Rebuild project: `npm run build:hostinger`
- [ ] Upload ke Hostinger

### 2. Submit Sitemap

- [ ] Buka Google Search Console
- [ ] Menu "Peta Situs" → Tambahkan sitemap
- [ ] URL: `https://axoindotechsolution.com/sitemap.xml`
- [ ] Klik Kirim

### 3. Google Analytics (5 menit)

- [ ] Daftar di https://analytics.google.com
- [ ] Buat properti "AxoIndoTechSolution"
- [ ] Dapatkan Measurement ID (G-XXXXXXXXXX)
- [ ] Edit `app/layout.tsx`
- [ ] Tambahkan: `import GoogleAnalytics from "@/components/GoogleAnalytics"`
- [ ] Tambahkan di body: `<GoogleAnalytics gaId="G-XXXXXXXXXX" />`
- [ ] Rebuild & upload

### 4. Google My Business (10 menit)

- [ ] Daftar di https://business.google.com
- [ ] Isi profil lengkap
- [ ] Verifikasi bisnis
- [ ] Tambahkan foto & layanan

---

## 📅 Minggu Pertama

### Hari 1-2: Setup Foundation ✅

- [x] Google Search Console
- [x] Sitemap & Robots.txt
- [x] Meta tags optimization
- [ ] Google Analytics
- [ ] Google My Business

### Hari 3-4: Social Media

- [ ] Facebook Business Page
- [ ] Instagram Business
- [ ] LinkedIn Company
- [ ] Link website di semua profile

### Hari 5-7: First Content

- [ ] Tulis artikel pertama (1000+ kata)
- [ ] Optimasi dengan keywords
- [ ] Publish di blog
- [ ] Share di social media

---

## 🚀 Deploy Update SEO

```bash
# Rebuild dengan optimasi SEO
npm run build:hostinger

# Upload ke Hostinger:
# - Upload hostinger-build.zip
# - Extract di public_html
# - Upload .htaccess
```

---

## 📊 Metrics to Track

**Week 1:**

- Google indexing status
- Setup completion

**Week 2-4:**

- Visitor count
- Traffic sources
- Bounce rate

**Month 2-3:**

- Keyword rankings
- Backlinks count
- Conversions

---

## ⚡ Quick Wins (DO NOW!)

1. ✅ Sitemap submitted
2. ✅ Meta tags optimized
3. ✅ Robots.txt configured
4. ✅ Structured data added
5. [ ] Google Analytics installed
6. [ ] GMB verified
7. [ ] First blog post published
8. [ ] Social media profiles created

---

**Target 30 Hari:** Website terindex Google & mulai dapat traffic organik! 🎯
