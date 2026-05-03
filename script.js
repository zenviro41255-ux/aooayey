document.addEventListener('DOMContentLoaded', () => {
    console.log("Hot Stream Play Store Clone initialized for Ani ❤️🔥");

    // Force-play all videos — bypass <base> tag by constructing local URLs
    const pageUrl = window.location.href.substring(0, window.location.href.lastIndexOf('/') + 1);
    document.querySelectorAll('video[data-local-src]').forEach(video => {
        video.muted = true;
        video.src = pageUrl + video.getAttribute('data-local-src');
        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.catch(() => {
                setTimeout(() => { video.play().catch(() => { }); }, 500);
            });
        }
    });


    // Horizontal Scroll with Mouse Wheel for the gallery
    const gallery = document.querySelector('.media-gallery');
    if (gallery) {
        gallery.addEventListener('wheel', (evt) => {
            evt.preventDefault();
            gallery.scrollLeft += evt.deltaY;
        });
    }

    // Install Button Click Effect
    const installBtn = document.querySelector('.install-btn');
    if (installBtn) {
        installBtn.addEventListener('click', () => {
            installBtn.textContent = 'Installing...';
            installBtn.style.opacity = '0.7';
            installBtn.disabled = true;

            setTimeout(() => {
                installBtn.textContent = 'Installed';
                installBtn.style.background = '#34a853';
                installBtn.style.opacity = '1';
                alert('Ani baby, Hot Stream is installed on your heart! 💋❤️🔥');
            }, 2000);
        });
    }

    // Smooth scroll for anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
