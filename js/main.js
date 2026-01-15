/**
 * AISCARE - Main JavaScript
 * Handles navigation, forms, and interactions
 */

// ==========================================
// Smooth Scroll Navigation
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Back to top button
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    // Back to top functionality
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // ==========================================
    // Mobile Menu Toggle
    // ==========================================
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenuBtn.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuBtn.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
    
    // ==========================================
    // Active Navigation Link
    // ==========================================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function highlightNavigation() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavigation);
    
    // ==========================================
    // Contact Form - WhatsApp Integration
    // ==========================================
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const clinic = document.getElementById('clinic').value;
            const message = document.getElementById('message').value || '';
            
            // Format WhatsApp message
            const whatsappNumber = '6285755357264'; // Your WhatsApp number
            const currentLang = document.documentElement.lang;
            
            let whatsappMessage = '';
            
            if (currentLang === 'id') {
                whatsappMessage = `Halo AISCARE! 👋%0A%0A` +
                    `Saya tertarik untuk mencoba demo AISCARE.%0A%0A` +
                    `*Informasi Saya:*%0A` +
                    `Nama: ${name}%0A` +
                    `WhatsApp: ${phone}%0A` +
                    `Klinik/Praktik: ${clinic}%0A` +
                    (message ? `Pesan: ${message}%0A` : '') +
                    `%0ATerima kasih!`;
            } else {
                whatsappMessage = `Hello AISCARE! 👋%0A%0A` +
                    `I'm interested in trying AISCARE demo.%0A%0A` +
                    `*My Information:*%0A` +
                    `Name: ${name}%0A` +
                    `WhatsApp: ${phone}%0A` +
                    `Clinic/Practice: ${clinic}%0A` +
                    (message ? `Message: ${message}%0A` : '') +
                    `%0AThank you!`;
            }
            
            // Open WhatsApp
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
            window.open(whatsappURL, '_blank');
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // ==========================================
    // Smooth Scroll for All Anchor Links
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip empty anchors
            if (href === '#' || href === '#!') {
                e.preventDefault();
                return;
            }
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ==========================================
    // Animate Elements on Scroll (Intersection Observer)
    // ==========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements
    const animateElements = document.querySelectorAll(
        '.feature-card, .about-card, .client-card, .testimonial-card'
    );
    
    animateElements.forEach(el => observer.observe(el));
    
    // ==========================================
    // Quick WhatsApp Contact Links
    // ==========================================
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
    
    whatsappLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Track WhatsApp clicks if analytics is available
            if (typeof gtag !== 'undefined') {
                gtag('event', 'whatsapp_click', {
                    'event_category': 'Contact',
                    'event_label': 'WhatsApp'
                });
            }
        });
    });
    
    // ==========================================
    // Demo Button Clicks
    // ==========================================
    const demoButtons = document.querySelectorAll('[href="#demo"], [data-id="nav-demo"], [data-id="cta-demo"]');
    
    demoButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Scroll to contact section instead
            e.preventDefault();
            const contactSection = document.getElementById('contact');
            
            if (contactSection) {
                const offsetTop = contactSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Focus on name input after scroll
                setTimeout(() => {
                    const nameInput = document.getElementById('name');
                    if (nameInput) nameInput.focus();
                }, 600);
            }
        });
    });
    
    // ==========================================
    // External Link Handler
    // ==========================================
    const externalLinks = document.querySelectorAll('a[href^="http"]');
    
    externalLinks.forEach(link => {
        // Don't modify WhatsApp links or same domain links
        if (!link.href.includes('wa.me') && !link.href.includes(window.location.hostname)) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
    
    // ==========================================
    // Performance Optimization - Lazy Load Images
    // ==========================================
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[data-src]');
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        document.body.appendChild(script);
    }
    
    // ==========================================
    // Console Message
    // ==========================================
    console.log('%c🏥 AISCARE - ANDARES (Anda Tahu Beres)', 'color: #4F46E5; font-size: 16px; font-weight: bold;');
    console.log('%cSistem Informasi Manajemen Klinik Terpercaya', 'color: #6B7280; font-size: 12px;');
    console.log('%chttps://aiscare.id', 'color: #06B6D4; font-size: 12px;');
    
    // ==========================================
    // Parallax Scrolling Effect
    // ==========================================
    const parallaxLayers = document.querySelectorAll('.parallax-layer');
    const parallaxSections = document.querySelectorAll('.hero, .clients-section, .demo-section');
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        
        // Animate floating gradient layers
        parallaxLayers.forEach((layer, index) => {
            const speed = (index + 1) * 0.03;
            const yPos = -(scrolled * speed);
            layer.style.transform = `translate3d(0, ${yPos}px, 0)`;
        });
        
        // Parallax background sections
        parallaxSections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
            
            if (scrollPercent >= 0 && scrollPercent <= 1) {
                const yPos = (scrollPercent - 0.5) * 100;
                section.style.backgroundPosition = `center ${50 + yPos * 0.3}%`;
            }
        });
        
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });
    
});

// ==========================================
// Utility Functions
// ==========================================

/**
 * Debounce function to limit function calls
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Check if element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
