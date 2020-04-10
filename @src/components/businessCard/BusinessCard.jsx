
import { React } from '../../chunk-e.js';
import { ABrillLogo } from './ABrillLogo.jsx';

import style from './BusinessCard.m.scss';
import { Logotypes } from './Logotypes.jsx';


export const BusinessCard = () => (
    <div className={style.container}>
        <div>
            <ABrillLogo/>
            <a className={style.email} href="mailto:andrey@a-brill.com">andrey@a-brill.com</a>
        </div>
        <div className={style.bottom}>
            <Logotypes/>
        </div>
    </div>
);