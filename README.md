# AISCARE Website - Deployment Guide 🚀

## Quick Start

Website AISCARE siap untuk di-deploy ke GitHub Pages dan dikonfigurasi dengan Cloudflare!

## 📁 File Structure

```
AISCARE WEB/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # Styling
├── js/
│   ├── main.js           # Main JavaScript
│   └── language.js       # Bilingual switcher
├── assets/
│   └── images/           # Images folder
├── logo klinik/          # Client logos
├── AISCARE Indonesia.png # Main logo
└── README.md            # This file
```

## 🚀 Deployment Steps

### 1. Setup GitHub Repository

```bash
# Initialize git (if not already)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: AISCARE Website"

# Create repository di GitHub: aiscare.github.io atau nama lain

# Add remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 2. Enable GitHub Pages

1. Buka repository di GitHub
2. Go to **Settings** → **Pages**
3. Source: pilih **main branch** dan **/ (root)**
4. Klik **Save**
5. Website akan tersedia di: `https://YOUR_USERNAME.github.io/YOUR_REPO/`

### 3. Setup Cloudflare

#### A. Add Domain ke Cloudflare

1. Login ke [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Klik **Add a Site**
3. Masukkan domain: `aiscare.id`
4. Pilih plan (Free plan sudah cukup)
5. Cloudflare akan scan DNS records Anda
6. Update nameservers di registrar domain Anda dengan nameservers Cloudflare

#### B. Configure DNS Records

Di Cloudflare DNS settings, tambahkan:

**Untuk root domain (aiscare.id):**
```
Type: A
Name: @
Content: 185.199.108.153
Proxy: Enabled (Orange cloud)

Type: A
Name: @
Content: 185.199.109.153
Proxy: Enabled (Orange cloud)

Type: A
Name: @
Content: 185.199.110.153
Proxy: Enabled (Orange cloud)

Type: A
Name: @
Content: 185.199.111.153
Proxy: Enabled (Orange cloud)
```

**Untuk www subdomain:**
```
Type: CNAME
Name: www
Content: YOUR_USERNAME.github.io
Proxy: Enabled (Orange cloud)
```

#### C. Configure GitHub Repository untuk Custom Domain

1. Di repository GitHub Anda, buka **Settings** → **Pages**
2. Di bagian **Custom domain**, masukkan: `aiscare.id`
3. Klik **Save**
4. Tunggu beberapa menit untuk DNS propagation
5. Centang **Enforce HTTPS** (akan otomatis available setelah DNS propagated)

#### D. Cloudflare SSL/TLS Settings

1. Di Cloudflare Dashboard → **SSL/TLS**
2. Pilih encryption mode: **Full** (recommended) atau **Flexible**
3. Di **Edge Certificates**:
   - Enable **Always Use HTTPS**
   - Enable **Automatic HTTPS Rewrites**

### 4. Create CNAME File (Important!)

Buat file bernama `CNAME` (no extension) di root folder dengan content:

```
aiscare.id
```

Lalu commit dan push:

```bash
echo "aiscare.id" > CNAME
git add CNAME
git commit -m "Add CNAME for custom domain"
git push
```

## ✅ Verification

Setelah deployment:

1. Check DNS propagation: https://dnschecker.org
2. Test website: https://aiscare.id dan https://www.aiscare.id
3. Verify SSL certificate (padlock icon di browser)

## 🔧 Update Website

Untuk update content:

```bash
# Edit files yang diinginkan
# Lalu:

git add .
git commit -m "Update: [deskripsi perubahan]"
git push
```

Website akan otomatis update dalam 1-2 menit!

## 📝 Important Files to Update

### Logo
- Replace `AISCARE Indonesia.png` dengan logo final Anda
- Untuk favicon, buat `assets/images/favicon.png` (32x32 or 64x64 px)

### Client Logos
- Tambahkan logo klien di folder `logo klinik/`
- Update HTML di section `#clients` untuk menampilkan logo baru

### Contact Information
- WhatsApp number sudah ter-set: `+62 857-5535-7264`
- Email: Update di `index.html` jika perlu (current: info@aiscare.id)

### Testimonials
- Update testimonial di section `#clients` dengan testimoni real dari klien

## 🎨 Customization Tips

### Colors
Edit di `css/style.css` bagian `:root`:
```css
--primary-color: #4F46E5;  /* Main brand color */
--secondary-color: #06B6D4; /* Accent color */
```

### Content
- Semua text ada di `index.html`
- Bilingual translations di `js/language.js`

## 🔍 SEO Optimization (Already Included)

✅ Meta tags
✅ Structured data ready
✅ Mobile responsive
✅ Fast loading
✅ Semantic HTML
✅ Alt texts for images

## 📱 Features

✅ Responsive design (mobile, tablet, desktop)
✅ Bilingual (Indonesian/English)
✅ WhatsApp integration
✅ Smooth scrolling
✅ Modern animations
✅ Contact form → WhatsApp
✅ Back to top button
✅ Fixed navigation

## 🚨 Troubleshooting

### Website tidak muncul setelah push
- Tunggu 2-5 menit untuk GitHub Pages build
- Check **Actions** tab di GitHub untuk build status

### Custom domain tidak work
- Pastikan DNS records sudah benar
- Tunggu DNS propagation (max 24-48 jam, biasanya 5-10 menit)
- Check di dnschecker.org

### SSL Error
- Tunggu beberapa menit untuk Cloudflare provision certificate
- Pastikan Cloudflare SSL mode = Full atau Flexible
- Enable "Always Use HTTPS" di Cloudflare

### Images tidak muncul
- Check path di HTML (harus relative path)
- Pastikan file images ada di repository
- Check browser console untuk errors

## 📞 Support

Untuk bantuan teknis deployment, contact:
- WhatsApp: +62 857-5535-7264
- Email: info@aiscare.id

## 📄 License

© 2026 AISCARE Indonesia. All rights reserved.
