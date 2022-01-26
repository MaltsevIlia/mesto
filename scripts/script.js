//постоянные
const closeProfilePopupButton = document.querySelector('.popup__profile-close-button');
const closePlacePopupButton = document.querySelector('.popup__place-close-button');
const openProfilePopupButton = document.querySelector('.profile__edit-button');
const openAddPicPopupButton = document.querySelector('.profile__add-button')
const overlayProfile = document.querySelector('.popup__profile');
const overlayAddPic = document.querySelector('.popup__place');
const overlayImage = document.querySelector('.popup__big-image');
const popupOpened = 'popup_opened';
//переменные разметки профиля и карточек
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
//постоянная для форм
const profileForm = document.querySelector('.popup__profile-input-fields');
const placeForm = document.querySelector('.popup__place-input-fields');
// инпуты для профиля
let inputName = profileForm.elements['name'];
let inputAbout = profileForm.elements['about'];
// инпуты для карточек с картинками
let inputPlace = placeForm.elements['place'];
let inputLink = placeForm.elements['link'];
//постоянная темплейта
const templateCards = document.querySelector('#place-card').content;
//обёртка карточек
const cardsWrap = document.querySelector('.elements__list');
//дефолтные карточки
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
//функция добавления карточек
function newCard(name, link) {
  let cardContent = templateCards.cloneNode(true);
  cardContent.querySelector('.element__image-title').textContent = name;
  cardContent.querySelector('.element__image').src = link;
  cardContent.querySelector('.element__image').alt = name;
  return cardContent;
}
//функция наполнения страницы дефолтными карточками из массива
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
// функция добавления картчек пользователем
function addCard (event) {
  event.preventDefault();
  const cardContent = newCard(inputPlace.value, inputLink.value);
  cardsWrap.prepend(cardContent);
  closePlacePopup();
}

//функция закрытия попапа профиля
function closeProfilePopup(event) {
  overlayProfile.classList.remove(popupOpened);
}

//функция закрытия попапа добавления карточки
function closePlacePopup(event) {
  overlayAddPic.classList.remove(popupOpened);
}
//функция закрытия попапа с картинкой
function closeImagePopup(event) {
  overlayImage.classList.remove(popupOpened);
}
//функция открытия попапа изменеия профиля
function openProfilePopup(event) {
  event.preventDefault();
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
  overlayProfile.classList.add(popupOpened);
}
//функция открытия попапа с добавлением карточки пользователем
function openAddPicPopup(event) {
  event.preventDefault();
  overlayAddPic.classList.add(popupOpened);
}
//функция изменения профиля
function profileChange(event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  closeProfilePopup();
}
//функция открытия попапа с увеличеенной картинкой
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
//постоянная картинки из карточек
const cardImage = document.querySelectorAll('.element__image');
//назначения слушателя на картинки
cardImage.forEach((item) => {
  item.addEventListener('click', handleImageClick);
});

//постоянная кноппки закртыия попапа с увличенной картинкой
const closeImagePopupButton = document.querySelector('.popup__image-close-button');

//назначение слушателей
openProfilePopupButton.addEventListener('click', openProfilePopup);

openAddPicPopupButton.addEventListener('click', openAddPicPopup);

closeProfilePopupButton.addEventListener('click', closeProfilePopup);

closePlacePopupButton.addEventListener('click', closePlacePopup);

closeImagePopupButton.addEventListener('click', closeImagePopup);

profileForm.addEventListener('submit', profileChange);

placeForm.addEventListener('submit', addCard);

//функция удаления карточки
function deleteCard (event) {
  const deleteButton = event.target;
  const removedImage = deleteButton.closest('.element');
  removedImage.remove();
}
//переменная кнопки удаления карточек
const deleteButton = document.querySelectorAll('.element__delete');

//назначение слушателя на кнопки удаления карточек
deleteButton.forEach((item) => {
  item.addEventListener('click', deleteCard);
});

//переменные для лайка
const likeButton = document.querySelectorAll('.element__like');
const likeButtonActive = 'element__like_active';

//функция проставки лайка
function like(event) {
  const likeButton = event.target;
  likeButton.classList.toggle(likeButtonActive);
}
//назначения слушателя на кнопки лайка
likeButton.forEach((item) => {
  item.addEventListener('click', like);
});

