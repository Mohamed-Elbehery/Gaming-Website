//! Header Toggler for Small Screens
const header = document.querySelector('header');
const icon = document.querySelector('#header-toggler .fa-solid');
const headerToggler = document.querySelector('#header-toggler');

const handleToggleClick = () => {
  if(icon.classList.contains('fa-caret-left')) {
    header.style.transform = 'translateX(0)';
    icon.classList.remove('fa-caret-left');
    icon.classList.add('fa-caret-right');
  } else {
    header.style.transform = 'translateX(100%)';
    icon.classList.remove('fa-caret-right');
    icon.classList.add('fa-caret-left');
  }
}

headerToggler.addEventListener('click', handleToggleClick);

// //! Handling the Contact Us Form
const gameName = document.querySelector('input[name="game-name"]');
const formSelect = document.querySelector('#contact-us form select');
const submit = document.querySelector('button.form-btn');

submit.addEventListener('click', (e) => {
  e.preventDefault();
});