import './mystyles.scss';
import './holaMundoReact.tsx';
import logoImg from './images/logo_2.png';

const img = document.createElement('img');
img.src = logoImg;

document.getElementById('imgContainer').appendChild(img);