document.addEventListener('DOMContentLoaded', () => {
    let carouselIndex = 0;
    const carouselItems = document.querySelectorAll('.carousel div');

    function showNextProject() {
        carouselItems[carouselIndex].style.transform = 'translateX(-100%)';
        carouselIndex = (carouselIndex + 1) % carouselItems.length;
        carouselItems[carouselIndex].style.transform = 'translateX(0)';
    }

    setInterval(showNextProject, 3000); // Change project every 3 seconds

    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

