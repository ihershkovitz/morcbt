document.addEventListener('DOMContentLoaded', () => {
    // 20. Page loading animation removal
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 500); // slight delay to show the spinner briefly

    // 13. Refactor JS into reusable overlay handler
    function setupOverlay(cardId, overlayId, closeBtnId) {
        const card = document.getElementById(cardId);
        const overlay = document.getElementById(overlayId);
        const closeBtn = document.getElementById(closeBtnId);

        if (!card || !overlay || !closeBtn) return;

        const openOverlay = () => {
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            closeBtn.focus(); // Accessibility: focus the close button
        };

        card.addEventListener('click', openOverlay);
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openOverlay();
            }
        });

        closeBtn.addEventListener('click', () => {
            overlay.classList.remove('active');
            document.body.style.overflow = '';
            card.focus(); // Accessibility: return focus
        });

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.classList.remove('active');
                document.body.style.overflow = '';
                card.focus();
            }
        });
    }

    setupOverlay('aboutCard', 'aboutOverlay', 'closeAbout');
    setupOverlay('expertiseCard', 'expertiseOverlay', 'closeExpertise');
    setupOverlay('contactDetailsCard', 'contactDetailsOverlay', 'closeContactDetails');
    setupOverlay('contactFormCard', 'contactFormOverlay', 'closeContactForm');

    // 5. Add ESC key to close overlays
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.overlay.active').forEach(overlay => {
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        }
    });

    // Contact form handling (16. Basic validation before submitting to Formspree)
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            const phone = this.elements['phone'].value;
            const phoneRegex = /^[0-9\-\+]{9,15}$/;
            if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
                e.preventDefault();
                alert('אנא הזן מספר טלפון תקין');
            }
            // If valid, the form naturally submits to the action URL
        });
    }
});