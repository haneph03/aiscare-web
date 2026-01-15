# 🚀 QUICK START GUIDE - AISCARE Website

## Langkah Cepat Deploy Website (15 Menit)

### Prerequisites
- ✅ Akun GitHub (gratis): https://github.com/signup
- ✅ Akun Cloudflare (gratis): https://dash.cloudflare.com/sign-up
- ✅ Domain aiscare.id sudah dibeli
- ✅ Git terinstall di komputer (download: https://git-scm.com/)

---

## 🎯 Step-by-Step (Copy-Paste Ready!)

### STEP 1: Buka Terminal/Command Prompt

Di Windows, buka Command Prompt atau PowerShell:
- Tekan `Win + R`
- Ketik `cmd` lalu Enter
- Atau cari "Command Prompt" di Start Menu

### STEP 2: Navigasi ke Folder Project

```bash
cd "d:\AISCARE\AISCARE WEB"
```

### STEP 3: Initialize Git

```bash
git init
git add .
git commit -m "Initial commit: AISCARE Company Profile Website"
```

**Output yang diharapkan**: "X files changed, Y insertions(+)"

---

### STEP 4: Create GitHub Repository

1. Buka browser, pergi ke: https://github.com/new
2. **Repository name**: `aiscare-website`
3. **Description**: `AISCARE - Sistem Informasi Manajemen Klinik`
4. Pilih: **Public**
5. JANGAN centang "Add a README file"
6. Klik **Create repository**

### STEP 5: Push ke GitHub

Ganti `YOUR_USERNAME` dengan username GitHub Anda:

```bash
git remote add origin https://github.com/YOUR_USERNAME/aiscare-website.git
git branch -M main
git push -u origin main
```

**Jika diminta login**: Masukkan username dan password GitHub Anda

**Output yang diharapkan**: "Branch 'main' set up to track remote branch 'main'"

---

### STEP 6: Enable GitHub Pages

1. Di repository GitHub, klik tab **Settings** (⚙️)
2. Di sidebar kiri, klik **Pages**
3. Di bagian **Source**:
   - Branch: pilih **main**
   - Folder: pilih **/ (root)**
4. Klik **Save**
5. Tunggu 2-5 menit

**Temporary URL**: `https://YOUR_USERNAME.github.io/aiscare-website/`

Buka URL ini untuk test website!

---

### STEP 7: Setup Cloudflare (Custom Domain)

#### A. Add Domain ke Cloudflare

1. Login ke: https://dash.cloudflare.com
2. Klik **Add a Site**
3. Masukkan: `aiscare.id`
4. Pilih **Free Plan**
5. Klik **Continue**

#### B. Update Nameservers

Cloudflare akan memberikan 2 nameservers, contoh:
- `alex.ns.cloudflare.com`
- `rita.ns.cloudflare.com`

**Login ke domain registrar Anda** (tempat beli domain) dan update nameservers dengan yang diberikan Cloudflare.

⏳ Tunggu 5-60 menit untuk nameserver propagation.

#### C. Add DNS Records

Setelah nameservers active, di Cloudflare → **DNS**:

**Tambahkan 4 A Records untuk root domain:**

```
Type: A
Name: @
IPv4: 185.199.108.153
Proxy: 🟠 Proxied (ON)
---
Type: A
Name: @
IPv4: 185.199.109.153
Proxy: 🟠 Proxied (ON)
---
Type: A
Name: @
IPv4: 185.199.110.153
Proxy: 🟠 Proxied (ON)
---
Type: A
Name: @
IPv4: 185.199.111.153
Proxy: 🟠 Proxied (ON)
```

**Tambahkan CNAME untuk www:**

```
Type: CNAME
Name: www
Target: YOUR_USERNAME.github.io
Proxy: 🟠 Proxied (ON)
```

Ganti `YOUR_USERNAME` dengan username GitHub Anda!

Klik **Save** untuk setiap record.

#### D. Configure SSL

Di Cloudflare → **SSL/TLS**:
1. Encryption mode: **Full**
2. Scroll ke bawah, klik **Edge Certificates**
3. Enable:
   - ✅ Always Use HTTPS
   - ✅ Automatic HTTPS Rewrites
   - ✅ TLS 1.3

---

### STEP 8: Connect Custom Domain to GitHub

1. Kembali ke GitHub repository → **Settings** → **Pages**
2. Di bagian **Custom domain**, masukkan: `aiscare.id`
3. Klik **Save**
4. Tunggu DNS check selesai (green checkmark ✅)
5. Enable: ✅ **Enforce HTTPS**

⏳ Tunggu 5-15 menit untuk SSL certificate.

---

### STEP 9: Verification! 🎉

Buka browser dan test:

- ✅ https://aiscare.id
- ✅ https://www.aiscare.id
- ✅ Check SSL certificate (padlock icon 🔒)
- ✅ Test di mobile phone
- ✅ Test language switcher (ID/EN)
- ✅ Test WhatsApp link
- ✅ Test contact form

**Jika semua berfungsi → CONGRATULATIONS! 🎉**

---

## 🔄 Update Website (After Launch)

Setiap kali mau update content:

```bash
# 1. Edit files (index.html, css, js, etc.)

# 2. Save changes

# 3. Run these commands:
cd "d:\AISCARE\AISCARE WEB"
git add .
git commit -m "Update: tambah testimonial baru"
git push

# 4. Wait 1-2 minutes, refresh browser!
```

---

## 🆘 Troubleshooting

### "Git not recognized as command"
**Solution**: Install Git dari https://git-scm.com/download/win

### "Permission denied (publickey)"
**Solution**: Use HTTPS URL instead of SSH, atau setup SSH key

### "Website tidak muncul"
**Solution**: 
1. Check GitHub Actions (tab Actions di repository)
2. Tunggu 2-5 menit
3. Clear browser cache (Ctrl + Shift + R)

### "SSL Certificate error"
**Solution**:
1. Tunggu 15-30 menit untuk certificate provision
2. Check Cloudflare SSL settings = Full
3. Pastikan "Always Use HTTPS" enabled

### "Custom domain not working"
**Solution**:
1. Check DNS propagation: https://dnschecker.org
2. Pastikan nameservers sudah update di registrar
3. Tunggu max 24 jam (usually 10-30 minutes)

---

## 📞 Need Help?

**AISCARE Support**:
- WhatsApp: +62 857-5535-7264
- Email: info@aiscare.id

**Technical Issues**:
- GitHub: https://github.com/support
- Cloudflare: https://support.cloudflare.com/

---

## 📚 Full Documentation

- 📖 [README.md](README.md) - Complete guide
- 🚀 [DEPLOYMENT.md](DEPLOYMENT.md) - Detailed deployment
- 📊 [SUMMARY.md](SUMMARY.md) - Project overview
- 📝 [TODO.md](TODO.md) - Future improvements

---

## ✅ Checklist

Before going live:
- [ ] Test website locally (double-click index.html)
- [ ] Check WhatsApp number correct (+62 857-5535-7264)
- [ ] Check email address correct (info@aiscare.id)
- [ ] Review all content (no typos)
- [ ] Test on mobile phone
- [ ] Test language switcher
- [ ] Test all links working

After going live:
- [ ] Share on social media
- [ ] Email to existing clients
- [ ] Update email signature
- [ ] Update WhatsApp status/bio
- [ ] Update business cards
- [ ] Setup Google Analytics
- [ ] Submit to Google Search Console

---

## 🎯 Timeline

| Task | Time Required |
|------|---------------|
| Git setup & push | 5 minutes |
| GitHub Pages | 3 minutes |
| Cloudflare DNS | 10 minutes |
| DNS propagation | 10-30 minutes |
| SSL activation | 10-20 minutes |
| Testing | 10 minutes |
| **TOTAL** | **~1 hour** |

---

**🚀 Siap? LET'S GO!**

Ikuti step by step di atas, dan dalam 1 jam website Anda akan LIVE! 

**Remember: ANDARES - Anda Tahu Beres!** ✨
