# Deployment Checklist - AISCARE Website

## Pre-Deployment Checklist

### Code Quality
- [x] HTML validated
- [x] CSS validated
- [x] JavaScript no errors
- [x] All links work
- [x] Images optimized
- [x] Responsive design tested

### Content
- [x] All text proofread (ID)
- [x] All text proofread (EN)
- [x] Contact information verified
- [x] Logo files in place
- [ ] Favicon created (32x32px)
- [ ] Replace testimonial placeholders

### Files Ready
- [x] index.html
- [x] css/style.css
- [x] js/main.js
- [x] js/language.js
- [x] README.md
- [x] PROGRESS.md
- [x] TODO.md
- [x] CNAME file
- [x] Logo files

---

## Deployment Steps

### Step 1: Initialize Git Repository
```bash
cd "d:\AISCARE\AISCARE WEB"
git init
git add .
git commit -m "Initial commit: AISCARE Company Profile Website"
```

**Status**: ⬜ NOT STARTED

---

### Step 2: Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `aiscare-website` (atau `username.github.io`)
3. Description: "AISCARE - Sistem Informasi Manajemen Klinik"
4. Public repository
5. DO NOT initialize with README (we already have files)
6. Create repository

**Status**: ⬜ NOT STARTED

---

### Step 3: Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/aiscare-website.git
git branch -M main
git push -u origin main
```

**Status**: ⬜ NOT STARTED

---

### Step 4: Enable GitHub Pages
1. Repository → Settings → Pages
2. Source: main branch, / (root)
3. Click Save
4. Wait 2-5 minutes for deployment
5. Test URL: `https://YOUR_USERNAME.github.io/aiscare-website/`

**Status**: ⬜ NOT STARTED

---

### Step 5: Setup Cloudflare DNS
1. Login to Cloudflare: https://dash.cloudflare.com
2. Select site: `aiscare.id`
3. Go to DNS settings
4. Add DNS records:

#### A Records (Root Domain)
```
Type: A | Name: @ | Content: 185.199.108.153 | Proxy: ON
Type: A | Name: @ | Content: 185.199.109.153 | Proxy: ON
Type: A | Name: @ | Content: 185.199.110.153 | Proxy: ON
Type: A | Name: @ | Content: 185.199.111.153 | Proxy: ON
```

#### CNAME Record (WWW)
```
Type: CNAME | Name: www | Content: YOUR_USERNAME.github.io | Proxy: ON
```

**Status**: ⬜ NOT STARTED

---

### Step 6: Configure Custom Domain in GitHub
1. Repository → Settings → Pages
2. Custom domain: `aiscare.id`
3. Click Save
4. Wait for DNS check (green checkmark)
5. Enable "Enforce HTTPS" (after DNS propagates)

**Status**: ⬜ NOT STARTED

---

### Step 7: Cloudflare SSL Configuration
1. Cloudflare → SSL/TLS
2. Encryption mode: **Full** (recommended)
3. Edge Certificates:
   - Always Use HTTPS: ✅ ON
   - Automatic HTTPS Rewrites: ✅ ON
   - Minimum TLS Version: 1.2
   - Opportunistic Encryption: ✅ ON
   - TLS 1.3: ✅ ON

**Status**: ⬜ NOT STARTED

---

### Step 8: Cloudflare Speed Optimization
1. Cloudflare → Speed → Optimization
2. Enable:
   - Auto Minify: HTML, CSS, JavaScript ✅
   - Brotli compression ✅
   - Early Hints ✅
   - HTTP/2 to Origin ✅
   - HTTP/3 (with QUIC) ✅
   - 0-RTT Connection Resumption ✅

**Status**: ⬜ NOT STARTED

---

### Step 9: Verification & Testing

#### DNS Propagation Check
- [ ] Check DNS: https://dnschecker.org (enter: aiscare.id)
- [ ] Wait for worldwide propagation (green checkmarks)

#### Website Testing
- [ ] https://aiscare.id loads correctly
- [ ] https://www.aiscare.id redirects to aiscare.id
- [ ] SSL certificate shows (padlock icon)
- [ ] No mixed content warnings
- [ ] Mobile responsive working
- [ ] Language switcher working
- [ ] WhatsApp links working
- [ ] Contact form → WhatsApp working
- [ ] All images loading
- [ ] Navigation menu working
- [ ] Scroll animations working

#### Browser Testing
- [ ] Chrome (Desktop)
- [ ] Chrome (Mobile)
- [ ] Firefox (Desktop)
- [ ] Safari (iPhone)
- [ ] Safari (iPad)
- [ ] Edge (Desktop)

#### Performance Testing
- [ ] Google PageSpeed Insights: https://pagespeed.web.dev/
  - Target: 90+ Mobile, 95+ Desktop
- [ ] GTmetrix: https://gtmetrix.com/
  - Target: Grade A

**Status**: ⬜ NOT STARTED

---

### Step 10: Post-Deployment Setup

#### Analytics Setup (Optional but Recommended)
- [ ] Google Analytics 4 setup
- [ ] Google Search Console verification
- [ ] Submit sitemap (if created)
- [ ] Bing Webmaster Tools (optional)

#### Social Media
- [ ] Update Instagram bio with website link
- [ ] Update Facebook page with website link
- [ ] Update LinkedIn with website link
- [ ] Share launch announcement

#### Marketing
- [ ] Send email to existing clients
- [ ] WhatsApp broadcast to prospects
- [ ] Update email signature with website
- [ ] Update business cards (if applicable)

**Status**: ⬜ NOT STARTED

---

## Quick Reference Commands

### Update Website Content
```bash
# After editing files
git add .
git commit -m "Update: [describe changes]"
git push
```

### Check Git Status
```bash
git status
git log --oneline -5
```

### Rollback Changes
```bash
# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1
```

---

## Emergency Contacts

**Domain Issues**: Registrar support
**GitHub Issues**: https://github.com/support
**Cloudflare Issues**: https://support.cloudflare.com/

**AISCARE Technical**:
- WhatsApp: +62 857-5535-7264
- Email: info@aiscare.id

---

## Success Criteria

### Must Have (Before Go-Live)
- [x] Website files complete
- [x] No broken links
- [x] Mobile responsive
- [x] Contact form working
- [ ] Deployed to GitHub
- [ ] Custom domain active
- [ ] SSL certificate active

### Should Have (Within 24 Hours)
- [ ] Analytics installed
- [ ] Performance score 90+
- [ ] All browsers tested
- [ ] Social media updated

### Nice to Have (Within 1 Week)
- [ ] Real testimonials added
- [ ] More client logos added
- [ ] Blog section started
- [ ] SEO optimization complete

---

## Timeline Estimate

| Task | Estimated Time |
|------|----------------|
| GitHub setup & push | 10 minutes |
| GitHub Pages enable | 5 minutes |
| Cloudflare DNS config | 15 minutes |
| DNS propagation wait | 5-30 minutes |
| SSL certificate active | 5-15 minutes |
| Testing & verification | 30 minutes |
| **TOTAL** | **~1-2 hours** |

---

## Notes & Reminders

- GitHub Pages builds might take 2-5 minutes after each push
- DNS propagation can take 5 minutes to 48 hours (usually 10-20 minutes)
- SSL certificate might take 15-30 minutes to provision
- Always test in incognito/private mode to avoid cache issues
- Keep this checklist updated as you complete tasks

---

**Deployment Date**: _______________
**Completed By**: _______________
**Website Live**: _______________

---

**Next Steps After Launch**:
1. Monitor analytics daily (first week)
2. Respond to inquiries within 24 hours
3. Update TODO.md with new priorities
4. Schedule content updates weekly
5. Review performance metrics monthly

---

**🎉 Ready to launch when you are!**
