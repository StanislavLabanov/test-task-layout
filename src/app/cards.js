import firstImage from './assets/first-image.png';
import secondImage from './assets/second-image.png';
import thirdImage from './assets/third-image.png';
import arrow from './assets/arrow.svg';

export const cards = [
  {
    arrow,
    numb: 1,
    text: 'Получите<br />партнерскую ссылку',
    img: thirdImage,
    imgAlt: 'Картинка для 1 карточки',
  },
  {
    arrow,
    numb: 2,
    text: 'Расскажите<br />о IIII.COM',
    img: secondImage,
    imgAlt: 'Картинка для 2 карточки',
  },
  {
    arrow: null,
    numb: 3,
    text: 'Получайте хороший процент<br />от покупок по вашей ссылке!',
    img: firstImage,
    imgAlt: 'Картинка для 3 карточки',
  },
];
