        /* About card toggle
        document.getElementById('aboutCard').addEventListener('click', function() {
            this.classList.toggle('expanded');
        });
        */

        // About Overlay
        document.getElementById('aboutCard').addEventListener('click', function() {
            document.getElementById('aboutOverlay').classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        document.getElementById('closeAbout').addEventListener('click', function() {
            document.getElementById('aboutOverlay').classList.remove('active');
            document.body.style.overflow = 'auto';
        });
        
        // Expertise Overlay
        document.getElementById('expertiseCard').addEventListener('click', function() {
            document.getElementById('expertiseOverlay').classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        document.getElementById('closeExpertise').addEventListener('click', function() {
            document.getElementById('expertiseOverlay').classList.remove('active');
            document.body.style.overflow = 'auto';
        });
        
        // Contact Details Overlay
        document.getElementById('contactDetailsCard').addEventListener('click', function() {
            document.getElementById('contactDetailsOverlay').classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        document.getElementById('closeContactDetails').addEventListener('click', function() {
            document.getElementById('contactDetailsOverlay').classList.remove('active');
            document.body.style.overflow = 'auto';
        });
        
        // Contact Form Overlay
        document.getElementById('contactFormCard').addEventListener('click', function() {
            document.getElementById('contactFormOverlay').classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        document.getElementById('closeContactForm').addEventListener('click', function() {
            document.getElementById('contactFormOverlay').classList.remove('active');
            document.body.style.overflow = 'auto';
        });
        
        // Close overlays when clicking outside content
        document.querySelectorAll('.overlay').forEach(overlay => {
            overlay.addEventListener('click', function(e) {
                if (e.target === this) {
                    this.classList.remove('active');
                    document.body.style.overflow = 'auto';
                }
            });
        });
        
        // Form submission with validation
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const name = this.elements['name'].value;
            const phone = this.elements['phone'].value;
            const email = this.elements['email'].value;
            const message = this.elements['message'].value;
            
            if (!name || !phone || !email || !message) {
                alert('אנא מלא את כל השדות');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('אנא הזן כתובת אימייל תקינה');
                return;
            }
            
            // Phone validation
            const phoneRegex = /^[0-9\-\+]{9,15}$/;
            if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
                alert('אנא הזן מספר טלפון תקין');
                return;
            }
            
            // Create mailto link
            const mailtoLink = `mailto:mor.hershkovitz.cbt@gmail.com?subject=פנייה מכרטיס הביקור הדיגיטלי&body=שם: ${name}%0D%0Aטלפון: ${phone}%0D%0Aאימייל: ${email}%0D%0A%0D%0Aהודעה:%0D%0A${message}`;
            
            window.location.href = mailtoLink;
            
            // Reset form and close overlay
            this.reset();
            document.getElementById('contactFormOverlay').classList.remove('active');
            document.body.style.overflow = 'auto';
            
            // You would normally send the form data to a server here
            // For demonstration, we're showing an alert
            // alert('ההודעה נשלחה בהצלחה!');            
        });

        // Add this to your existing script section
        /*
        document.getElementById('aboutNav').addEventListener('click', function() {
            document.getElementById('aboutCard').classList.toggle('expanded');
            // Scroll to the about card
            document.getElementById('aboutCard').scrollIntoView({behavior: 'smooth'});
        });
        */

        document.getElementById('aboutNav').addEventListener('click', function() {
            document.getElementById('aboutOverlay').classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        document.getElementById('expertiseNav').addEventListener('click', function() {
            document.getElementById('expertiseOverlay').classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        document.getElementById('contactDetailsNav').addEventListener('click', function() {
            document.getElementById('contactDetailsOverlay').classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        document.getElementById('contactFormNav').addEventListener('click', function() {
            document.getElementById('contactFormOverlay').classList.add('active');
            document.body.style.overflow = 'hidden';
        });