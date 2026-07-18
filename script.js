// --- Theme Toggle Logic ---
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme in localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.className = currentTheme;
    updateThemeIcon();
}

themeToggleBtn.addEventListener('click', () => {
    if (body.classList.contains('light-theme')) {
        body.classList.replace('light-theme', 'dark-theme');
        localStorage.setItem('theme', 'dark-theme');
    } else {
        body.classList.replace('dark-theme', 'light-theme');
        localStorage.setItem('theme', 'light-theme');
    }
    updateThemeIcon();
});

function updateThemeIcon() {

    const navbarLogo = document.getElementById("site-logo");
    const footerLogo = document.getElementById("footer-logo");

    if (body.classList.contains("dark-theme")) {

        themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

        navbarLogo.src = "images/light-logo.png";
        footerLogo.src = "images/light-logo.png";

    } else {

        themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';

        navbarLogo.src = "images/dark-logo.png";
        footerLogo.src = "images/dark-logo.png";
    }
}

// --- Enhanced Google Reviews Logic ---
const reviewsContainer = document.getElementById('reviews-container');

if (reviewsContainer) {
    // Replace with your actual Google Business Review link
    const googleReviewLink = "https://www.google.com/search?q=Merced+Detailing+Pros+Reviews";

    // All 22 Reviews
    const realReviews = [
        { name: "Aziz Niazzy", image: "images/reviews/aziz.png", text: "I would definitly recommend this detailing company and I am very happy with there cleaning. The're very professional and have really great cleaning skills. If I could, I would give them more then 5 stars." },
        { name: "Jackie Romos", image: "images/reviews/jackie.png", text: "I dealt with a lot of detailing people and they keep missing spots and this one is the best you can get he always on point and don’t leave anything behind he always leaves my car as of I bought it from the Dealer ship" },
        { name: "Jesus Castaneda", image: "images/reviews/j.png", text:""},
        { name: "Kristin McAfee", image: "images/reviews/km.png", text: "Jesus and his crew did an amazing job on my SUV. I had lots of wear and tear stains in the back from the kids and they were able to get them all out. They make it convenient by having a mobile service and coming out to you for those busy moms! Definitely recommend this business!" },
        { name: "Michelle Salazar", image: "images/reviews/ms.png", text: "Merced Detailing Pros did an amazing job on my vehicle! From start to finish, they were professional, courteous, and very thorough. They paid attention to every little detail, and my car looked absolutely incredible when they were finished. The interior was spotless, the exterior had a beautiful shine, and it honestly felt like driving a brand-new car again. Their prices were reasonable, and the quality of work exceeded my expectations. I highly recommend Merced Detailing Pros to anyone looking for reliable, high-quality detailing services. I'll definitely be coming back for future details!" },
        { name: "Teresa Escoto", image: "images/reviews/te.png", text: "Excellent service. Car looks fantastic!" },
        { name: "Leopoldo Vazquez", image: "images/reviews/lv.png", text: "Excellent service. <br> Amazing service." },
        { name: "Janet Duarte", image: "images/reviews/jd.png", text: "Best car detailing I’ve ever had. Cool dude B)" },
        { name: "Aubriana Barajas", image: "images/reviews/ab.png", text: "Jesus was amazing to work with! I had been on the search for a detailer so I could gift my fiancé a cleaned up truck for Valentine’s Day but my search was turning up empty handed. I didn’t feel confident in those I had connected with prior or was unclear at what I’d be getting out of their services. <br> However, when connecting with Jesus, he was quick to answer any questions I had and met them with knowledge, clarity, reassurance, enthusiasm and overall great customer service. He had great pricing AND as mentioned prior, he fit me in on the Valentine’s Day holiday weekend, just a few days out! <br> He did a fantastic job, was super thorough, the truck looks and feels unimaginably new, and safe to say my fiance was extremely happy with it. We look forward to the next time + telling everyone about Merced Detailing Pros!" },
        { name: "Viviana Vazquez", image: "images/reviews/vv.png", text: "They did a very good job with detailing my car they left it exactly how I wanted and I have nothing bad to say about their service." },
        { name: "Sergio Castaneda", image: "images/reviews/sc.png", text: "Great experience with Merced Detailing Pros. My vehicles were a mess from the inside and out. Lot of trash and crazy stains from the inside never thought they would be removed but they were able to remove them. They left my cars shining and brand new. Their service is great and they know what they’re doing I would highly recommend them for your next detail." },
        { name: "Ismael Figueroa", image: "images/reviews/if.png", text: "Jesus from Merced Detailing Pros was very professional and helped me out immensely when he picked my request up on a holiday weekend. He scheduled me on the nearest availability and drove out to me early. I had gotten my car muddied up by a big outing with some dogs. <br> He showed up on time, completed on time and was very communicative throughout. He did a fantastic job! I’m happy with the work and would highly recommend." },
        { name: "Oswaldo Hernandez",image: "images/reviews/oh.png", text: "Amazing service definitely recommend" },
        { name: "Jr Galindo",image: "images/reviews/jg.png", text: "Best detailing in the area !!" },
        { name: "jasmine maravilla", image: "images/reviews/jm.png", text: "" },
        { name: "Luis Ponce", image: "images/reviews/lp.png", text: "" },
        { name: "Juan Franco", image: "images/reviews/jf.png", text: "They cooked with the detail. 🙌🔥" },
        { name: "Rocio Montanez", image: "images/reviews/rm.png", text: "I had an amazing experience with Merced detailing pros! My car had some serious stains I’ve been trying to get rid of for years. I booked with detailing pros thinking the different might now be noticeable. I was amazed to see all stains completely removed. My car looks brand new!!! Definitely worth the money!" },
        { name: "Rigo", image: "images/reviews/rigo.png", text: "Did really good work" },
        { name: "Isabel Torres",image: "images/reviews/it.png", text: "Did an amazing job !" },
        { name: "Maximus Garibay", image: "images/reviews/mg.png", text: "" },
        { name: "Lorena Castaneda", image: "images/reviews/lc.png", text: "" }
    ];

    realReviews.forEach((rev) => {
        const card = document.createElement('a');
        card.href = googleReviewLink;
        card.target = "_blank";
        card.className = 'review-card';
        

        card.innerHTML = `
    <div class="review-header">
        <div class="reviewer-profile">
            <img src="${rev.image}" alt="${rev.name}" class="avatar-img">
            <div class="reviewer-meta">
                <strong>${rev.name}</strong>
                <span class="review-date">Recent</span>
            </div>
        </div>
        <img src="images/google-logo.png" alt="Google Review" class="google-logo-img">
    </div>
            
            <div class="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>
            
            <p class="review-text"><em>"${rev.text}"</em></p>
            <a href="#" class="review-toggle">More</a>
        `;
        reviewsContainer.appendChild(card);
    });

    document.querySelectorAll(".review-card").forEach(card => {

    const text = card.querySelector(".review-text");
    const button = card.querySelector(".review-toggle");

    // Hide "More" if the review isn't long enough
    if (text.scrollHeight <= text.clientHeight + 5) {
        button.style.display = "none";
        return;
    }

    button.addEventListener("click", function(e){

        e.preventDefault();

        text.classList.toggle("expanded");

        this.textContent = text.classList.contains("expanded")
            ? "Less"
            : "More";

    });

});
}

// --- Slider Arrow Logic ---
function setupSlider(containerId, leftBtnId, rightBtnId) {
    const container = document.getElementById(containerId);
    const leftBtn = document.getElementById(leftBtnId);
    const rightBtn = document.getElementById(rightBtnId);

    if (!container || !leftBtn || !rightBtn) return;

    // Set scroll amount roughly equal to one card width + gap
    const firstCard = container.querySelector(".gallery-item, .review-card");

const scrollAmount =
    firstCard ?
    firstCard.offsetWidth + 20 :
    370;
    // Function to calculate scroll position and hide/show arrows
    function updateArrowVisibility() {
        // If scrolled all the way to the left (0), hide left arrow
        if (container.scrollLeft <= 0) {
            leftBtn.classList.add('hidden-arrow');
        } else {
            leftBtn.classList.remove('hidden-arrow');
        }

        // If scrolled all the way to the right, hide right arrow
        // We use Math.ceil to prevent fractional pixel rounding bugs on some screens
        if (Math.ceil(container.scrollLeft + container.clientWidth) >= container.scrollWidth) {
            rightBtn.classList.add('hidden-arrow');
        } else {
            rightBtn.classList.remove('hidden-arrow');
        }
    }

    // Move Left
    leftBtn.addEventListener('click', () => {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    // Move Right
    rightBtn.addEventListener('click', () => {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    // Listen to whenever the user scrolls or clicks the arrows
    container.addEventListener('scroll', updateArrowVisibility);

    // Run once immediately on page load to hide the left arrow at the start
    // A small timeout ensures all images/cards are loaded before doing the math
    setTimeout(updateArrowVisibility, 100);
}

// Initialize sliders
setupSlider('reviews-container', 'review-left', 'review-right');
setupSlider('ext-container', 'ext-left', 'ext-right');
setupSlider('int-container', 'int-left', 'int-right');

// --- Lightbox Logic ---
const lightbox = document.getElementById("lightbox");
const lightboxContent = document.querySelector(".lightbox-content-wrapper");
const closeBtn = document.getElementById("lightbox-close");
const prevBtn = document.getElementById("lb-prev");
const nextBtn = document.getElementById("lb-next");

let currentGallery = [];
let currentIndex = 0;

// Attach click event to every gallery item
document.querySelectorAll(".gallery-item").forEach(item => {
    item.addEventListener("click", () => {
        openLightbox(item);
    });
});

function openLightbox(clickedItem) {

    const slider = clickedItem.closest(".slider-container");
    const items = [...slider.querySelectorAll(".gallery-item")];

    currentGallery = items.map(item => {
        const img = item.querySelector("img");
        const video = item.querySelector("video");

        if (video) {
            return {
                type: "video",
                src: video.currentSrc || video.src
            };
        }

        return {
            type: "image",
            src: img.src
        };
    });

    currentIndex = items.indexOf(clickedItem);

    updateLightbox();

    lightbox.classList.add("show");
}

function updateLightbox() {

    const item = currentGallery[currentIndex];

    if (item.type === "video") {

        lightboxContent.innerHTML = `
            <video controls autoplay playsinline>
                <source src="${item.src}">
            </video>
        `;

    } else {

        lightboxContent.innerHTML = `
            <img src="${item.src}" alt="">
        `;
    }

    // Hide arrows if only one image
    const showArrows = currentGallery.length > 1;

    prevBtn.style.display = showArrows ? "flex" : "none";
    nextBtn.style.display = showArrows ? "flex" : "none";
}

// Previous
// Previous
if (prevBtn) {
    prevBtn.addEventListener("click", e => {
        e.stopPropagation();

        currentIndex--;

        if (currentIndex < 0)
            currentIndex = currentGallery.length - 1;

        updateLightbox();
    });
}

// Next
nextBtn.addEventListener("click", e => {
    e.stopPropagation();

    currentIndex++;

    if (currentIndex >= currentGallery.length)
        currentIndex = 0;

    updateLightbox();
});

// Keyboard support
document.addEventListener("keydown", e => {

    if (!lightbox.classList.contains("show"))
        return;

    if (e.key === "ArrowLeft")
        prevBtn.click();

    if (e.key === "ArrowRight")
        nextBtn.click();

    if (e.key === "Escape")
        closeBtn.click();
});

// Close
closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("show");
    lightboxContent.innerHTML = "";
});

// Click outside image closes
lightbox.addEventListener("click", e => {
    if (e.target === lightbox)
        closeBtn.click();
});

// Fade-up Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
});

document.querySelectorAll('.locations-container').forEach(section => {
    section.style.opacity = 0;
    section.style.transition = "opacity 1s ease-out, transform 1s ease-out";
    section.style.transform = "translateY(50px)";
    observer.observe(section);
});

// Define the class in your CSS
/* Add to style.css: */
/* .fade-in { opacity: 1 !important; transform: translateY(0) !important; } */

document.querySelectorAll(".review-card").forEach(card => {

    const text = card.querySelector(".review-text");
    const button = card.querySelector(".review-toggle");

    if(text.scrollHeight <= text.clientHeight){
        button.style.display = "none";
    }

});
// --- Mobile Menu Toggle ---
document.addEventListener('DOMContentLoaded', () => {
    // CHANGE 'hamburger' to whatever the ID is in your actual HTML
    const hamburger = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
});

