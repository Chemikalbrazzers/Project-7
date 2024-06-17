const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
  {
    name: 'Нургуш',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/khrebet-nurgush.jpg'
  },
  {
    name: 'Тулиновка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/tulinovka.jpg'
  },
  {
    name: 'Остров Желтухина',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/zheltukhin-island.jpg'
  },
  {
    name: 'Владивосток',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/vladivostok.jpg'
  }
];

const placesList = document.querySelector('.places-list');
const popup = document.querySelector('.popup');
const place_card = document.querySelector('.place-card');
const likeIcon = document.querySelector('.place-card__like-icon');
const formButton = document.querySelector('.user-info__button');
const Popapclouse = document.querySelector('.popup__close');
const liked = document.querySelector('.place-card__like-icon_liked')
const dellCard = document.querySelector('.place-card__delete-icon');
const popupButton = document.querySelector('.popup__button');
// const PopNameInput = document.querySelector('.popup__input_type_name');
const popup__error = document.querySelector('.popup__error-name');
const popup__errorLink = document.querySelector('.popup__error-link');
const EdiT = document.querySelector('.EdiT');
const popupProfil = document.querySelector('.popup-profil');
const popup__closeProf = document.querySelector('.popup__close-prof');
const MynForm = document.forms.new;
const myFormName = MynForm.name;
const myFormlink = MynForm.link;
// констатнты профиля
const popup__buttonProfil = document.querySelector('.popup__button-profil');
const popup__errorProfil = document.querySelector('.popup__error-name-profil');
//формы профиля
const newProfil = document.forms.newProfil;
const nameProfil = newProfil.nameProfil;
const linkProfil = newProfil.linkProfil;
const popup__errorNameProfil = document.querySelector('.popup__error-nameProfil');
const popup__errorLinkProfil = document.querySelector('.popup__error-linkProfil');



//добавление карточки
initialCards.forEach((card) => {
  placesList.insertAdjacentHTML('beforeend',
    `<div class="place-card">
  <div class="place-card__image" style="background-image: url(${card.link})">
    <button class="place-card__delete-icon"></button>
  </div>
  <div class="place-card__description">
    <h3 class="place-card__name">${card.name}</h3>
    <button class="place-card__like-icon"></button>
  </div>
</div>
`);
});
//открытие формы и закрытие
formButton.addEventListener('click', () => {
  popup.classList.add('popup_is-opened');
});
Popapclouse.addEventListener('click', () => {
  popup.classList.toggle('popup_is-opened');
});
//лайк карточке и удаление карточке
placesList.addEventListener('click', (event) => {
  if (event.target.classList.contains('place-card__like-icon')) {
    event.target.classList.toggle('place-card__like-icon_liked')
  } else if (event.target.classList.contains('place-card__delete-icon')) {
    //console.dir(event.target.parentElement.parentElement);
    placesList.removeChild(event.target.closest('.place-card'));
  }
});
//фокус на поле имени
const HolderName = myFormName.placeholder
myFormName.addEventListener('focus', function (event) {
  myFormName.placeholder = ''
});
myFormName.addEventListener('blur', function (event) {
  myFormName.placeholder = HolderName
});
//фокус на поле ссылки
const HolderLink = myFormlink.placeholder
myFormlink.addEventListener('focus', function (event) {
  myFormlink.placeholder = ''
});
myFormlink.addEventListener('blur', function (event) {
  myFormlink.placeholder = HolderLink
});
//валидация ИМЕНИ
myFormName.addEventListener('input', function (event) {
  if (!myFormName.validity.valid) {
    popup__error.innerHTML = `${myFormName.validationMessage}`
    popup__error.classList.add('popup__error-visible')
  } else {
    popup__error.innerHTML = '';
    popup__error.classList.remove('popup__error-visible')
  }
  if (myFormName.validity.valid) {
    popupButton.removeAttribute('disabled')
  } else {
    popupButton.setAttribute('disabled', true)
  }
});

//валидация ССЫЛКИ
myFormlink.addEventListener('input', function (event) {
  if (!myFormlink.validity.valid) {
    popup__errorLink.innerHTML = `${myFormlink.validationMessage}`
    popup__errorLink.classList.add('popup__error-visible')
  } else {
    popup__errorLink.innerHTML = '';
    popup__errorLink.classList.remove('popup__error-visible')
  }
  if (myFormlink.validity.valid) {
    popupButton.removeAttribute('disabled')
  } else {
    popupButton.setAttribute('disabled', true)
  }
});

//добавление карточки через форму
popupButton.addEventListener('click', function (event) {
  event.preventDefault()
  console.log('popupButton', myFormName)
  placesList.insertAdjacentHTML('afterBegin',
    `<div class="place-card">
  <div class="place-card__image" style="background-image: url(${myFormlink.value})">
    <button class="place-card__delete-icon"></button>
  </div>
  <div class="place-card__description">
    <h3 class="place-card__name">${myFormName.value}</h3>
    <button class="place-card__like-icon"></button>
  </div>
</div>
`);
});

// ПРОФИЛЬ
/*////////////////////////////////////////////////////////*/

//открытие формы и закрытие проифля c аватаркой
EdiT.addEventListener('click', () => {
  popupProfil.classList.add('popup_is-opened');
});
popup__closeProf.addEventListener('click', () => {
  popupProfil.classList.toggle('popup_is-opened');
});

//валидация формы профиля Имя Фамилия
nameProfil.addEventListener('input', function (event) {
  if (!nameProfil.validity.valid) {
    popup__errorNameProfil.innerHTML = `${nameProfil.validationMessage}`;
    popup__errorNameProfil.classList.add('popup__error-visible')
  } else {
    popup__errorNameProfil.innerHTML = '';
    popup__errorNameProfil.classList.remove('popup__error-visible')
  }
  if (nameProfil.validity.valid) {
    popup__buttonProfil.removeAttribute('disabled')
  } else {
    popup__buttonProfil.setAttribute('disabled', true)
  }
});
// валидация формы Профиля О себе
linkProfil.addEventListener('input', function (event) {
  if (!linkProfil.validity.valid) {
    popup__errorLinkProfil.innerHTML = `${linkProfil.validationMessage}`;
    popup__errorLinkProfil.classList.add('popup__error-visible')
  } else {
    popup__errorLinkProfil.innerHTML = '';
    popup__errorLinkProfil.classList.remove('popup__error-visible')
  }
  if (linkProfil.validity.valid) {
    popup__buttonProfil.removeAttribute('disabled')
  } else {
    popup__buttonProfil.setAttribute('disabled', true)
  }
});

//Активация стиля кнопки отправить если в поле есть текст
MynForm.addEventListener('input', () => {
  console.log('Срабатывает первое условие')
  console.dir(MynForm)
  if (MynForm.value !== '') {
popupButton.classList.add('popup__buttonActive')
  } else {
    console.log('сработало второе условие')
    popupButton.classList.remove('popup__buttonActive')
    
  }
})