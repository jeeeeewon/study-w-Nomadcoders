const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement('img')
//element를 생성할 수 있음

bgImage.src = `img/${chosenImage}`;
bgImage.className = 'bgImgs';

document.body.appendChild(bgImage);