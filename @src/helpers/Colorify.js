
import { AFloatingColors } from '../chunk-e.js';

export function colorify (svg, options = {}) {
    AFloatingColors.colorify(svg, Object.assign({
        gradientAngle: 180,
        initialColor: '#090909',
        floatingColors: [ '#f44336', '#008cff', '#e91e63', '#008cff'],
        animationDelay: 1000
    }, options));
}