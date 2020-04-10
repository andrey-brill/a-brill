
import { React } from '../../chunk-e.js';
import { ABrillLogo } from './ABrillLogo.jsx';

import style from './BusinessCard.m.scss';
import { Logotypes } from './Logotypes.jsx';


export class BusinessCard extends React.Component {

    constructor (props) {
        super(props);

        this.svg = React.createRef();
    }

    render () {
        return (
            <div className={style.container}>
                <div>
                    <ABrillLogo ref={this.svg}/>
                    <a className={style.email} href="mailto:andrey@a-brill.com">andrey@a-brill.com</a>
                </div>
                <div className={style.bottom}>
                    <Logotypes/>
                </div>
            </div>
        )
    }

}