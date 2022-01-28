//постоянные
const closeProfilePopupButton = document.querySelector('.popup__profile-close-button');
const closePlacePopupButton = document.querySelector('.popup__place-close-button');
const closeImagePopupButton = document.querySelector('.popup__image-close-button');
const openProfilePopupButton = document.querySelector('.profile__edit-button');
const openAddPicPopupButton = document.querySelector('.profile__add-button');
const overlayProfile = document.querySelector('.popup_type_profile');
const overlayAddPic = document.querySelector('.popup_type_place');
const overlayImage = document.querySelector('.popup_type_big-image');
const popupOpened = 'popup_opened';
const likeButtonActive = 'element__like_active';
//переменные разметки профиля и карточек
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
//постоянная для форм
const profileForm = document.querySelector('.popup__profile-input-fields');
const placeForm = document.querySelector('.popup__place-input-fields');
// инпуты для профиля
const inputName = profileForm.elements['name'];
const inputAbout = profileForm.elements['about'];
// инпуты для карточек с картинками
const inputPlace = placeForm.elements['place'];
const inputLink = placeForm.elements['link'];
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

//постоянная попапа с большой картинкой
const handleImageClick = (event) => {
  const imageClicked = event.target;
  const imgUrl = imageClicked.src;
  const popupImage = document.querySelector('.popup__image');
  popupImage.src = imgUrl;
  popupImage.alt = imageClicked.alt;
  const popupCaption = document.querySelector('.popup__image-title');
  popupCaption.textContent = imageClicked.nextElementSibling.textContent;
  openPopup(overlayImage);
}

//функция лайка
function like(event) {
  const likeButton = event.target;
  likeButton.classList.toggle(likeButtonActive);
}

//функция удаления карточки
function deleteCard (event) {
  const deleteButton = event.target;
  const removedImage = deleteButton.closest('.element');
  removedImage.remove();
}

//функции открытия/закрытия попапа
function openPopup(popupType) {
  popupType.classList.add(popupOpened);
}

function closePopup(popupType) {
  popupType.classList.remove(popupOpened);
}

//функция инициализации карточек
function getCardElement(name, link) {
  let cardContent = templateCards.cloneNode(true);
  cardContent.querySelector('.element__image-title').textContent = name;
  cardContent.querySelector('.element__image').src = link;
  cardContent.querySelector('.element__image').alt = name;
  cardContent.querySelector('.element__image').addEventListener('click', handleImageClick);
  cardContent.querySelector('.element__like').addEventListener('click', like);
  cardContent.querySelector('.element__delete').addEventListener('click', deleteCard);
  cardContent.querySelector('.element__image').addEventListener('click', () => openPopup(overlayImage));
  return cardContent;
}
//функция добавления карточки в контейнер
function renderCard (card, cardsWrap) {
  cardsWrap.prepend(card)
}

// функция добавления карточек пользователем
function addCard (event) {
  event.preventDefault();
  const card = getCardElement(inputPlace.value, inputLink.value);
  renderCard (card, cardsWrap);
  closePopup(overlayAddPic);
  placeForm.reset();
}

//функция изменения профиля
function profileChange(event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  closePopup(overlayProfile);
}

//функция добавления дефолтных карточек
function defaultCards () {
  initialCards.forEach((item) => {
    const cardName = item.name;
    const cardImageLink = item.link;
    const cardContent = getCardElement(cardName, cardImageLink);
    getCardElement(cardName, cardImageLink);
    cardsWrap.append(cardContent);
  });
}

openProfilePopupButton.addEventListener('click', () => openPopup(overlayProfile));
openAddPicPopupButton.addEventListener('click', () => openPopup(overlayAddPic));
closeProfilePopupButton.addEventListener('click', () => closePopup(overlayProfile));
closePlacePopupButton.addEventListener('click', () => closePopup(overlayAddPic));
closeImagePopupButton.addEventListener('click', () => closePopup(overlayImage));
profileForm.addEventListener('submit', profileChange);
placeForm.addEventListener('submit', addCard);


defaultCards ();
