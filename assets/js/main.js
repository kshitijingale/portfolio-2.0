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
    navMenu.classList.remove('show');
}

// Add a click event listener to each nav item
const navItems = document.querySelectorAll('.nav__item');
navItems.forEach((item) => {
    item.addEventListener('click', closeMobileMenu);
});

// Contact form
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Display the modal on form submission
    openModal();

    // Clear the form fields
    clearForm();
});

function openModal() {
    document.getElementById('successModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('successModal').style.display = 'none';
}

function clearForm() {
    // Get the form element
    const form = document.getElementById('contactForm');

    // Loop through each form element and reset its value
    for (let i = 0; i < form.elements.length; i++) {
        if (form.elements[i].type !== 'submit') {
            form.elements[i].value = '';
        }
    }
}




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




