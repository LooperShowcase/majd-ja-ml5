let img;
let playerimg;
let obsimg;
let player;
let obs;
let obstacles = [];
let wordClassifier;

function preload() {
  img = loadImage("background.jpg");
  playerimg = loadImage("player.png");
  obsimg = loadImage("x-wing.png");

  let options = {
    probabilityThreshold: 0.85,
  };
  wordClassifier = ml5.soundClassifier("SpeechCommands18w", options);
}

function setup() {
  createCanvas(1600, 800);
  player = new Player();
  wordClassifier.classify(heardWord);
}
function heardWord(error, results) {
  console.log(results[0]);
  if (results[0].label === "up") {
    player.jump();
  }
}
//obs = obsticale;
function keyPressed() {
  if (key === " ") {
    player.jump();
  }
}

function draw() {
  background(img);

  if (random(1) < 0.01) {
    obstacles.push(new Obstacle());
  }

  for (let obs of obstacles) {
    obs.show();
    obs.move();
    if (player.collided(obs)) {
      noLoop();
      textSize(12);
      fill("white");
      text("looser", 450, 450);
    }
  }
  player.show();
  player.move();
}
