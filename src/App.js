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

//! Event Listeners
headerToggler.addEventListener("click", handleToggleClick);

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
