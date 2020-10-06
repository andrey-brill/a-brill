
import { AFloatingColors } from '../chunk-e.js';

export function colorify (svg, options = {}) {
    AFloatingColors.colorify(svg, Object.assign({
        gradientAngle: 90,
        initialColor: '#333333',
        floatingColors: [ '#e91e63', '#333333' ],
        animationDelay: 1000
    }, options));
}