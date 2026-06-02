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

function validateEmail() {

  const email = document.getElementById("subscribeEmail").value.trim();

  const message = document.getElementById("emailMessage");

  const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {

    message.innerHTML = "Please enter your email address.";
    message.style.color = "red";

    return false;
  }

  if (!emailPattern.test(email)) {

    message.innerHTML = "Please enter a valid email address.";
    message.style.color = "red";

    return false;
  }
  window.location.href='404.html'
  message.innerHTML = "Subscribed successfully!";
  message.style.color = "lime";

  document.getElementById("subscribeEmail").value = "";

  return true;
}