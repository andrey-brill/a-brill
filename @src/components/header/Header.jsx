
import { React, AResponsiveReact } from '../../chunk-e.js';
import { Content } from '../Content.jsx';
import { ABrill } from './ABrill.jsx';
import style from './Header.m.scss';


const ro = {
    lHeaderHeight: '13R',
    lABrillHeight: 3.2
};

const Header = () => (
    <AResponsiveReact.ResponsiveElement className={style.container} roCreator={ro}>
        <Content className={style.header}>
            <ABrill className={style.logo}/>
            <div className={style.projects}>
                Projects
            </div>
        </Content>
    </AResponsiveReact.ResponsiveElement>
);

export { Header };