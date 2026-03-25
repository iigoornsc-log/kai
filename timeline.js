// Inicializando o Swiper como um dev sênior faria
document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.mySwiper', {
        // Efeito de transição (pode ser 'slide', 'fade', 'cube', 'coverflow' ou 'flip')
        effect: 'fade', 
        fadeEffect: {
            crossFade: true
        },
        
        // Velocidade da transição em milissegundos
        speed: 800, 
        
        // Ativar navegação por teclado (setinhas)
        keyboard: {
            enabled: true,
        },

        // Paginação (as bolinhas embaixo)
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },

        // Botões de navegação lateral
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});
