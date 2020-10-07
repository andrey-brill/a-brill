
import { React } from '../../chunk-e.js';
import { CONTACTS_ID, PROJECTS_ID } from '../../helpers/Constants.js';
import { scrollToElementId } from '../../helpers/Scroll.js';
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
            <div>Enjoy my <a href={'#' + PROJECTS_ID} onClick={onLinkClick}>Projects</a></div>
            <div>or <a href={'#' + CONTACTS_ID} onClick={onLinkClick}>Contact</a> me!</div>
        </div>

    </div>
);


function onLinkClick (e) {
    e.preventDefault();
    scrollToElementId('root', e.target.getAttribute('href').replace('#', ''));
}

