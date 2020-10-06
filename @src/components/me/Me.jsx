
import { React } from '../../chunk-e.js';
import { ABrillLogo } from './ABrillLogo.jsx';

import style from './Me.m.scss';


export const Me = () => (
    <div className={style.container}>

        <div>

            <ABrillLogo/>

            <div className={style.name}>
                Andrey Brill
            </div>

        </div>

        <div className={style.menu}>
                <div>Enjoy my <a href="#projects">Projects</a></div>
                <div>or <a href="#contacts">Contact</a> me!</div>
        </div>

    </div>
);


// <a className={style.email} href="mailto:andrey@a-brill.com">andrey@a-brill.com</a>
