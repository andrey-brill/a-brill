
import { AFloatingColors } from '../chunk-e.js';

export function colorify (svg, options = {}) {
    AFloatingColors.colorify(svg, Object.assign({
        gradientAngle: 175,
        initialColor: '#313131',
        floatingColors: [ '#f44336', '#008cff', '#e91e63', '#008cff'],
        animationDelay: 1000
    }, options));
}