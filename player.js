class Player {
  constructor() {
    this.size = 200;
    this.x = 50;
    this.y = height - this.size;
    this.velocityY = 0;
    this.gravity = 0.5;
  }
  show() {
    image(playerimg, this.x, this.y, this.size, this.size);
  }
  jump() {
    this.velocityY = -18;
  }
  move() {
    this.y += this.velocityY;
    this.velocityY += this.gravity;
    this.y = constrain(this.y, 0, height - this.size);
  }

  collided(currentObs) {
    let isCollidng = collideRectRect(
      this.x,
      this.y,
      this.size - 30,
      this.size - 30,

      currentObs.x,
      currentObs.y,
      currentObs.size - 10,
      currentObs.size
    );
    return isCollidng;
  }
}
