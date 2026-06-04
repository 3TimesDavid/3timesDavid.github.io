// BOTON IDIOMA — ES / EN
let currentLang = localStorage.getItem('lang') || 'es';

const langToggle = document.getElementById('boton_idioma');
const langText = document.getElementById('lang-text');

applyLanguage(currentLang);
langText.textContent = currentLang === 'es' ? 'EN' : 'ES';
if (currentLang === 'en') langToggle.classList.add('lang-active');

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    localStorage.setItem('lang', currentLang);
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

document.querySelectorAll('.tarjeta_proyectos, .imqiberica, .sgstecnos, .imqtecnocrea, .aidimme, .tarjeta_normtec, .tarj_formacion, .sobremi_parrafo_contenedor, .nombre, .apellido').forEach(el => {
    el.classList.add('slide-in');
    observer.observe(el);
});