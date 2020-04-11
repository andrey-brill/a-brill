
import { React, AResponsiveReact } from '../../chunk-e.js';
import { Content } from '../Content.jsx';
import { ABrill } from './ABrill.jsx';
import { HEADER_HEIGHT, PROJECTS_ID } from '../../helpers/Constants.js';
import { scrollToElementId } from '../../helpers/Scroll.js';

import style from './Header.m.scss';


const ro = {
    lHeaderHeight: HEADER_HEIGHT,
    lABrillHeight: 3.2,
    lProjectsMargin: -6
};

const Header = () => (
    <AResponsiveReact.ResponsiveElement className={style.container} roCreator={ro}>
        <Content className={style.header}>
            <ABrill className={style.logo}/>
            <div className={style.projects} onClick={scrollToProjects}>
                Projects
            </div>
        </Content>
    </AResponsiveReact.ResponsiveElement>
);

function scrollToProjects () {
    scrollToElementId(PROJECTS_ID);
}

export { Header };