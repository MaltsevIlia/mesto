const closePopupButton = document.querySelector('.popup__close-button');
const openPopupButton = document.querySelector('.profile__edit-button');
const overlay = document.querySelector('.popup');
const popupOpened = 'popup_opened';
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
const form = document.querySelector('.popup__input-fields');
let inputName = form.elements['name'];
let inputAbout = form.elements['about'];

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
