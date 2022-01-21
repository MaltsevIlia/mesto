//глобальные постоянные
const closePopupButton = document.querySelectorAll('.popup__close-button'); //создается псевдомассив, к нему не применяются слушатели
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
const templateCards = document.querySelector('#place-card').content.querySelector('.element__image-title');

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

const renderCards = (item) => {
  const cards = templateCards.cloneNode(true);
  /*const cardTitle = cards.querySelector(.element__image-title);
  const cardImage = cards.querySelector(.element__image);*/

}

initialCards.forEach(item => {
  renderCards(item, cardsWrap)
})

//функция добавления карточек через массив и темплейт



/*
function closeProfilePopup(event) {
  overlayProfile.classList.remove(popupOpened);
}

function closeAddPicPopup(event) {
  overlayAddPic.classList.remove(popupOpened);
}
*/

closePopupButton.forEach((event) => {
  overlayProfile.classList.remove(popupOpened);
  overlayAddPic.classList.remove(popupOpened);
})

function openProfilePopup(event) {
  event.preventDefault();
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
  overlayProfile.classList.add(popupOpened);
}

function openAddPicPopup(event) {
  event.preventDefault();
  /*inputPlace.value = place.textContent;*/
  /*inputLink.value = link.textContent;*/
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

closePopupButton.addEventListener('click', closeProfilePopup);

closePopupButton.addEventListener('click', closeAddPicPopup);

form.addEventListener('submit', profileChange);

/*функция проставки лайка*/
for (let i = 0; i < likeButtonArray.length; ++i) {
  likeButtonArray[i].addEventListener('click', function(event) {
    event.preventDefault();
    likeButtonArray[i].classList.toggle(likeButtonActive);
  })
};
