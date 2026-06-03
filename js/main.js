
// BOTON IDIOMA — ES / EN


let currentLang = 'es';

const langToggle = document.getElementById('boton_idioma');
const langText = document.getElementById('lang-text');

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    applyLanguage(currentLang);
    langText.textContent = currentLang === 'es' ? 'EN' : 'ES';
    langToggle.classList.toggle('lang-active');
});

function applyLanguage(lang) {
    const elements = document.querySelectorAll('[data-es][data-en]');
    elements.forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
    });
}



// SCROLL ANIMATIONS — entrada desde la derecha


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('article, .tarjeta_proyectos, .tarjeta_normtec, .tarj_formacion, .sobremi_parrafo_contenedor, .nombre, .apellido').forEach(el => {
    el.classList.add('slide-in');
    observer.observe(el);
});