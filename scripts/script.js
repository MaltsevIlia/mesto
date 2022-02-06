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
//картинка в попапе с увеличенным изображением
const popupImage = document.querySelector('.popup__image');
//подпись к картинке в попапе
const popupCaption = document.querySelector('.popup__image-title');
//кнопки submit
const submitButtons = [...document.querySelectorAll('.popup__submit-button')];
//открытый попап
const openedPopup = document.querySelector('.popup_opened');
//все попапы
const popups = [...document.querySelectorAll('.popup')];
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
  popupImage.src = imgUrl;
  popupImage.alt = imageClicked.alt;
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
  document.addEventListener('keydown', handleEscKey);
}

//закртыие попапа
function closePopup() {
  document.removeEventListener('keydown', handleEscKey);
  document.querySelector('.popup_opened').classList.remove('popup_opened');
}

//функция инициализации карточек
function getCardElement(name, link) {
  const cardContent = templateCards.cloneNode(true);
  const cardContentImage = cardContent.querySelector('.element__image');
  cardContent.querySelector('.element__image-title').textContent = name;
  cardContentImage.src = link;
  cardContentImage.alt = name;
  cardContentImage.addEventListener('click', handleImageClick);
  cardContent.querySelector('.element__like').addEventListener('click', like);
  cardContent.querySelector('.element__delete').addEventListener('click', deleteCard);
  return cardContent;
}
//функция добавления карточки в контейнер
function renderCard (card, cardsWrap) {
  cardsWrap.prepend(card)
}

function disableSubmitButton() {
  submitButtons.forEach((item) => {
    item.disabled = true;
    item.classList.add('popup__submit-button_type_inactive');
  });
}

// функция добавления карточек пользователем
function addCard (event) {
  event.preventDefault();
  const card = getCardElement(inputPlace.value, inputLink.value);
  renderCard (card, cardsWrap);
  closePopup();
  placeForm.reset();
  disableSubmitButton();
}

//функция изменения профиля
function changeProfile(event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  inputName.placeholder = profileName.textContent;
  inputAbout.placeholder = profileAbout.textContent;
  closePopup();
}

//функция добавления дефолтных карточек
function renderDefaultCards () {
  initialCards.forEach((item) => {
    const cardName = item.name;
    const cardImageLink = item.link;
    const cardContent = getCardElement(cardName, cardImageLink);
    getCardElement(cardName, cardImageLink);
    cardsWrap.append(cardContent);
  });
}

//функция закрытия попапа кликом на оверлей
const closePopupOverlayClick = function (event) {
  if (event.target !== event.currentTarget || popupOpened) {
    return
  }
  closePopup();
}

//функция закрытия попапа нажатием на esc
const handleEscKey = function (event) {
  if (event.key === 'Escape') {
    closePopup()
  }
}

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
          closePopup();
      }
      if (evt.target.classList.contains('popup__close')) {
        closePopup();
      }
  })
})

overlayAddPic.addEventListener('click', closePopupOverlayClick);
overlayImage.addEventListener('click', closePopupOverlayClick);
overlayProfile.addEventListener('click', closePopupOverlayClick);
openProfilePopupButton.addEventListener('click', () => openPopup(overlayProfile));
openAddPicPopupButton.addEventListener('click', () => openPopup(overlayAddPic));
profileForm.addEventListener('submit', changeProfile);
placeForm.addEventListener('submit', addCard);


renderDefaultCards ();
