/*===============tooogle icon navbar=============*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
/*===============scroll section active link=============*/
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll= () => {
    sections.forEach( sec => {
        let top= window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            })

        };
    })
    /*===============sticky navbar===============*/
    let header = document.querySelector ('header');

    header.classList.toggle('sticky',window.scrollY > 100);

    /*==============remove toogle icon and navbar when click navbar link (scroll)================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};


  /*===============scroll reveal===============*/
  scrollReveal ({ 
    //reset:true,
    distance:'80px',
    duration:2000,
    delay:200,
});
scrollreveal().reveal('.home-content, .heading', {origin:'top'}); 
scrollreveal().reveal('.home-img, .services-container, .portfolio-box, .contact form' ,{origin:'bottom'});
scrollreveal().reveal('.home-content h1, .about-img' ,{origin:'left'});  
scrollreveal().reveal('.home-content p, .about-content' ,{origin:'right'});  

  /*=============== type js===============*/
  const type= new Typed ('.multiple-text', {
    Strings: ['Frontend Developer','Cyber Security Analyst', 'Software Engineer'],
    typeSpeed:100,
    backSpeed:100,
    backdelay:1000,
    loop: True
  });
