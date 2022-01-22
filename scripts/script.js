//глобальные постоянные
const closeProfilePopupButton = document.querySelector('.popup__profile-close-button');
const closePlacePopupButton = document.querySelector('.popup__place-close-button');
const openProfilePopupButton = document.querySelector('.profile__edit-button');
const openAddPicPopupButton = document.querySelector('.profile__add-button')
const overlayProfile = document.querySelector('.popup__profile');
const overlayAddPic = document.querySelector('.popup__place');
const popupOpened = 'popup_opened';
//переменные для разметки профиля и карточек
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
let place = document.querySelector('.element__image-title');
let link = document.querySelector('.element__image');
//постоянная для форм
const form = document.querySelector('.popup__input-fields');
// инпуты для профиля
let inputName = form.elements['name'];
let inputAbout = form.elements['about'];
// инпуты для карточек с картинками
let inputPlace = form.elements['place'];
let inputLink = form.elements['link'];
//переменные для лайка
let likeButton = document.querySelectorAll('.element__like');
const likeButtonActive = 'element__like_active';
let likeButtonArray = Array.prototype.slice.call(likeButton);
//темплейт
const templateCards = document.querySelector('#place-card').content;
const cardsWrap = document.querySelector('.elements__list');

const initialCards = [
  {
    name: 'Камчатка',
    link: './images/olga-bast-kamchatka-unsplash.jpg'
  },
  {
    name: 'Байкал',
    link: './images/philipp-trubchenko-baikal-unsplash.jpg'
  },
  {
    name: 'Камчатка',
    link: './images/alex-glebov-kamchatka-unsplash.jpg'
  },
  {
    name: 'Хребет Нургуш',
    link: './images/daniil-silantev-khrebet-nurgush-unsplash.jpg'
  },
  {
    name: 'Онежское озеро',
    link: './images/vladimir-fedotov-onega-lake-unsplash.jpg'
  },
  {
    name: 'Жигаланские водопады',
    link: './images/xenia-mechanic-zhigalanskie-vodopady-unsplash.jpg'
  }
];
//добавление карточек
function newCard(name, link) {
  let cardContent = templateCards.cloneNode(true);
  cardContent.querySelector('.element__image-title').textContent = name;
  cardContent.querySelector('.element__image').src = link;
  return cardContent;
}

//добавление начальных карточек
function defaultCards () {
  for (let i = 0; i < initialCards.length; i++) {
    const card = initialCards[i];
    const cardName = card.name;
    const cardImageLink = card.link;
    const cardContent = newCard(cardName, cardImageLink);
    newCard(cardName, cardImageLink);
    cardsWrap.append(cardContent);
  }
}

defaultCards ();

const renderCards = (item) => {
  const cards = templateCards.cloneNode(true);
  /*const cardTitle = cards.querySelector(.element__image-title);
  const cardImage = cards.querySelector(.element__image);*/

}

initialCards.forEach(item => {
  renderCards(item, cardsWrap)
})

//функция добавления карточек через массив и темплейт




function closeProfilePopup(event) {
  overlayProfile.classList.remove(popupOpened);
}

function closePlacePopup(event) {
  overlayAddPic.classList.remove(popupOpened);
}

function openProfilePopup(event) {
  event.preventDefault();
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
  overlayProfile.classList.add(popupOpened);
}

function openAddPicPopup(event) {
  event.preventDefault();
  overlayAddPic.classList.add(popupOpened);
}

function profileChange(event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  closePopup();
}

openProfilePopupButton.addEventListener('click', openProfilePopup);

openAddPicPopupButton.addEventListener('click', openAddPicPopup);

closeProfilePopupButton.addEventListener('click', closeProfilePopup);

closePlacePopupButton.addEventListener('click', closePlacePopup);

form.addEventListener('submit', profileChange);

/*функция проставки лайка*/
for (let i = 0; i < likeButtonArray.length; ++i) {
  likeButtonArray[i].addEventListener('click', function(event) {
    event.preventDefault();
    likeButtonArray[i].classList.toggle(likeButtonActive);
  })
};
