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
        entry.target.style.animation = 'slideUp 1s ease-in';
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
        entry.target.style.animation = 'fadeIn 1s ease-in';
        entry.target.style.opacity = '1';
        observer.unobserve(entry.target);
    })
}, {threshold: 0.4})

animatedTexts.forEach(text => {
    observer3.observe(text);
})
