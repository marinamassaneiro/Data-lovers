import {addTela, selectedDuration} from './data.js';
import data from './data/ghibli/ghibli.js';

const films = data.films;
const catalogue = document.querySelector('.catalogue');
catalogue.innerHTML = addTela(films);

const filterDuration = document.querySelector('#filter-duration');
filterDuration.addEventListener ('change', filterSelected);

function filterSelected () {
  const selected = (filterDuration).value;
  catalogue.innerHTML = selectedDuration(films, selected);
}


// ======== FILTRO DE GENERO PARA USAR NOS PERSONAGENS =========
// let selectedGender = document.getElementById('filter-gender');
// selectedGender.addEventListener('change', genderFilter);

// function genderFilter(evento) { 
//   // console.log (evento.target.value);

//   const filmesfiltrados = films.filter(function (film){
//     const personAndGender = film.people.filter (function (person){
//       return person.gender === evento.target.value;
//     }) 
//     if (event.target.value === 'Gender'){
//       return film;
//     }
//     // console.log (personAndGender.length, film.people);
//     return personAndGender.length >= (film.people.length/2);
//   })
//   // console.log (filmesfiltrados);
//   addTela (filmesfiltrados);
// }