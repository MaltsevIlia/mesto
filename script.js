const closePopupButton = document.querySelector('.popup__close-button');
const openPopupButton = document.querySelector('.profile__edit-button');
const overlay = document.querySelector('.popup');
const popupOpened = 'popup_opened'

openPopupButton.addEventListener('click', function(event) {
  event.preventDefault();
  overlay.classList.add(popupOpened);
})

closePopupButton.addEventListener('click', function() {
  overlay.classList.remove(popupOpened);
})

overlay.addEventListener('click', function() {
  overlay.classList.remove(popupOpened);
})

document.addEventListener('keydown', function(event) {
  if (event.code === 'Escape') {
    overlay.classList.remove(popupOpened);
  }
})

let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
let inputName = document.querySelector('.popup__input-field_name');
let inputAbout = document.querySelector('.popup__input-field_about');
const profileSave = document.querySelector('.popup__submit-button');

function profileChange () {
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
}

profileSave.addEventListener('click', function() {
  profileChange();
  overlay.classList.remove(popupOpened);
})

let likeButton = document.querySelectorAll('.element__like');
const likeButtonActive = 'element__like_active';
let likeButtonArray = Array.prototype.slice.call(likeButton)


for (let i = 0; i < likeButtonArray.length; ++i) {
  likeButtonArray[i].addEventListener('click', function(event) {
    event.preventDefault();
    likeButtonArray[i].classList.toggle(likeButtonActive);
  })
}
