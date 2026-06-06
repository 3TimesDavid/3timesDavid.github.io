// IDIOMA — lee localStorage fijado desde la página principal

const lang = localStorage.getItem('lang') || 'es';

function applyLanguage(lang) {
    document.querySelectorAll('[data-es][data-en]').forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
    });
}

applyLanguage(lang);

// SCROLL ANIMATIONS

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.slide-in').forEach(el => observer.observe(el));
