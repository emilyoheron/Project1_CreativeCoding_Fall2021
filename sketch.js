
function setup() {
  createCanvas(windowWidth, windowHeight);
  circles = [];
  circles2 = [];
  bubbles = [];
  alert("I wanted to create a cool pattern/effect using just circles.\nClick the mouse and use the right arrow key to change the pattern. \nUse the left arrow key to get back to the original pattern.");

  let x = windowWidth - 600;

  for (let i = 0; i < 150; i++)
  {
    circles.push(new newCircle(x));
    circles2.push(new newCircle(x));

    x -= 8;
  }
}

function draw() {
  background(255,250,250);

  for (let i = 0; i < circles.length; i++){
    circles[i].show();
  }
  for (let i = 0; i < circles2.length; i++){
    circles2[i].show();
  }
  for (let i = 0; i < bubbles.length; i++){
    bubbles[i].show();
  }
}

function mousePressed(){
  for (let i = 0; i < circles2.length; i++){
    circles2[i].click();
  }
}

function keyPressed() {
  let r = windowWidth - 600;
  let l = 0;

  if (keyCode === LEFT_ARROW) {
    for (let i = 0; i < 10; i++)
    {
      bubbles.splice(0,l);
      l++;
    }
  } else if (keyCode == RIGHT_ARROW) {
      for (let i = 0; i < 150; i++)
      {
        bubbles.push(new bubble(r));
        r -= 8;
      }
  }
}

function newCircle(x) {
  let speed = 2;
  let y = ((windowWidth/2));

  this.show = function(){
    stroke(0);
    noFill();
    circle(y, ((windowHeight/2)), (x));
  }

  this.click = function(){
    y = y + speed;
    if(y > windowWidth - (windowWidth/2) || y < windowWidth/2) {
      speed = -speed;
    }
  }

  this.right = function() {
    y = y + speed;
    if(y > windowWidth - (windowWidth/2) || y < windowWidth/2) {
      speed = -speed;
    }
  }
}

function bubble(r) {
  let c = 400;
  let speed = 40;

  this.show = function(){
    circle(c, height/2, r);
    c = c + speed;
    
    if(c > width - 400 || c < 400){
      speed = -speed;
    }

  }



}




