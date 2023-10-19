function stickyHeader() {

    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    window.onscroll = () => {
        sections.forEach(section => {
            let top = window.scrollY;
            let offset = section.offsetTop - 100;
            let height = section.offsetHeight;
            let id = section.getAttribute('id');

            if (top >= offset && top < offset + height) {
                // active navbar links
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });

                // active sections for animation on scroll
                section.classList.add('show-animate');
            }
            else {
                section.classList.remove('show-animate');
            }
        });

        // Sticky Header
        let header = document.querySelector('header');

        header.classList.toggle('sticky', window.scrollY > 100);

        // remove toggle icon and navbar
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');

        // animation footer on scroll
        let footer = document.querySelector('footer');
 
        footer.classList.toggle('show-animate', window.scrollY >= document.scrollingElement.scrollHeight - document.scrollingElement.clientHeight);
        
    }

}

export default stickyHeader;