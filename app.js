let testimonials = document.getElementsByClassName("testimonial");
let btnSuivant = document.getElementById("suivant");
let btnPrecedent = document.getElementById("precedent");

btnSuivant.addEventListener("click", function () {
    for (let i = 0; i < testimonials.length; i++) {
        if (testimonials[i].classList.contains("visible")) {
            testimonials[i].classList.toggle("visible");
            if (i < testimonials.length - 1) {
                i = i + 1;
            } else {
                i = 0;
            }
            testimonials[i].classList.toggle("visible");
        }
    }
});

btnPrecedent.addEventListener("click", function () {
    for (let i = 0; i < testimonials.length; i++) {
        if (testimonials[i].classList.contains("visible")) {
            testimonials[i].classList.toggle("visible");
            if (i > 0) {
                i = i - 1;
            } else {
                i = testimonials.length - 1;
            }
            testimonials[i].classList.toggle("visible");
        }
    }
});
