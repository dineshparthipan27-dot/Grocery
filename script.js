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

function validateForm() {

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let subject = document.getElementById("subject").value.trim();
  let message = document.getElementById("message").value.trim();

  let formMessage = document.getElementById("formMessage");

  let emailPattern =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(name === ""){

    formMessage.innerHTML =
    "Please enter your name";

    formMessage.style.color = "red";

    return false;
  }

  if(!emailPattern.test(email)){

    formMessage.innerHTML =
    "Please enter a valid email address";

    formMessage.style.color = "red";

    return false;
  }

  if(subject === ""){

    formMessage.innerHTML =
    "Please enter a subject";

    formMessage.style.color = "red";

    return false;
  }

  if(message.length < 10){

    formMessage.innerHTML =
    "Message must contain at least 10 characters";

    formMessage.style.color = "red";

    return false;
  }
  window.location.href='404.html'
  formMessage.innerHTML =
  "Message sent successfully!";

  formMessage.style.color = "green";

  return false; /* remove this if connected to backend */
}