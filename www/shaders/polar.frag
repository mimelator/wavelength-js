precision mediump float;

// lets grab texcoords just for fun
varying vec2 vTexCoord;

// our time uniform variable coming from p5
uniform float time;

// from sketch.js
uniform vec2 iResolution;

const float THICKNESS = 0.05;

void main() {

    vec2 uv = (gl_FragCoord.xy * 2.0 - iResolution.xy) / iResolution.y - 1.;

    float purple = (abs(uv.y + 1.85) < THICKNESS) ? 1. : 0.;

    gl_FragColor = vec4(purple, 0.0, purple, 1.0);    
}