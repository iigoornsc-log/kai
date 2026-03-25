document.addEventListener('DOMContentLoaded', () => {
    // 1. Configurando os elementos de áudio
    const mainMusic = document.getElementById('bgMusicMain');
    const sexyMusic = document.getElementById('bgMusicSexy');
    const musicToggle = document.getElementById('musicToggle');
    
    // Variável para saber se ela já ativou a música
    let isMusicPlaying = false; 

    // Baixando um pouco o volume para não estourar os ouvidos e focar na leitura
    mainMusic.volume = 0.4;
    sexyMusic.volume = 0.4;

    // 2. Inicializando o Swiper
    const swiper = new Swiper('.mySwiper', {
        effect: 'fade', 
        fadeEffect: { crossFade: true },
        speed: 800, 
        keyboard: { enabled: true },
        pagination: { el: '.swiper-pagination', clickable: true, dynamicBullets: true },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    });

    // 3. A Mágica: Trocando a música quando muda o slide
    swiper.on('slideChange', function () {
        // Se a música estiver mutada, a gente não faz nada
        if (!isMusicPlaying) return; 

        const slideAtual = swiper.activeIndex;

        // Slide 7 (índice 6) e Slide 8 (índice 7)
        if (slideAtual === 6 || slideAtual === 7) {
            mainMusic.pause();
            sexyMusic.play();
        } else {
            sexyMusic.pause();
            mainMusic.play();
        }
    });

    // 4. Lógica do botão de Play/Pause
    musicToggle.addEventListener('click', () => {
        const slideAtual = swiper.activeIndex;

        if (!isMusicPlaying) {
            // Se estava pausado, dá o play na música certa dependendo de onde ela está
            if (slideAtual === 6 || slideAtual === 7) {
                sexyMusic.play();
            } else {
                mainMusic.play();
            }
            isMusicPlaying = true;
            musicToggle.textContent = "🔇 Pausar Música";
            musicToggle.style.background = "rgba(255,175,189,0.3)";
        } else {
            // Se estava tocando, pausa tudo
            mainMusic.pause();
            sexyMusic.pause();
            isMusicPlaying = false;
            musicToggle.textContent = "🎵 Tocar Música";
            musicToggle.style.background = "rgba(255,255,255,0.1)";
        }
    });
});
