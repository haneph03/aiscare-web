/**
 * AISCARE - Bilingual Language Switcher
 * Supports Indonesian (ID) and English (EN)
 */

// Language translations
const translations = {
    // Navigation
    'nav-home': {
        'id': 'Beranda',
        'en': 'Home'
    },
    'nav-about': {
        'id': 'Tentang',
        'en': 'About'
    },
    'nav-features': {
        'id': 'Fitur',
        'en': 'Features'
    },
    'nav-clients': {
        'id': 'Klien',
        'en': 'Clients'
    },
    'nav-contact': {
        'id': 'Kontak',
        'en': 'Contact'
    },
    'nav-demo': {
        'id': 'Demo Gratis',
        'en': 'Free Demo'
    },
    
    // Hero Section
    'hero-title': {
        'id': 'Kelola Klinik Anda 10x Lebih Cepat dengan <span class=\"gradient-text\">AISCARE AI</span>',
        'en': 'Manage Your Clinic 10x Faster with <span class=\"gradient-text\">AISCARE AI</span>'
    },
    'hero-subtitle': {
        'id': 'Dari Pendaftaran Pasien hingga Laporan SATUSEHAT - Semua Otomatis! <strong>ANDARES</strong> (Anda Tahu Beres) - Klinik Modern, Pasien Puas, Anda Tenang.',
        'en': 'From Patient Registration to SATUSEHAT Reports - All Automated! <strong>ANDARES</strong> (You Know It\'s Handled) - Modern Clinic, Happy Patients, Peace of Mind.'
    },
    'stat-clients': {
        'id': 'Klien Aktif',
        'en': 'Active Clients'
    },
    'stat-satusehat': {
        'id': 'SATUSEHAT Ready',
        'en': 'SATUSEHAT Ready'
    },
    'stat-ai': {
        'id': 'Powered',
        'en': 'Powered'
    },
    
    // Pain Points Section
    'pain-title': {
        'id': 'Masih Kelola Klinik Secara Manual?',
        'en': 'Still Managing Clinic Manually?'
    },
    'pain-subtitle': {
        'id': 'Saatnya beralih ke sistem modern yang menghemat waktu dan meningkatkan kepuasan pasien',
        'en': 'Time to switch to a modern system that saves time and increases patient satisfaction'
    },
    'pain-1-title': {
        'id': 'Pendaftaran Pasien Lama & Ribet?',
        'en': 'Patient Registration Slow & Complicated?'
    },
    'pain-1-text': {
        'id': 'Antrian mengular, pasien mengeluh, data sering salah',
        'en': 'Long queues, patient complaints, frequent data errors'
    },
    'pain-2-title': {
        'id': 'Laporan SATUSEHAT Bikin Pusing?',
        'en': 'SATUSEHAT Reports Giving Headaches?'
    },
    'pain-2-text': {
        'id': 'Upload manual berulang kali, sering error, buang waktu',
        'en': 'Repeated manual uploads, frequent errors, time-wasting'
    },
    'pain-3-title': {
        'id': 'Takut Data Pasien Hilang?',
        'en': 'Afraid of Losing Patient Data?'
    },
    'pain-3-text': {
        'id': 'Rekam medis kertas berantakan, susah dicari saat butuh',
        'en': 'Paper records messy, hard to find when needed'
    },
    'pain-4-title': {
        'id': 'Klaim BPJS Sering Ditolak?',
        'en': 'BPJS Claims Often Rejected?'
    },
    'pain-4-text': {
        'id': 'Proses verifikasi ribet, pencairan lama, cashflow terganggu',
        'en': 'Complex verification, slow disbursement, disrupted cashflow'
    },
    'solution-badge': {
        'id': '✅ AISCARE Solusinya!',
        'en': '✅ AISCARE is the Solution!'
    },
    'solution-text': {
        'id': 'Dengan AISCARE, semua masalah ini teratasi. Klinik Anda jadi lebih modern, profesional, dan pasien lebih puas!',
        'en': 'With AISCARE, all these problems are solved. Your clinic becomes more modern, professional, and patients are more satisfied!'
    },
    'cta-demo': {
        'id': 'Coba Demo Gratis',
        'en': 'Try Free Demo'
    },
    'cta-contact': {
        'id': 'Hubungi Kami',
        'en': 'Contact Us'
    },Daftar Pasien Cuma 10 Detik!',
        'en': 'Register Patient in Just 10 Seconds!'
    },
    'feature-ai-text': {
        'id': 'Kirim foto KTP via WhatsApp, langsung terdaftar otomatis. Tidak perlu ketik manual, antrian cepat, pasien senang!',
        'en': 'Send ID photo via WhatsApp, automatically registered. No manual typing, fast queue, happy patients!'
    },
    'feature-satusehat-title': {
        'id': 'Laporan SATUSEHAT Sekali Klik!',
        'en': 'SATUSEHAT Report with One Click!'
    },
    'feature-satusehat-text': {
        'id': 'Tidak perlu upload manual lagi. Data otomatis terkirim ke SATUSEHAT Kemenkes. Hemat waktu, bebas error!',
        'en': 'No more manual uploads. Data automatically sent to Ministry of Health SATUSEHAT. Save time, error-free!'
    },
    'feature-bpjs-title': {
        'id': 'Klaim BPJS Lebih Lancar!',
        'en': 'Smoother BPJS Claims!'
    },
    'feature-bpjs-text': {
        'id': 'Integrasi BPJS segera hadir. Verifikasi otomatis, proses klaim lebih cepat, cashflow klinik Anda lebih sehat!',
        'en': 'BPJS integration coming soon. Automatic verification, faster claims, healthier clinic cashflow!'
    },
    'feature-emr-title': {
        'id': 'Temukan Riwayat Pasien dalam 3 Detik!',
        'en': 'Find Patient History in 3 Seconds!'
    },
    'feature-emr-text': {
        'id': 'Tidak perlu buka-buka berkas lagi. Semua data pasien tersimpan aman dan bisa diakses kapan saja, di mana saja!',
        'en': 'No more file browsing. All patient data stored securely and accessible anytime, anywhere!'
    },
    'feature-mobile-title': {
        'id': 'Pantau Klinik Dari Rumah!',
        'en': 'Monitor Clinic from Home!'
    },
    'feature-mobile-text': {
        'id': 'Cek pasien, lihat laporan, monitor keuangan - semua bisa dari HP Anda. Liburan tetap tenang!',
        'en': 'Check patients, view reports, monitor finances - all from your phone. Vacation with peace of mind!'
    },
    'feature-fast-title': {
        'id': 'Staff Langsung Bisa Pakai!',
        'en': 'Staff Can Use It Right Away!'
    },
    'feature-fast-text': {
        'id': 'Interface super mudah, seperti pakai WhatsApp. Tidak perlu training lama, 30 menit sudah mahir!',
        'en': 'Super easy interface, like using WhatsApp. No long training, proficient in 30 minutes!'
    },
    
    // Segmentation Section
    'segment-title': {
        'id': 'AISCARE Cocok Untuk Siapa?',
        'en': 'Who is AISCARE For?'
    },
    'segment-subtitle': {
        'id': 'Apapun jenis fasilitas kesehatan Anda, AISCARE siap membantu',
        'en': 'Whatever your healthcare facility type, AISCARE is ready to help'
    },
    'segment-1': {
        'id': 'Klinik Pratama & Utama',
        'en': 'Primary & Advanced Clinics'
    },
    'segment-2': {
        'id': 'Praktik Dokter Umum & Spesialis',
        'en': 'General & Specialist Doctor Practices'
    },
    'segment-3': {
        'id': 'Klinik Bidan & Kebidanan',
        'en': 'Midwife & Maternity Clinics'
    },
    'segment-4': {
        'id': 'Puskesmas & Faskes Pemerintah',
        'en': 'Community Health Centers & Gov. Facilities'
    },
    'segment-5': {
        'id': 'Klinik Gigi & Estetika',
        'en': 'Dental & Aesthetic Clinics'
    },
    'segment-6': {
        'id': 'Klinik Perawat & Home Care',
        'en': 'Nursing & Home Care Clinics'
    },
    
    // Clients Section
    'clients-title': {
        'id': 'Klinik Lain Sudah Pakai AISCARE',
        'en': 'Other Clinics Are Already Using AISCARE'
    },
    'clients-subtitle': {
        'id': 'Kapan Giliran Anda?',
        'en': 'When Is Your Turn?'
    },
    
    // Demo Section
    'demo-title': {
        'id': 'Jangan Sampai Klinik Anda Tertinggal!',
        'en': 'Don\'t Let Your Clinic Fall Behind!'
    },
    'demo-subtitle': {
        'id': 'Coba gratis 14 hari tanpa kartu kredit. Setup cuma 15 menit. Hubungi kami sekarang!',
        'en': 'Try free for 14 days without a credit card. Setup only takes 15 minutes. Contact us now!'
    },
    'client-placeholder': {
        'id': 'Klien Anda Berikutnya?',
        'en': 'Your Next Client?'
    },
    'testimonial-placeholder': {
        'id': '"Testimonial dari klien akan ditampilkan di sini. Sistem yang mudah dan praktis untuk mengelola klinik."',
        'en': '"Client testimonials will be displayed here. An easy and practical system for managing clinics."'
    },
    
    // Demo Section (legacy translations kept for compatibility)
    'demo-text': {
        'id': 'Lihat sendiri bagaimana AISCARE dapat membantu praktik Anda. Hubungi kami untuk demo gratis tanpa komitmen.',
        'en': 'See for yourself how AISCARE can help your practice. Contact us for a free demo with no commitment.'
    },
    'demo-feature-1': {
        'id': 'Demo langsung dengan tim kami',
        'en': 'Live demo with our team'
    },
    'demo-feature-2': {
        'id': 'Konsultasi gratis sesuai kebutuhan klinik',
        'en': 'Free consultation tailored to clinic needs'
    },
    'demo-feature-3': {
        'id': 'Trial period untuk evaluasi sistem',
        'en': 'Trial period for system evaluation'
    },
    
    // Contact Section
    'contact-title': {
        'id': 'Hubungi Kami',
        'en': 'Contact Us'
    },
    'contact-subtitle': {
        'id': 'Tim kami siap membantu Anda. Hubungi kami untuk informasi lebih lanjut atau demo',
        'en': 'Our team is ready to help you. Contact us for more information or demo'
    },
    'contact-whatsapp': {
        'id': 'WhatsApp',
        'en': 'WhatsApp'
    },
    'contact-email': {
        'id': 'Email',
        'en': 'Email'
    },
    'contact-web': {
        'id': 'Website',
        'en': 'Website'
    },
    'form-name': {
        'id': 'Nama Lengkap',
        'en': 'Full Name'
    },
    'form-phone': {
        'id': 'Nomor WhatsApp',
        'en': 'WhatsApp Number'
    },
    'form-clinic': {
        'id': 'Nama Klinik/Praktik',
        'en': 'Clinic/Practice Name'
    },
    'form-message': {
        'id': 'Pesan',
        'en': 'Message'
    },
    'form-submit': {
        'id': 'Kirim via WhatsApp',
        'en': 'Send via WhatsApp'
    },
    
    // Footer
    'footer-tagline': {
        'id': 'ANDARES - Anda Tahu Beres<br>Solusi SIM Klinik Terpercaya',
        'en': 'ANDARES - You Know It\'s Handled<br>Trusted Clinic Management Solution'
    },
    'footer-links-title': {
        'id': 'Tautan',
        'en': 'Links'
    },
    'footer-home': {
        'id': 'Beranda',
        'en': 'Home'
    },
    'footer-about': {
        'id': 'Tentang',
        'en': 'About'
    },
    'footer-features': {
        'id': 'Fitur',
        'en': 'Features'
    },
    'footer-contact': {
        'id': 'Kontak',
        'en': 'Contact'
    },
    'footer-legal-title': {
        'id': 'Legal',
        'en': 'Legal'
    },
    'footer-privacy': {
        'id': 'Kebijakan Privasi',
        'en': 'Privacy Policy'
    },
    'footer-terms': {
        'id': 'Syarat & Ketentuan',
        'en': 'Terms & Conditions'
    },
    'footer-pse': {
        'id': 'Terdaftar PSE Kominfo',
        'en': 'Registered PSE Kominfo'
    },
    'footer-contact-title': {
        'id': 'Kontak',
        'en': 'Contact'
    },
    'footer-copyright': {
        'id': '&copy; 2026 AISCARE Indonesia. All rights reserved.',
        'en': '&copy; 2026 AISCARE Indonesia. All rights reserved.'
    }
};

// Current language (default: Indonesian)
let currentLanguage = 'id';

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    // Check if there's a saved language preference
    const savedLanguage = localStorage.getItem('aiscare_language');
    if (savedLanguage) {
        currentLanguage = savedLanguage;
        updateLanguage(currentLanguage);
    }
    
    // Language toggle button
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
});

/**
 * Toggle between Indonesian and English
 */
function toggleLanguage() {
    currentLanguage = currentLanguage === 'id' ? 'en' : 'id';
    updateLanguage(currentLanguage);
    
    // Save preference
    localStorage.setItem('aiscare_language', currentLanguage);
}

/**
 * Update all text content based on selected language
 */
function updateLanguage(lang) {
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update language button text
    const currentLangBtn = document.getElementById('current-lang');
    if (currentLangBtn) {
        currentLangBtn.textContent = lang.toUpperCase();
    }
    
    // Update all elements with data-id attribute
    const elements = document.querySelectorAll('[data-id]');
    elements.forEach(element => {
        const key = element.getAttribute('data-id');
        
        if (translations[key] && translations[key][lang]) {
            const translation = translations[key][lang];
            
            // Check if element is an input placeholder or label
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else if (element.tagName === 'LABEL') {
                element.textContent = translation;
            } else {
                // For other elements, update innerHTML to support HTML tags
                element.innerHTML = translation;
            }
        }
    });
    
    // Update page title
    if (lang === 'id') {
        document.title = 'AISCARE - ANDARES (Anda Tahu Beres) | SIM Klinik Terpercaya';
        document.querySelector('meta[name="description"]')?.setAttribute('content', 
            'AISCARE - Sistem Informasi Manajemen Klinik Terpercaya. Solusi Rekam Medis Elektronik untuk Dokter Praktik, Klinik, dan Bidan.');
    } else {
        document.title = 'AISCARE - ANDARES (You Know It\'s Handled) | Trusted Clinic Management';
        document.querySelector('meta[name="description"]')?.setAttribute('content', 
            'AISCARE - Trusted Clinic Management Information System. Electronic Medical Records Solution for Doctor Practices, Clinics, and Midwives.');
    }
}

/**
 * Get current language
 */
function getCurrentLanguage() {
    return currentLanguage;
}
