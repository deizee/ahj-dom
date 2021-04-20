let index = 0;

function generateGameField() {
  const gameField = document.createElement('div');
  gameField.classList.add('gameField');
  for (let i = 0; i < 16; i += 1) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    gameField.appendChild(cell);
  }
  return gameField;
}

function generateRandomIndex() {
  return Math.floor(Math.random() * 16);
}

function showImage() {
  const cellsArr = document.querySelectorAll('.cell');
  let randomIndex = generateRandomIndex();
  while (randomIndex === index) {
    randomIndex = generateRandomIndex();
  }
  index = randomIndex;
  const imageContainer = document.createElement('div');
  imageContainer.classList.add('image-container');
  cellsArr[index].appendChild(imageContainer);
}

const container = document.querySelector('.container');
const gameField = generateGameField();
container.appendChild(gameField);

setInterval(() => {
  const img = document.querySelector('.image-container');
  if (img) {
    img.remove();
  }
  showImage();
}, 1000);
