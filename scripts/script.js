const closePopupButton = document.querySelector('.popup__close-button');
const openPopupButton = document.querySelector('.profile__edit-button');
const overlay = document.querySelector('.popup');
const popupOpened = 'popup_opened';
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
const form = document.querySelector('.popup__input-fields');
let inputName = form.elements['name'];
let inputAbout = form.elements['about'];
/*переменные для лайка*/
let likeButton = document.querySelectorAll('.element__like');
const likeButtonActive = 'element__like_active';
let likeButtonArray = Array.prototype.slice.call(likeButton);


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

function closePopup(event) {
  overlay.classList.remove(popupOpened);
}

function openPopup(event) {
  event.preventDefault();
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
  overlay.classList.add(popupOpened);
}

function profileChange(event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  closePopup();
}

openPopupButton.addEventListener('click', openPopup)

closePopupButton.addEventListener('click', closePopup)

form.addEventListener('submit', profileChange);

/*функция проставки лайка*/
for (let i = 0; i < likeButtonArray.length; ++i) {
  likeButtonArray[i].addEventListener('click', function(event) {
    event.preventDefault();
    likeButtonArray[i].classList.toggle(likeButtonActive);
  })
}
