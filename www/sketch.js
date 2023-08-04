// a shader variable
let theShader;

function preload(){
  // load the shader
  //theShader = loadShader('./shaders/shader.vert', './shaders/shader.frag');
  theShader = loadShader('./shaders/fractal.vert', './shaders/fractal.frag');
}

function setup() {
  // shaders require WEBGL mode to work
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
}

function draw() {  
  // shader() sets the active shader with our shader
  shader(theShader);
  
  theShader.setUniform("iResolution", [width, height]);
  theShader.setUniform("iFrame", frameCount);
  theShader.setUniform('time', frameCount);
  //theShader.setUniform("iMouse", [mouseX, map(mouseY, 0, height, height, 0)]);

  // rect gives us some geometry on the screen
  rect(0,0,width, height);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}