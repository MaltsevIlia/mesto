
const popupConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input-field',
  inputErrorClass: 'popup__input-field_type_error',
  submitButtonSelector: '.popup__submit-button',
  submitButtonInactive: 'popup__submit-button_type_inactive'
}


function enableValidation(data) {
  const formList = [...document.querySelectorAll(data.formSelector)];
  formList.forEach(form => addFormListeners(form, data));
};

function addFormListeners(form, config) {
  form.addEventListener('submit', handleSubmit);
  form.addEventListener('input', () => changeSubmitButtonState(form, config))
  const inputs = [...form.querySelectorAll(config.inputSelector)];
  inputs.forEach(input => input.addEventListener('input', () => handleField(form, input, config)));
  changeSubmitButtonState(form, config);
}

function handleSubmit(event) {
  event.preventDefault();
}

function handleField(form, input, config) {
  if (input.validity.valid) {
    hideError(form, input, config)
  } else {
    showError(form, input, config)
  }
}

function showError(form, input, config) {
  input.classList.add(config.inputErrorClass);
  const errorElement = form.querySelector(`#${input.id}-error`);
  errorElement.textContent = input.validationMessage;
}

function hideError(form, input, config) {
  input.classList.remove(config.inputErrorClass);
  const errorElement = form.querySelector(`#${input.id}-error`);
  errorElement.textContent = '';
}

function changeSubmitButtonState(form, config) {
  const submitButton = form.querySelector(config.submitButtonSelector);
  submitButton.disabled = !form.checkValidity();
  submitButton.classList.toggle(config.submitButtonInactive, !form.checkValidity())
}

enableValidation(popupConfig);

