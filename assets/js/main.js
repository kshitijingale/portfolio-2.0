/* MENU SHOW */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')

const navMenu = document.getElementById('nav-menu');

function closeMobileMenu() {
    console.log("clicked");
    navMenu.classList.remove('show');
}

// Add a click event listener to each nav item
const navItems = document.querySelectorAll('.nav__item');
navItems.forEach((item) => {
    item.addEventListener('click', closeMobileMenu);
});

// Function to update the header shadow
function updateHeaderShadow() {
    const header = document.querySelector('.l-header');
    if (window.scrollY > 0) {
        header.style.boxShadow = '0px 5px 10px rgba(0, 0, 0, 0.2)';
    } else {
        header.style.boxShadow = '0px 0px 0px rgba(0, 0, 0, 0)';
    }
}

// Add an event listener to the window to detect scrolling
window.addEventListener('scroll', updateHeaderShadow);

// JavaScript to add the "animate" class when the "About" section is scrolled into view
const aboutSection = document.querySelector('.about');
const aboutOffset = aboutSection.offsetTop;
const windowHeight = window.innerHeight;

function addAnimationClass() {
    const scrollPosition = window.scrollY;
    if (scrollPosition > aboutOffset - windowHeight) {
        aboutSection.classList.add('animate');
        window.removeEventListener('scroll', addAnimationClass); // Remove the scroll event listener once animation is applied
    }
}

window.addEventListener('scroll', addAnimationClass);


/*----- ANIMATE -----*/
// OVERLAY
gsap.to(".first", 1.5, { delay: .5, top: "-100%", ease: Expo.easeInOut });
gsap.to(".second", 1.5, { delay: .7, top: "-100%", ease: Expo.easeInOut });
gsap.to(".third", 1.5, { delay: .9, top: "-100%", ease: Expo.easeInOut });

// IMG
gsap.from('.home__img', { opacity: 0, duration: 2, delay: 2, x: 60 })

// INFORMATION
gsap.from('.home__information', { opacity: 0, duration: 3, delay: 2.3, y: 25 })
gsap.from('.anime-text', { opacity: 0, duration: 3, delay: 2.3, y: 25, ease: 'expo.out', stagger: .3 })

// NAV ITEM
gsap.from('.nav__logo', { opacity: 0, duration: 3, delay: 3.2, y: 25, ease: 'expo.out' });
gsap.from('.nav__item', { opacity: 0, duration: 3, delay: 3.2, y: 25, ease: 'expo.out', stagger: .2 })

// SOCIAL
gsap.from('.home__social-icon', { opacity: 0, duration: 3, delay: 4, y: 25, ease: 'expo.out', stagger: .2 })
