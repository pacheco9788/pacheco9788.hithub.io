// ================================================
// SALUD CAMIRI - INTERACTIVIDAD Y FUNCIONALIDAD
// ================================================

// 1. FUNCIONALIDAD DEL CARRUSEL AUTOMÁTICO (CAMBIO CADA 10 SEGUNDOS)
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-container .slide');
const totalSlides = slides.length;
const INTERVALO_TIEMPO = 10000; // 10000 milisegundos = 10 segundos

function cambiarSlide() {
    // Quita la clase 'active' de la diapositiva actual
    slides[currentSlide].classList.remove('active');
    
    // Calcula la siguiente diapositiva
    currentSlide = (currentSlide + 1) % totalSlides;
    
    // Agrega la clase 'active' a la nueva diapositiva
    slides[currentSlide].classList.add('active');
}

// Iniciar el temporizador automático de 10 segundos
setInterval(cambiarSlide, INTERVALO_TIEMPO);


// 2. NAVEGACIÓN ENTRE PESTAÑAS (SPA) Y BOTONES "MÁS INFORMACIÓN"
function cambiarTab(tabId) {
    // 1. Ocultar todos los contenidos de las pestañas
    const contenidos = document.querySelectorAll('.tab-content');
    contenidos.forEach(content => {
        content.classList.remove('active');
    });

    // 2. Desactivar el estado activo de los botones del menú
    const botones = document.querySelectorAll('.nav-btn');
    botones.forEach(btn => {
        btn.classList.remove('active');
    });

    // 3. Mostrar la pestaña solicitada
    const targetTab = document.getElementById(`tab-${tabId}`);
    if (targetTab) {
        targetTab.classList.add('active');
    }

    // 4. Activar el botón de navegación correspondiente
    // Mapeo entre id de tab y el índice del botón del menú
    const mapaBotones = {
        'inicio': 0,
        'hospital': 1,
        'clinicas': 2,
        'farmacias': 3,
        'postas': 4
    };

    if (mapaBotones[tabId] !== undefined) {
        botones[mapaBotones[tabId]].classList.add('active');
    }

    // 5. Desplazar suavemente hacia la sección si la pantalla está abajo
    window.scrollTo({
        top: document.querySelector('.carousel-container').offsetHeight - 20,
        behavior: 'smooth'
    });
}