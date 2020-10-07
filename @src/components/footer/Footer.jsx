
import { React } from '../../chunk-e.js';

import style from './Footer.m.scss';


export const Footer = () => (
    <div className={style.footer}>
        <span>Copyright © { new Date().getFullYear() } ABrill. All rights reserved.</span>
    </div>
)