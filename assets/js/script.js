
// Add scrolled class to header on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 0);
});
// Existing smooth scroll functionality for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function toggleExpand(clickedElement) {
    // Collapse any previously expanded card
    document.querySelectorAll('.portfolio-card.expanded').forEach(card => {
        if (card !== clickedElement.parentElement) {
            card.classList.remove('expanded');
        }
    });

    // Toggle the clicked card
    const portfolioCard = clickedElement.closest('.portfolio-card');
    portfolioCard.classList.toggle('expanded');
}
function toggleMenu() {
    const links = document.querySelector('.nav-links');
    links.classList.toggle('show');
}
