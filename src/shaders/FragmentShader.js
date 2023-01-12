const fragmentShader = `
#define MAX_STEPS 100
#define MAX_DIST 100
#define SURF_DIST .01

uniform vec2 resolution;
varying vec2 vUv;
uniform float u_time;

void main()
{
    // vec2 coord = gl_FragCoord.xy / resolution.xy;
    vec2 coord = vUv;
    vec2 st = coord;
    vec3 line = vec3(0.0);

    coord *= 4.;

    float len;

    for (int i = 0; i < 15; i++) {
        len = length(vec2(coord.x, coord.y));
        coord.x += cos(coord.y + sin(len)) + cos(u_time * .07) * 0.2;
        coord.y += sin(coord.x + cos(len)) + sin(u_time * 0.1);
    }

    len *= cos(len * 0.4);

    len -= 10.;

    for (float i = 0.0; i < 5.0; i++) {
        len += 0.11 / abs(mod(st.x, 1.09 * i) * 200.) * 1.;
    }

    vec3 color = vec3(cos(len + 0.5) * 1.15, cos(len + 0.1), cos(len - 0.05));
    //                          0.2

    gl_FragColor = vec4(color, 1.0);
}

`


/*
uniform vec2 resolution;
uniform vec2 offset;
uniform float time;
uniform sampler2D src;
varying vec2 vUv;


void main() {

    

    vec2 uv = (gl_FragCoord.xy - offset) / resolution;
    // gl_FragColor = texture2D(src, uv) * step(.5, fract(time));

    // Time varying pixel color
    vec3 col = 0.5 + 0.5*cos(time+uv.xyx+vec3(0,2,4));

    // Output to screen
    gl_FragColor = vec4(0.5, 1., 1., 1.0);
}
*/

export default fragmentShader;