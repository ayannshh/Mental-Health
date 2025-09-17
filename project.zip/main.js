document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Horizontal Scroller Animation ---
    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for reduced motion, add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        addAnimation();
    }

    function addAnimation() {
        
        scrollers.forEach((scroller) => {
            scroller.setAttribute("aria-hidden", true);
            const scrollerInner = scroller.querySelector(".scroller__inner");
            const scrollerContent = Array.from(scrollerInner.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                duplicatedItem.setAttribute("aria-hidden", true);
                scrollerInner.appendChild(duplicatedItem);
            });
        });
    }

    // --- NEW: ADVANCED SCROLL-DRIVEN ANIMATION ---
    const sequenceContainer = document.getElementById('scroll-sequence');
    const heroSection = document.getElementById('hero-section-sticky');
    const videoGallery = document.getElementById('video-gallery-sticky');
    const overlay1 = document.getElementById('text-overlay-1');
    const overlay2 = document.getElementById('text-overlay-2');
    const overlay3 = document.getElementById('text-overlay-3');

    // --- NEW: Horizontal Scroll Elements ---
    const horizontalArea = document.getElementById('horizontal-scroll-area');
    const horizontalTrack = document.getElementById('horizontal-track');

    function handleScrollAnimation() {
        // --- Animate Top Sequence ---
        const rect = sequenceContainer.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= 0) {
             const scrollableHeight = sequenceContainer.scrollHeight - window.innerHeight;
             const progress = -rect.top / scrollableHeight;
        
            // Animate Hero Section (Fades out)
            const heroOpacity = Math.max(0, 1 - progress * 5);
            const heroTranslateY = -progress * 200;
            heroSection.style.opacity = heroOpacity;
            heroSection.style.transform = `translate(-50%, -50%) translateY(${heroTranslateY}px)`;
        
            // FIXED: Animate Video Gallery (Scales up and moves up) - NO DELAY
            // Remove the galleryStartProgress delay to make scaling start immediately
            const scale = 1 + progress * 0.5; // Scale starts immediately
            const translateY = 65 - (progress * 15); // Position starts moving immediately
            videoGallery.style.transform = `scale(${scale})`;
            videoGallery.style.top = `${translateY}%`;

            // FIXED: Control horizontal scroll of top gallery with vertical scroll - IMPROVED
            const topScrollerInner = videoGallery.querySelector('.scroller__inner');
            if (topScrollerInner) {
                // The total distance we can scroll is half the width (the original content)
                const scrollDistance = topScrollerInner.scrollWidth / 2;
                // Map the vertical scroll progress to a horizontal translation
                const translateX = -progress * (scrollDistance * 0.4); // Multiplier adjusts scroll speed
                topScrollerInner.style.transform = `translateX(${translateX}px)`;
            }

            // Animate Text Overlays - Timings adjusted for longer scroll
            overlay1.style.opacity = (progress > 0.30 && progress < 0.45) ? 1 : 0;
            overlay2.style.opacity = (progress > 0.50 && progress < 0.65) ? 1 : 0;
            overlay3.style.opacity = (progress > 0.70 && progress < 0.85) ? 1 : 0;
        }

        // --- NEW: Animate Horizontal Track ---
        const horizontalRect = horizontalArea.getBoundingClientRect();
         if (horizontalRect.top <= 0 && horizontalRect.bottom >= 0) {
            const horizontalScrollableHeight = horizontalArea.scrollHeight - window.innerHeight;
            const horizontalProgress = -horizontalRect.top / horizontalScrollableHeight;

            // The track width is 200vw, we want to move it by 100vw to show the second section.
            // It should move 50% of its own width.
            const translateX = -horizontalProgress * (horizontalTrack.scrollWidth / 2);

            horizontalTrack.style.transform = `translateX(${translateX}px)`;

            // NEW: 3D Effect Logic
            const cards = horizontalTrack.querySelectorAll('.content-card');
            const midpoint = window.innerWidth / 2;
            cards.forEach(card => {
                const cardRect = card.getBoundingClientRect();
                const cardCenter = cardRect.left + cardRect.width / 2;
                if(cardCenter > 0 && cardCenter < window.innerWidth) {
                    card.classList.add('is-in-view');
                    card.classList.remove('is-not-in-view-left', 'is-not-in-view-right');
                } else if (cardCenter <= 0) {
                     card.classList.remove('is-in-view');
                     card.classList.add('is-not-in-view-left');
                } else {
                    card.classList.remove('is-in-view');
                    card.classList.add('is-not-in-view-right');
                }
            });
        }
    }
    
    window.addEventListener('scroll', handleScrollAnimation);

    // --- 2. Scroll-triggered Reveal Animations (for sections below) ---
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    revealElements.forEach(el => observer.observe(el));

    // --- 3. Impact Number Counter Animation ---
    const impactNumberEl = document.getElementById('impact-number');
    const targetValue = parseFloat(impactNumberEl.getAttribute('data-target-value'));
    
    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(impactNumberEl, targetValue);
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, { threshold: 0.5 });
    
    counterObserver.observe(impactNumberEl);

    function animateCounter(element, target) {
        let start = 0;
        const duration = 2000; // 2 seconds
        const startTime = performance.now();

        function updateCounter(currentTime) {
            const elapsedTime = currentTime - startTime;
            if (elapsedTime >= duration) {
                element.textContent = `${target.toFixed(1)} Thousand`;
                return;
            }
            
            const progress = elapsedTime / duration;
            const currentValue = start + progress * (target - start);
            element.textContent = `${currentValue.toFixed(1)} Thousand`;

            requestAnimationFrame(updateCounter);
        }
        
        requestAnimationFrame(updateCounter);
    }
});