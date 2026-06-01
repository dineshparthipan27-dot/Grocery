const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.onclick = () => {

  navbar.classList.toggle("active");

  document.body.classList.toggle("no-scroll");

};


AOS.init();


const productSlider =
document.getElementById("productSlider");

const nextBtn =
document.getElementById("nextBtn");

const prevBtn =
document.getElementById("prevBtn");

/* Next Button */

nextBtn.onclick = () => {

  productSlider.scrollBy({

    left: 350,

    behavior: "smooth"

  });

};


prevBtn.onclick = () => {

  productSlider.scrollBy({

    left: -350,

    behavior: "smooth"

  });

};