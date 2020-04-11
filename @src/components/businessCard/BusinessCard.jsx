
import { React } from '../../chunk-e.js';
import { ABrillLogo } from './ABrillLogo.jsx';

import style from './BusinessCard.m.scss';
import { SocialLogotypes } from './SocialLogotypes.jsx';


export const BusinessCard = () => (
    <div className={style.container}>
        <div>
            <ABrillLogo/>
            <a className={style.email} href="mailto:andrey@a-brill.com">andrey@a-brill.com</a>
        </div>
        <div className={style.bottom}>
            <SocialLogotypes/>
        </div>
    </div>
);