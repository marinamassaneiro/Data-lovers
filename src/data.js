export const ghibli = {printCatalogue, printModal, filterDuration, sortedFilms, countFilms, countPeopleModal, 
                        countLocations, countPeople, countVehicles, printCataloguePeople};

function printCatalogue(filmsList) {
  const arrayFilms = filmsList.map((film) => {
    const template = `
    <div class="card">
    <button class= "btn-modal" type="button"> 
    <img class="card-img" src="${film.poster}" alt="${film.title}" name="${film.title}" > </button>
      <br><h7>${film.title}</h7><br>
      <h7>${film.release_date}</h7>
    </div>
    `;
    return template; 
  }); 
  return arrayFilms.join('');
}

function printModal (film) {
  return `
  <div class="modal-content">
    <h1>${film.title}</h1>
    <p class="modal-director">Dirigido por ${film.director}</p>
    <div class="modal-score-duration">
      <p>${film.duration}min</p>
      <p>Score: ${film.rt_score}</p> 
    </div>
    <div class="modal-description">
      <p>${film.description}</p>
      <p><strong>${(film.people).length} personagens ajudam a contar essa história!</strong></p>
    </div>
    <button class="close">Sair</button>
  </div> 
  `
}

function filterDuration (films, selection) {
  const filmsDuration = films.filter((film) => {
    if (selection === '90min') {
      return film.duration <= 90;
    } else if (selection === '120min'){
      return film.duration > 90 && film.duration <= 120;
    } else if (selection === '150min'){
      return film.duration > 120;
    }
    return film;
  })
  return filmsDuration;
}

function sortedFilms(films, selection) { 
  const sorted = films.sort((a,b) => {
    if (selection === 'rt_score') {
      return b.rt_score - a.rt_score;
    } else if (selection === 'release_date') {
      return b.release_date - a.release_date;
    } else if (selection === 'order') {
      return a.release_date - b.release_date
    }
  });
  return sorted;
}

function countFilms (films) {
  return Object.keys(films).length;
}

function countPeopleModal (films) {
  const count = films.map((film) => {
    return (film.people).length;
});
}

function countPeople (films) {
  const count = films.map((film) => {
    return Object.keys(film.people).length;
});
  count.join('')
    const sum = count.reduce((a,b) => a + b, 0);
    return sum;
}

function countLocations (films) {
  const count = films.map((film) => {
    return Object.keys(film.locations).length;
});
  count.join('')
    const sum = count.reduce((a,b) => a + b, 0);
    return sum;
}

function countVehicles (films) {
  const count = films.map((film) => {
    return Object.keys(film.vehicles).length;
});
  count.join('')
    const sum = count.reduce((a,b) => a + b, 0);
    return sum;
}

function printCataloguePeople(films) {
  const arrayPeople = films.map((film) => {
    const people = film.people.map((person) => {
      const templatePerson = `
      <div class="card-people">
        <img class="card-people-img" src="${person.img}" alt="${person.name}" name="${person.name}">
        <nav class="person-details">
          <h7>${person.name}</h7><br>
          <ul>
            <li>Gênero: ${person.gender}</li>
            <li>Idade: ${person.age}</li>
            <li>Espécie: ${person.specie}</li>
          </ul>
        </nav> 
      </div>
      `;
      return templatePerson;
    }); 
    return people.join('');
  })
  return arrayPeople.join('');
}

function printCatalogueLoc(films) {
  const arrayLoc = films.map((film) => {
    const locations = film.locations.map((loc) => {
      const templateLoc = `
      <div class="card-Loc">
      <button class= "btn-modal-loc" type="button"> 
      <img class="img-loc" src="${loc.img}" alt="${loc.name}" name="${loc.name}"></button>
        <br><h7>${loc.name}</h7><br>
      </div>
      `;
      return templateLoc ;
    });
    return locations.join('');
  })
  return arrayLoc.join('');
}

function printCatalogueVeh(films) {
  const arrayVeh = films.map((film) => {
    const vehicles = film.vehicles.map((veh) => {
      const templateVeh = `
      <div class="card-Loc">
      <button class= "btn-modal-loc" type="button"> 
      <img class="img-loc" src="${veh.img}" alt="${veh.name}" name="${veh.name}" > </button>
        <br><h7>${veh.name}</h7><br>
      </div>
      `;
      return templateVeh;
    });
    return vehicles.join('');
  })
  return arrayVeh.join('');
}

