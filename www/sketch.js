/**
 * Lifecycle is controlled by the p5js library:
 * https://p5js.org/get-started/
 */

// a shader variable
let theShader;
let LOADED_SHADERS = {}
const SHADERS_NAMES = [
  "polar", "first", "fractal"]

function preload() {
  SHADERS_NAMES.forEach(shaderName => {
    let nextShader = preloadShader(shaderName);
    LOADED_SHADERS[shaderName] = nextShader;
  });

  theShader = LOADED_SHADERS[SHADERS_NAMES[0]];
}

function preloadShader(shaderName){
  // load the shader
  let vertexShader = './shaders/' + shaderName + '.vert';
  let fragShader = './shaders/' + shaderName + '.frag';
  console.log('preloading shader: ' + fragShader);
  theShader = loadShader(vertexShader, fragShader);

  if (!theShader) {
    console.log("failed to preload shader: " + fragShader);
  }
  return theShader;
}

let sel;

function setupSelectBox() {
  sel = createSelect();
  sel.position(10, 10);
  SHADERS_NAMES.forEach(shader => {
    sel.option(shader);
  });
    
  sel.changed(mySelectEvent);
}

function mySelectEvent() {
  console.log('updating Shader: ' + sel.value());
  
  theShader = LOADED_SHADERS[sel.value()];
}

function setup() {
  // shaders require WEBGL mode to work
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
  setupSelectBox();
}

function draw() {  
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

