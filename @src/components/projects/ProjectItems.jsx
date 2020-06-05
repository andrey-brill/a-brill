
import { React } from '../../chunk-e.js';
import { VisionLogo, FloatingColorsLogo, GalleryLogo, TiarLogo, PhotographyLogo, ATeacher, APianoLogo } from './ProjectLogotypes.jsx';


export const ProjectItems = [

    {
        title: 'Tiar',
        description: 'Coming soon...',
        logo: <TiarLogo/>
    },
    {
        title: 'A.Piano',
        description: 'A beautiful piano (HQ, HiRez)',
        logo: <APianoLogo/>,
        url: 'https://andrey-brill.github.io/a-piano'
    },
    {
        title: 'A.Teacher',
        description: 'Listen. Type. Learn.',
        logo: <ATeacher/>,
        url: 'https://andrey-brill.github.io/a-teacher'
    },
    {
        title: 'Floating colors',
        description: 'Adding SMIL animation to SVG',
        logo: <FloatingColorsLogo/>,
        url: 'https://github.com/andrey-brill/a-floating-colors'
    }

    // {
    //     title: 'Photography',
    //     description: 'Coming soon...', // "Journey through my memories",
    //     logo: <PhotographyLogo/>,
    //     solution: false
    // },
    // {
    //     title: 'Vision',
    //     description: 'Coming soon...', // 'World through me',
    //     logo: <VisionLogo/>,
    //     solution: false
    // },
    // {
    //     title: 'Gallery',
    //     description: 'Gallery of inspirational art',
    //     logo: <GalleryLogo/>,
    //     solution: false
    // }
];
