
import { React } from '../../chunk-e.js';

import style from './ABrillLogo.m.scss';
import { colorify } from '../../helpers/Colorify.js';


const ABrillLogoSvg = React.forwardRef((_props, ref) => (
  <svg ref={ref} className={style.logo} viewBox="0 0 476 476" xmlns="http://www.w3.org/2000/svg">
    <path id="logo" d="M462,238c0,123.709-100.291,224-224,224S14,361.709,14,238,114.291,14,238,14,462,114.291,462,238ZM66.45,382.03a.06.06,0,0,0-.01.04M409.56,93.93a.06.06,0,0,1-.01.04m.01,288.1a.06.06,0,0,0-.01-.04m-32.67-58.91A138.88,138.88,0,1,1,238,184.24,138.882,138.882,0,0,1,376.88,323.12Zm-245.241,89.3a.036.036,0,0,0-.006.024M344.367,233.8a.036.036,0,0,1-.006.024m.006,178.622a.036.036,0,0,0-.006-.024M303.193,44.373l0,.016m0,109.478,0-.016M238,14a85.12,85.12,0,0,1,0,170.24"/>
  </svg>
));


export class ABrillLogo extends React.Component {

    constructor (props) {
        super(props);

        this.svg = React.createRef();
    }

    render () {
        return (<ABrillLogoSvg ref={this.svg}/>)
    }

    componentDidMount () {
        colorify(this.svg.current, {
            targetId: 'logo',
            gradientUseAs: 'stroke'
        });
    }

}
