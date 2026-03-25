document.addEventListener('DOMContentLoaded', () => {
    
    // =========================================
    // 1. EFEITO 3D: EMOJIS DINÂMICOS
    // =========================================
    const emojisRomanticos = ['❤️', '💖', '✨', '🥰', '💕'];
    const emojisPicantes = ['🔥', '😈', '🌶️', '🥵', '💋'];

    const slides = document.querySelectorAll('.swiper-slide');

    slides.forEach((slide) => {
        // Ignora o último slide (mosaico) para não poluir a tela final
        if (slide.classList.contains('final-celebration-slide')) return;

        const container = document.createElement('div');
        container.className = 'bg-emojis-container';

        // Descobre o clima do slide (Safado ou Romântico)
        let emojisAtuais = emojisRomanticos;
        if (slide.classList.contains('theme-sexy-light') || slide.classList.contains('theme-sexy-heavy')) {
            emojisAtuais = emojisPicantes;
        }

        // Gera 15 emojis aleatórios por slide para criar a profundidade 3D
        for (let i = 0; i < 15; i++) {
            const emoji = document.createElement('div');
            emoji.className = 'floating-emoji';
            emoji.innerText = emojisAtuais[Math.floor(Math.random() * emojisAtuais.length)];

            // MÁGICA DO 3D: Valores aleatórios para criar profundidade
            const size = Math.random() * 2 + 1; // Tamanho entre 1rem e 3rem
            const blur = Math.random() * 5; // Desfoque (mais desfoque = parece estar mais longe ou muito perto)
            const left = Math.random() * 100; // Posição horizontal na tela (0 a 100%)
            const duration = Math.random() * 15 + 10; // Velocidade de subida (entre 10s e 25s)
            const delay = Math.random() * -20; // Delay negativo faz eles já aparecerem espalhados pela tela no início
            const opacity = Math.random() * 0.2 + 0.1; // Opacidade baixinha (0.1 a 0.3) pra ser sutil

            // Aplica os estilos no emoji
            emoji.style.fontSize = `${size}rem`;
            emoji.style.filter = `blur(${blur}px)`;
            emoji.style.left = `${left}%`;
            emoji.style.opacity = opacity;
            emoji.style.animationDuration = `${duration}s`;
            emoji.style.animationDelay = `${delay}s`;

            container.appendChild(emoji);
        }

        slide.appendChild(container);
    });

    // =========================================
    // 2. CONFIGURAÇÃO DAS MÚSICAS
    // =========================================
    const mainMusic = document.getElementById('bgMusicMain');
    const sexyMusic = document.getElementById('bgMusicSexy');
    const musicToggle = document.getElementById('musicToggle');
    
    let isMusicPlaying = false; 

    // Volume mais suave pra focar na leitura
    mainMusic.volume = 0.4;
    sexyMusic.volume = 0.4;

    // =========================================
    // 3. INICIALIZANDO O SWIPER
    // =========================================
    const swiper = new Swiper('.mySwiper', {
        effect: 'fade', 
        fadeEffect: { crossFade: true },
        speed: 800, 
        keyboard: { enabled: true },
        pagination: { el: '.swiper-pagination', clickable: true, dynamicBullets: true },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    });

    // =========================================
    // 4. TROCA DE MÚSICA NAS PÁGINAS QUENTES
    // =========================================
    swiper.on('slideChange', function () {
        if (!isMusicPlaying) return; 

        const slideAtual = swiper.activeIndex;

        // Slide 7 (índice 6) e Slide 8 (índice 7)
        if (slideAtual === 7 || slideAtual === 8) {
            mainMusic.pause();
            sexyMusic.play();
        } else {
            sexyMusic.pause();
            mainMusic.play();
        }
    });

    // =========================================
    // 5. BOTÃO PLAY/PAUSE
    // =========================================
    musicToggle.addEventListener('click', () => {
        const slideAtual = swiper.activeIndex;

        if (!isMusicPlaying) {
            if (slideAtual === 6 || slideAtual === 7) {
                sexyMusic.play();
            } else {
                mainMusic.play();
            }
            isMusicPlaying = true;
            musicToggle.textContent = "🔇 Pausar Música";
            musicToggle.style.background = "rgba(255,175,189,0.3)";
        } else {
            mainMusic.pause();
            sexyMusic.pause();
            isMusicPlaying = false;
            musicToggle.textContent = "🎵 Tocar Música";
            musicToggle.style.background = "rgba(255,255,255,0.1)";
        }
    });
});
