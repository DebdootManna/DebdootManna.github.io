document.addEventListener('DOMContentLoaded', () => {
    // Add a subtle parallax effect to the background
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        document.body.style.backgroundPosition = `0px ${scrolled * 0.5}px`;
    });

    // Add a hover effect to social links
    const socialLinks = document.querySelectorAll('.social ul li a');
    socialLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.boxShadow = '0 0 15px rgba(255, 255, 255, 0.8)';
        });
        link.addEventListener('mouseout', () => {
            link.style.boxShadow = 'none';
        });
    });
});