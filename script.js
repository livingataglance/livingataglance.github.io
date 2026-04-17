document.addEventListener('DOMContentLoaded', () => {

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobile-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    let isMenuOpen = false;

    mobileBtn.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        if(isMenuOpen) {
            mobileNav.classList.add('active');
            // Animate hamburger to X
            mobileBtn.children[0].style.transform = 'translateY(8px) rotate(45deg)';
            mobileBtn.children[1].style.opacity = '0';
            mobileBtn.children[2].style.transform = 'translateY(-8px) rotate(-45deg)';
        } else {
            mobileNav.classList.remove('active');
            // Revert hamburger
            mobileBtn.children[0].style.transform = 'none';
            mobileBtn.children[1].style.opacity = '1';
            mobileBtn.children[2].style.transform = 'none';
        }
    });

    // Close mobile menu on link click
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            isMenuOpen = false;
            mobileBtn.children[0].style.transform = 'none';
            mobileBtn.children[1].style.opacity = '1';
            mobileBtn.children[2].style.transform = 'none';
        });
    });

    // Intersection Observer for scroll animations
    const fadeElements = document.querySelectorAll('.fade-up');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    fadeElements.forEach(element => {
        scrollObserver.observe(element);
    });

    // Modal Logic
    const modal = document.getElementById('service-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-description');
    const modalIcon = document.getElementById('modal-icon');
    const closeModal = document.getElementById('close-modal');
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.getAttribute('data-title');
            const desc = card.getAttribute('data-desc');
            const iconHTML = card.querySelector('.service-icon').innerHTML;

            modalTitle.textContent = title;
            modalDesc.textContent = desc;
            modalIcon.innerHTML = iconHTML;

            modal.classList.add('show');
            document.body.style.overflow = 'hidden'; // Prevent background scroll
        });
    });

    closeModal.addEventListener('click', () => {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto'; // allow background scroll
    });

    // Close on outside click
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });

    // Close modal when "Speak With An Expert" is clicked
    const modalContactBtn = document.getElementById('modal-contact-btn');
    modalContactBtn.addEventListener('click', () => {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    });

});
