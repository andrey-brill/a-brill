
import { React, AResponsiveReact } from '../../chunk-e.js';
import { ProjectItems } from './ProjectItems.jsx';
import { Content } from '../Content.jsx';
import { PROJECTS_ID, HEADER_HEIGHT } from '../../helpers/Constants.js';

import style from './Projects.m.scss';


function projectClassName ({ solution, url }) {
    const classNames = [ style.project ];
    classNames.push((solution ? style.solution: style.vision));
    if (url) {
        classNames.push(style.active);
    }
    return classNames.join(' ');
}


const ProjectItem = ({ project }) => (
  <a className={projectClassName(project)} href={project.url} target="_blank">
    <div className={style.logo} >
      <div>{project.logo}</div>
    </div>
    <div className={style.details}>
      <div>{project.title}</div>
      <div>{project.description}</div>
    </div>
    <div className={style.arrow}>
      <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.6,15.4l9.2,9.2l-9.2,9.2l2.8,2.8l12-12l-12-12L16.6,15.4z"/>
      </svg>
    </div>
  </a>
);

const ro = {
    lLogotypeSize: HEADER_HEIGHT,
};

export const Projects = () => (
  <AResponsiveReact.ResponsiveElement id={PROJECTS_ID} className={style.projects} roCreator={ro}>
    <Content>
      <div className={style.title}>Projects</div>
      { ProjectItems.map( (project, key) => (<ProjectItem key={key} project={project} />)) }
    </Content>
  </AResponsiveReact.ResponsiveElement>
);
