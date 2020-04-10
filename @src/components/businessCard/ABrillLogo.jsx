
import { React, AFloatingColors } from '../../chunk-e.js';

import style from './ABrillLogo.m.scss';


const ABrillLogoSvg = React.forwardRef((_props, ref) => (
  <svg ref={ref} className={style.logo} viewBox="0 0 476 476" xmlns="http://www.w3.org/2000/svg">
    <path id="logo" d="M462,238c0,123.709-100.291,224-224,224S14,361.709,14,238,114.291,14,238,14,462,114.291,462,238ZM66.436,382.073a174.187,174.187,0,0,1,343.128,0m0-288.146A174.183,174.183,0,0,1,238,238"/>
  </svg>
));


export class ABrillLogo extends React.Component {

    constructor (props) {
        super(props);

        this.svg = React.createRef();
    }

    render () {
        return (
            <ABrillLogoSvg ref={this.svg}/>
        )
    }

    componentDidMount () {
        const svg = this.svg.current;
        AFloatingColors.colorify(svg, {
            targetId: 'logo',
            gradientAngle: 175,
            gradientUseAs: 'stroke',
            initialColor: '#090909',
            floatingColors: ['#f44336', '#008cff', '#e91e63', '#008cff'],
            animationDelay: 1000
        });
    }

}
