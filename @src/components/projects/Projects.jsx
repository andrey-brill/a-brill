
import { React } from '../../chunk-e.js';
import { ProjectItems } from './ProjectItems.jsx';
import { Content } from '../Content.jsx';
import { ProjectLogoSvg } from './ProjectLogotypes.jsx';
import { PROJECTS_ID } from '../../helpers/Constants.js';

import style from './Projects.m.scss';


const ProjectItem = ({ project }) => (
  <a className={style.project} href={project.url} target="_blank">
    <div className={style.logo} >
      <div><ProjectLogoSvg projectKey={project.key}/></div>
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

export const Projects = () => (
  <div id={PROJECTS_ID} className={style.projects}>
    <Content>
      <div className={style.title}>Projects</div>
      { ProjectItems.map( (project) => (<ProjectItem key={project.key} project={project} />)) }
    </Content>
  </div>
);
