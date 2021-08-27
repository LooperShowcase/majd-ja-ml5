class Obstacle {
  constructor() {
    this.size = 200;
    this.x = width;
    this.rnd = random(height);

    this.y = this.rnd - this.size;
  }

  show() {
    image(obsimg, this.x, this.y, this.size, this.size);
  }
  move() {
    this.x -= 6;
  }
}
