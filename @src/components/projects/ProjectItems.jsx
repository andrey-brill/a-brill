
import { React } from '../../chunk-e.js';
import { VisionLogo, FloatingColorsLogo, GalleryLogo, TiarLogo, PhotographyLogo, KeyboardTrainerLogo } from './ProjectLogotypes.jsx';


export const ProjectItems = [

    {
        title: 'Tiar',
        description: 'Training in any reality',
        logo: <TiarLogo/>,
        solution: true
    },
    {
        title: 'Floating colors',
        description: 'Adding SMIL animation to SVG',
        logo: <FloatingColorsLogo/>,
        url: 'https://github.com/andrey-brill/a-floating-colors',
        solution: true
    },
    {
        title: 'Keyboard Trainer',
        description: 'Typing with closed eyes',
        logo: <KeyboardTrainerLogo/>,
        solution: true
    },

    {
        title: 'Photography',
        description: "Journey through my memories",
        logo: <PhotographyLogo/>,
        solution: false
    },
    {
        title: 'Vision',
        description: 'World through me',
        logo: <VisionLogo/>,
        solution: false
    },
    {
        title: 'Gallery',
        description: 'Gallery of inspirational art',
        logo: <GalleryLogo/>,
        solution: false
    }
];
