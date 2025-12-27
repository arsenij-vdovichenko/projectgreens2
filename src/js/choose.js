
const scientists = [
  {
    name: 'Albert',
    surname: 'Einstein',
    born: 1879,
    dead: 1955,
    id: 1,
  },
  {
    name: 'Isaac',
    surname: 'Newton',
    born: 1643,
    dead: 1727,
    id: 2,
  },
  {
    name: 'Galileo',
    surname: 'Galilei',
    born: 1564,
    dead: 1642,
    id: 3,
  },
  {
    name: 'Marie',
    surname: 'Curie',
    born: 1867,
    dead: 1934,
    id: 4,
  },
  {
    name: 'Johannes',
    surname: 'Kepler',
    born: 1571,
    dead: 1630,
    id: 5,
  },
  {
    name: 'Nicolaus',
    surname: 'Copernicus',
    born: 1473,
    dead: 1543,
    id: 6,
  },
  {
    name: 'Max',
    surname: 'Planck',
    born: 1858,
    dead: 1947,
    id: 7,
  },
  {
    name: 'Katherine',
    surname: 'Blodgett',
    born: 1898,
    dead: 1979,
    id: 8,
  },
  {
    name: 'Ada',
    surname: 'Lovelace',
    born: 1815,
    dead: 1852,
    id: 9,
  },
  {
    name: 'Sarah E.',
    surname: 'Goode',
    born: 1855,
    dead: 1905,
    id: 10,
  },
  {
    name: 'Lise',
    surname: 'Meitner',
    born: 1878,
    dead: 1968,
    id: 11,
  },
  {
    name: 'Hanna',
    surname: 'Hammarström',
    born: 1829,
    dead: 1909,
    id: 12,
  },
];
const listRef = document.querySelector('.choose__list');

const buttonsRef = document.querySelectorAll('.choose__btn');

buttonsRef.forEach(btn => {
  btn.addEventListener('click', event => {
    const action = event.target.dataset.action;
    switch (action) {
      case '19st':
        const getArray = scientists.filter(
          item => item.born > 1800 && item.born < 1901
        );
        createItemsWorkUp(getArray);
        break;

      case 'someYears':
         const totalYears = scientists
            .map(item => item.dead - item.born)
            .reduce((a, b) => a + b, 0);

        listRef.innerHTML = `
            <li class="choose__item">
                <h2 class="choose__name">Сума прожитих років:</h2>
                <p class="choose__born">${totalYears} років</p>
            </li>`;
        break;

      case 'alphabet':
        const alphabetSort = [...scientists].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        createItemsWorkUp(alphabetSort);
        break;

      case 'agePast':
        const ageSort = [...scientists].sort(
          (a, b) => b.dead - b.born - (a.dead - a.born)
        );
        createItemsWorkUp(ageSort);
        break;

      case 'youngest':
        const mostYoung = scientists.reduce((a, b) =>
          a.born > b.born ? a : b
        );
        createItemsWorkUp([mostYoung]);
        break;

      case 'albert':
        const einstein = scientists.find(
          item => item.name === 'Albert' && item.surname === 'Einstein'
        );
        listRef.innerHTML = `
            <li class="choose__item">
                <h2 class="choose__name">Albert Einstein</h2>
                <p class="choose__born">Народився: ${einstein.born}</p>
            </li>
        `;
        break;
      case 'letterC':
        const cName = scientists.filter(item => item.surname.startsWith("C"));
        createItemsWorkUp(cName);
        break;

      case 'findOLd':
        
          const oldest = scientists.reduce((a, b) =>
            (a.dead - a.born) > (b.dead - b.born) ? a : b
        );
        const youngest = scientists.reduce((a, b) =>
            (a.dead - a.born) < (b.dead - b.born) ? a : b
        );
        createItemsWorkUp([oldest, youngest]);;
        break;

      case 'sameName':
        const sameLetters = scientists.filter(item =>
            item.name[0] === item.surname[0]
        );
        createItemsWorkUp(sameLetters);
        break;

      case 'work19st':
        const worked19 = scientists.every(item => item.born <= 1900 && item.dead >= 1801);
        listRef.innerHTML = `
            <li class="choose__item">
                <h2 class="choose__name">Працювали всі у 19 ст.?</h2>
                <p class="choose__born">${worked19 ? "Так" : "Ні"}</p>
            </li>
        `;
        break;
    }
  });
});

function createItemsWorkUp(scientists) {
  listRef.innerHTML = scientists
    .map(({ name, surname, born, dead }) => {
      return `<li class="choose__item">
    <h2 class="choose__name">${name}</h2>
    <h3 class="choose__subname">${surname}</h3>
    <p class="choose__born">born:${born}</p>
    <p class="choose__dead">dead:${dead}</p>
</li>`;
    })
    .join('');
}
createItemsWorkUp(scientists);
