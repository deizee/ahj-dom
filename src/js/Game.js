class Game {
  constructor(container) {
    this.container = container;
    this.index = 0;
  }

  init() {
    this.generateGameField();
    this.start();
  }

  generateGameField() {
    const gameField = document.createElement('div');
    gameField.classList.add('gameField');
    for (let i = 0; i < 16; i += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      gameField.appendChild(cell);
    }
    this.cellsArr = [...gameField.children];
    this.container.appendChild(gameField);
  }

  generateRandomIndex() {
    return Math.floor(Math.random() * 16);
  }

  showImage() {
    let randomIndex = this.generateRandomIndex();
    while (randomIndex === this.index) {
      randomIndex = this.generateRandomIndex();
    }
    this.index = randomIndex;
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');
    this.cellsArr[this.index].appendChild(imageContainer);
  }

  start() {
    setInterval(() => {
      const img = document.querySelector('.image-container');
      if (img) {
        img.remove();
      }
      this.showImage();
    }, 1000);
  }
}

export default Game;
