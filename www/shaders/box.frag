precision mediump float;

// lets grab texcoords just for fun
varying vec2 vTexCoord;

// our time uniform variable coming from p5
uniform float iTime;

// from sketch.js
uniform vec2 iResolution;

const float THICKNESS = 0.05;

vec2 rotate(vec2 uv, float th) {
  return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
}

vec3 sdfSquare(vec2 uv, float size, vec2 offset) {
  float x = uv.x - offset.x;
  float y = uv.y - offset.y;
  vec2 rotated = rotate(vec2(x,y), iTime * .1);
  float d = max(abs(rotated.x), abs(rotated.y)) - size;
  
  return d > 0. ? vec3(1.) : vec3(1., 0., 0.);
}

void main() {
  vec2 uv = (gl_FragCoord.xy * 2.0 - iResolution.xy) / iResolution.y - 1.;

  vec2 offset = vec2(-2.0, 0.0);

  vec3 col = sdfSquare(uv, 0.2, offset);

  // Output to screen
  gl_FragColor = vec4(col,1.0);
}

