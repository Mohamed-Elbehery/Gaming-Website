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

// event listener
headerToggler.addEventListener('click', handleToggleClick);

// //! Handling the Contact Us Form
const query = {};
const gameName = document.querySelector('input[name="gameName"]');
const formSelect = document.querySelector('select[name="formSelect"]');
const formMessage = document.querySelector('textarea[name="formMessage"]');
const submit = document.querySelector('button.form-btn');

const handleSubmit = async (e) => {
  e.preventDefault();
  if(gameName.value && formSelect.value) {
    query[gameName.name] = gameName.value;
    query[formSelect.name] = formSelect.value;
    query[formMessage.name] = formMessage.value;
    gameName.value = formMessage.value = '';
    formSelect.value = 'Select Game Category';

    await fetch("http://localhost:3000/games", {
      method: "POST",
      body: JSON.stringify(query),
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      }
    });
  }
}

// event listener
submit.addEventListener('click', handleSubmit);

//! Fetching and displaying in the table
let tbody = document.querySelector('table tbody');
const games = [];

const fetchingGames = async () => { // Fetching all the games
  const res = await fetch("http://localhost:3000/games");
  const data = await res.json();
  games.push(...data);

  games.map((game) => {
    tbody.innerHTML += 
    `<tr>
      <td align="center">${game?.id}</td>
      <td align="left">${game?.gameName}</td>
      <td align="right">${game?.formSelect}</td>
    </tr>`
  })
  
}

fetchingGames();

console.log(games);