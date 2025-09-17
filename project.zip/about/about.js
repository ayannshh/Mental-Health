// --- CUSTOM CURSOR LOGIC HAS BEEN REMOVED ---


// --- Animated Background Glows ---
const glow1 = document.getElementById('glow1');
const glow2 = document.getElementById('glow2');
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const pageHeight = document.body.scrollHeight - window.innerHeight;
    const scrollFraction = scrollY / pageHeight;
    if (glow1) glow1.style.transform = `translate(${scrollFraction * 100}px, ${-scrollFraction * 150}px)`;
    if (glow2) glow2.style.transform = `translate(${-scrollFraction * 150}px, ${scrollFraction * 100}px)`;
});

// --- General Scroll Reveal ---
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); }
    });
}, { threshold: 0.1 });
revealElements.forEach(el => revealObserver.observe(el));

// --- ENHANCED Vertical Bar Animation ---
const vBarSection = document.getElementById('vBarSection');
if (vBarSection && window.innerWidth > 768) {
    const vBarProgress = document.getElementById('vBarProgress');
    const stats = document.querySelectorAll('.v-bar-stat');
    const nodes = document.querySelectorAll('.v-bar-node');
    const statTriggerPoints = [0.1, 0.25, 0.4, 0.55, 0.7];
    
    window.addEventListener('scroll', () => {
        const rect = vBarSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            const scrollableHeight = vBarSection.offsetHeight - window.innerHeight;
            let scrollProgress = (-rect.top) / scrollableHeight;
            scrollProgress = Math.max(0, Math.min(1, scrollProgress));
            
            if (vBarProgress) vBarProgress.style.height = `${scrollProgress * 100}%`;
            
            stats.forEach((stat, index) => {
                if (scrollProgress >= statTriggerPoints[index]) {
                    stat.classList.add('visible');
                    nodes[index]?.classList.add('filled');
                } else {
                    stat.classList.remove('visible');
                    nodes[index]?.classList.remove('filled');
                }
            });
        }
    });
}

// --- ENHANCED Horizontal Scroll for Team Section ---
const teamSectionWrapper = document.querySelector('.full-page-height-scroll-trigger');
const teamScrollContainer = document.getElementById('teamScrollContainer');
const teamMemberCards = document.querySelectorAll('.team-member-card');

if (teamSectionWrapper && teamScrollContainer && teamMemberCards.length > 0 && window.innerWidth > 768) {
    const cardWidth = teamMemberCards[0].offsetWidth + parseInt(getComputedStyle(teamMemberCards[0]).marginRight);
    const totalWidth = cardWidth * teamMemberCards.length;
    teamScrollContainer.style.width = `${totalWidth}px`;
    teamSectionWrapper.style.height = `${totalWidth}px`;

    function updateCardState() {
        const scrollLeft = -parseFloat(teamScrollContainer.style.transform?.replace('translateX(', '').replace('px)', '') || '0');
        teamMemberCards.forEach(card => {
            const cardLeft = card.offsetLeft;
            const cardCenter = cardLeft + card.offsetWidth / 2;
            const screenCenter = scrollLeft + window.innerWidth / 2;
            const distance = cardCenter - screenCenter;

            if (cardLeft < scrollLeft + window.innerWidth * 0.9 && cardLeft + card.offsetWidth > scrollLeft + window.innerWidth * 0.1) {
                card.classList.add('visible-card');
                // Parallax effect
                const parallaxStrength = 30; // pixels
                const parallaxOffset = - (distance / (window.innerWidth / 2)) * parallaxStrength;
                card.style.backgroundPosition = `calc(50% + ${parallaxOffset}px) center`;
            } else {
                card.classList.remove('visible-card');
            }
        });
    }

    window.addEventListener('scroll', () => {
        const rect = teamSectionWrapper.getBoundingClientRect();
        const scrollProgress = -rect.top / (rect.height - window.innerHeight);
        if (scrollProgress >= 0 && scrollProgress <= 1) {
            const maxScrollLeft = teamScrollContainer.scrollWidth - window.innerWidth;
            teamScrollContainer.style.transform = `translateX(-${scrollProgress * maxScrollLeft}px)`;
            updateCardState();
        }
    });
    setTimeout(updateCardState, 100);
} else if (window.innerWidth <= 768) {
     const wrapperMobile = document.querySelector('.full-page-height-scroll-trigger');
     if (wrapperMobile) { wrapperMobile.style.position = 'static'; wrapperMobile.style.height = 'auto'; }
     const containerMobile = document.getElementById('teamScrollContainer');
     if (containerMobile) {
        containerMobile.style.display = 'block'; containerMobile.style.width = 'auto'; containerMobile.style.transform = 'none';
     }
     teamMemberCards.forEach(card => card.classList.add('visible-card'));
}


// --- Nav Link Scroll Spy ---
window.addEventListener('scroll', () => {
    // Select all main sections that have an ID
    const sections = document.querySelectorAll('main section[id]');
    // Select all navigation links
    const navLinks = document.querySelectorAll('#navbar .nav-link');
    // Set an offset to account for the fixed header height
    const headerOffset = 100; 
    let currentSectionId = '';

    // Loop through each section to find which one is currently in view
    sections.forEach(section => {
        const sectionTop = section.offsetTop - headerOffset;
        const sectionHeight = section.offsetHeight;
        
        // Check if the current scroll position is within this section's bounds
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSectionId = section.getAttribute('id');
        }
    });

    // A special check for the very bottom of the page to ensure the last link is activated
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1) { // -1 for buffer
         const lastSection = sections[sections.length - 1];
         if (lastSection) {
            currentSectionId = lastSection.getAttribute('id');
         }
    }

    // Update the 'active' class on the navigation links
    let isAnyLinkActive = false;
    navLinks.forEach(link => {
        link.classList.remove('active');
        // Check if the link's href matches the current section's ID
        if (link.getAttribute('href') === `#${currentSectionId}`) {
            link.classList.add('active');
            isAnyLinkActive = true;
        }
    });

    // If no section is active (e.g., at the very top), activate the first link
    if (!isAnyLinkActive && navLinks.length > 0) {
        navLinks[0].classList.add('active');
    }
});