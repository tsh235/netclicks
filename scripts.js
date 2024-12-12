const cardsList = document.querySelector('.cards');
const searchInput = document.querySelector('.search__input');
const searchBtn = document.querySelector('.search__btn');

const films = [
  {
    id: 1,
    title: 'Марсианин 1',
    titleEng: 'The Martian 2015',
    rating: 7.8,
    categoty: 'Фантастика, приключения',
    image: './img/poster.jpeg',
    link: './film.html',
  },
  {
    id: 2,
    title: 'Марсианин 2',
    titleEng: 'The Martian 2015',
    rating: 7.8,
    categoty: 'Фантастика, приключения',
    image: './img/poster.jpeg',
    link: './film.html',
  },
  {
    id: 3,
    title: 'Марсианин 3',
    titleEng: 'The Martian 2015',
    rating: 7.8,
    categoty: 'Фантастика, приключения',
    image: './img/poster.jpeg',
    link: './film.html',
  },
  {
    id: 4,
    title: 'Марсианин 4',
    titleEng: 'The Martian 2015',
    rating: 7.8,
    categoty: 'Фантастика, приключения',
    image: './img/poster.jpeg',
    link: './film.html',
  },
  {
    id: 5,
    title: 'Марсианин 5',
    titleEng: 'The Martian 2015',
    rating: 7.8,
    categoty: 'Фантастика, приключения',
    image: './img/poster.jpeg',
    link: './film.html',
  },
  {
    id: 6,
    title: 'Марсианин 6',
    titleEng: 'The Martian 2015',
    rating: 7.8,
    categoty: 'Фантастика, приключения',
    image: './img/poster.jpeg',
    link: './film.html',
  },
];

const renderCards = (arr) => {
  cardsList.innerHTML = '';
  arr.forEach(item => {
    cardsList.insertAdjacentHTML('beforeend', `
      <li class="card">
        <a class="card__link" href="${item.link}">
          <img class="card__poster" src="${item.image}" alt="Film poster" width="264" height="376">
          <div class="card__content">
            <h3 class="card__title"><span>${item.title}</span>, ${item.titleEng}</h3>
            <p class="card__style">${item.categoty}</p>
          </div>
          <p class="card__rating">${item.rating}</p>
        </a>
      </li>
    `)
  });
};

searchBtn.addEventListener('click', () => {
  if (!searchInput.value) return;
  renderCards(films.filter(item => item.title.includes(searchInput.value)));
});

renderCards(films);