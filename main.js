const pets = [
{
  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Odd-eyed_Turkish_Angora_cat_-_20080830.jpg/200px-Odd-eyed_Turkish_Angora_cat_-_20080830.jpg',
  name: 'Zara',
  color: 'White',
  specialSkill: 'Being a Sassafras',
  typeOfPet: 'Cat',
  },

  {
  imageUrl: 'https://awscape.org.za/wp-content/uploads/2018/05/dog-200x200.jpg',
  name: 'Duke',
  color: 'Yellow',
  specialSkill: 'Supervising Construction',
  typeOfPet: 'Dog',
  },

  {
  imageUrl: 'https://shodor.org/~lukaaj/imgresize/cat-Square-200.jpg',
  name: 'Sammy',
  color: 'Ginger',
  specialSkill: 'Loyalty to Owner',
  typeOfPet: 'Cat'
  },

  {
  imageUrl: 'https://walkandwagchapelhill.com/wp-content/uploads/2017/03/justin-veenema-147056-200x200.jpg',
  name: 'Reba',
  color: 'Brown & White',
  specialSkill: 'Excellent Co-worker',
  typeOfPet: 'Dog'
  },

  {
  imageUrl: 'https://www.ycspca.org/wp-content/uploads/Cool-Cat2-200x200.png', 
  name: 'Kyra',
  color: 'Brown',
  specialSkill: 'Snuggles',
  typeOfPet: 'Cat',
  },

  {
  imageUrl: 'https://i.pinimg.com/originals/71/d0/11/71d0116ba6717259cd05b5bd9e02e600.jpg',
  name: 'Carlos',
  color: 'White',
  specialSkill: 'Getting you an A+',
  typeOfPet: 'Rat',
  },
];

const printToDom = (selector, textToPrint) => {
  const selectedDiv = document.getElementById(selector);
  selectedDiv.innerHTML = textToPrint;
}

const petCards = () => {
  let domString = '';

  for (let i = 0; i < pets.length; i++) {
    domString += '<div class = "animals-card">';
    domString += `<h2 class="animals-card-h2 ${pets[i].typeOfPet}">${pets[i].name}</h2>`;
    domString += `<img src = ${pets[i].imageUrl}>`;
    domString += `<h4>${pets[i].color}</h4>`;
    domString += `<p>${pets[i].specialSkill}</p>`;
    domString += `<div class="animals-card-footer ${pets[i].typeOfPet}"> ${pets[i].typeOfPet}</div>`;
    domString += '</div>';
  }
  console.log(domString)
  printToDom('animals', domString)
}

const init = () => {
  petCards();
}

init();
