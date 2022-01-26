//глобальные постоянные
const closeProfilePopupButton = document.querySelector('.popup__profile-close-button');
const closePlacePopupButton = document.querySelector('.popup__place-close-button');
const openProfilePopupButton = document.querySelector('.profile__edit-button');
const openAddPicPopupButton = document.querySelector('.profile__add-button')
const overlayProfile = document.querySelector('.popup__profile');
const overlayAddPic = document.querySelector('.popup__place');
const overlayImage = document.querySelector('.popup__big-image');
const popupOpened = 'popup_opened';
//переменные для разметки профиля и карточек
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
let place = document.querySelector('.element__image-title');
let imgLink = document.querySelector('.element__image');
//постоянная для форм
const profileForm = document.querySelector('.popup__profile-input-fields');
const placeForm = document.querySelector('.popup__place-input-fields');
// инпуты для профиля
let inputName = profileForm.elements['name'];
let inputAbout = profileForm.elements['about'];
// инпуты для карточек с картинками
let inputPlace = placeForm.elements['place'];
let inputLink = placeForm.elements['link'];

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
  },
];

function newCard(name, link) {
  let cardContent = templateCards.cloneNode(true);
  cardContent.querySelector('.element__image-title').textContent = name;
  cardContent.querySelector('.element__image').src = link;
  return cardContent;
}

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

function addCard (event) {
  event.preventDefault();
  const cardName = inputPlace.value;
  const cardImageLink = inputLink.value;
  cardContent = newCard(cardName, cardImageLink);
  cardsWrap.prepend(cardContent);
  closePlacePopup();
}

const image = document.querySelectorAll('.element__image');

//закрыть попап профиля
function closeProfilePopup(event) {
  overlayProfile.classList.remove(popupOpened);
}

//закрыть попап добавления карточки
function closePlacePopup(event) {
  overlayAddPic.classList.remove(popupOpened);
}

function closeImagePopup(event) {
  overlayImage.classList.remove(popupOpened);
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
  closeProfilePopup();
}

function openPicturePopup(event) {
  overlayImage.classList.add(popupOpened);
}

//открытие попапа с большой картинкой
const handleImageClick = (event) => {
  const imageClicked = event.target;
  const imgUrl = imageClicked.src;
  const popupImage = document.querySelector('.popup__image');
  popupImage.src = imgUrl;
  const popupCaption = document.querySelector('.popup__image-title');
  popupCaption.textContent = imageClicked.nextElementSibling.textContent;
  openPicturePopup();
}

image.forEach((item) => {
  item.addEventListener('click', handleImageClick);
});

const closeImagePopupButton = document.querySelector('.popup__image-close-button');

openProfilePopupButton.addEventListener('click', openProfilePopup);

openAddPicPopupButton.addEventListener('click', openAddPicPopup);

closeProfilePopupButton.addEventListener('click', closeProfilePopup);

closePlacePopupButton.addEventListener('click', closePlacePopup);

closeImagePopupButton.addEventListener('click', closeImagePopup);

profileForm.addEventListener('submit', profileChange);

placeForm.addEventListener('submit', addCard);


//переменные для лайка
let likeButton = document.querySelectorAll('.element__like');
const likeButtonActive = 'element__like_active';
let likeButtonArray = Array.prototype.slice.call(likeButton);

//функция проставки лайка
for (let i = 0; i < likeButtonArray.length; ++i) {
  likeButtonArray[i].addEventListener('click', function(event) {
    event.preventDefault();
    likeButtonArray[i].classList.toggle(likeButtonActive);
  })
};

//функция удаления картинки
function deleteCard (event) {
  const deleteButton = event.target;
  const removedImage = deleteButton.closest('.element');
  removedImage.remove();
}

const deleteButton = document.querySelectorAll('.element__delete');
deleteButton.forEach((item) => {
  item.addEventListener('click', deleteCard);
});

/*
function like(event) {
  likeButton.classList.toggle(likeButtonActive);
}

likeButton.forEach((item) => {
  item.addEventListener('click', like);
});
*/
