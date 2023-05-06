//! Regex Variables
const nameReg = /\w+/;
const messageReg = /\w+/;
const emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]+$/;

//! Variables
const contactForm = document.querySelector(".contact-us form");
const formName = document.querySelector("input[name='gameName']");
const formEmail = document.querySelector("input[name='userEmail']");
const formSelect = document.querySelector("select[name='formSelect']");
const selectDefaultValue = formSelect.value;
const formMessage = document.querySelector("textarea[name='formMessage']");

//! Header Toggler for Small Screens
const header = document.querySelector("nav");
const icon = document.querySelector("#header-toggler .fa-solid");
const headerToggler = document.querySelector("#header-toggler");

const handleToggleClick = () => {
  if (icon.classList.contains("fa-caret-left")) {
    header.style.transform = "translateX(0)";
    icon.classList.remove("fa-caret-left");
    icon.classList.add("fa-caret-right");
  } else {
    header.style.transform = "translateX(100%)";
    icon.classList.remove("fa-caret-right");
    icon.classList.add("fa-caret-left");
  }
};

const sendQuery = (query) => {
  emailjs
    .send("service_mgmott9", "template_3eqkyzr", query)
    .then(() => console.log("Email was sent Successfully"));
};

const handleSubmit = (e) => {
  e.preventDefault();
  const query = {
    from_name: formName.value,
    email_id: formEmail.value,
    game_category: formSelect.value,
    message: formMessage.value,
  };

  if (!nameReg.test(formName.value)) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Please Enter Your Name",
    });
  } else if (!emailReg.test(formEmail.value)) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Please Enter Your Email",
    });
  } else if (formSelect.value === selectDefaultValue) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Please Select Your Option",
    });
  } else if (!messageReg.test(formMessage.value)) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Please Enter Your Message",
    });
  } else {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your Request has been sent successfully.",
    });
    sendQuery(query);
  }
};

//! Event Listeners
headerToggler.addEventListener("click", handleToggleClick);
contactForm.addEventListener("submit", handleSubmit);
window.addEventListener("load", () => this.scrollTo(0, 0));

//! Particles Plugin
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load("particles-js", "particles.json", function () {
  console.log("callback - particles.js config loaded");
});

//! JQuery
$("document").ready(() => {
  $(".lds-ripple").fadeOut(1500, () => {
    $(".loading").slideUp(1000, () => {
      $("body").css("overflow", "visible");
    });
  });

  try {
    $("li").click((e) => {
      $("ul").find(e.target).find("a")[0].click();
    });
  } catch (err) {
    console.error(
      "Err : because the click event in js is also a function in JQuery" + err
    );
  }
});
