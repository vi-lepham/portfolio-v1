// Landing page animation

TweenMax.to(".bg", 2, {
    width: "100%",
    ease: Expo.easeInOut
});

TweenMax.from(".nav-left", 1.5, {
    delay: 1,
    opacity: 0,
    y: -20,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom(".nav-right li", 1.5, {
    delay: 1.2,
    opacity: 0,
    y: -20,
    ease: Expo.easeInOut
}, 0.08)

TweenMax.staggerFrom(".hero-title li", 1.5, {
    delay: 1.5,
    opacity: 0,
    y: -30,
    ease: Expo.easeInOut
}, 0.08)

TweenMax.from(".hero-cta", 1.5, {
    delay: 2,
    opacity: 0,
    x: "-10%",
    ease: Expo.easeInOut
})

TweenMax.staggerFrom(".fixed-contact-bar ul li", 1.5, {
    delay: 2.5,
    opacity: 0,
    y: 30,
    ease: Expo.easeInOut
}, 0.08)

TweenMax.from(".language", 1.5, {
    delay: 2.5,
    opacity: 0,
    x: "-10%",
    ease: Expo.easeInOut
})

// Intersection Observer 
const animatedBorder = document.querySelectorAll('.border-top');

const observer1 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return
        } 
        entry.target.style.transform = 'scale(1)';
        observer.unobserve(entry.target);
    })
}, {rootMargin: "0px 0px -50px 0px", threshold: 1})
animatedBorder.forEach(border => {
    observer1.observe(border);
})

// IO for s-title
const animatedTitles = document.querySelectorAll('.s-title-text h4');

const observer2 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return
        } 
        entry.target.style.animation = 'slideUp 0.8s ease-in';
        entry.target.style.opacity = '1';
        observer.unobserve(entry.target);
    })
}, {rootMargin: "0px 0px -50px 0px", threshold: 1})

animatedTitles.forEach(title => {
    observer2.observe(title);
})

// IO for s-text 
const animatedTexts = document.querySelectorAll('.s-text')

const observer3 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return
        } 
        entry.target.style.animation = 'fadeIn 0.8s ease-in';
        entry.target.style.opacity = '1';
        observer.unobserve(entry.target);
    })
}, {threshold: 0.2})

animatedTexts.forEach(text => {
    observer3.observe(text);
})

