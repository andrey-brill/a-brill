
import { AResponsiveReact, AResponsiveContainers, ReactDom, React } from '../chunk-e.js';
import { toggleBodyClass } from '../helpers/Utils.js';
import { Me } from './me/Me.jsx';
import { Glasses } from './glasses/Glasses.jsx';
import { Projects } from './projects/Projects.jsx';
import { Footer } from './footer/Footer.jsx';

import './App.scss';


AResponsiveContainers.initializeWebContext();

const onParent = (parentContainer, container) => parentContainer.register({
    width: '100uw',
    height: '100uh',
    onResize: (ro) => {
        const responsiveColumn = AResponsiveContainers.toResponsiveColumn(ro.width, ro.height);
        container.resize(responsiveColumn.width, responsiveColumn.height);
        toggleBodyClass('mobile', responsiveColumn.numberOfColumns <= 1);
        toggleBodyClass('desktop', responsiveColumn.numberOfColumns > 1);
    }
})


const { ResponsiveElement, ResponsiveContainer } = AResponsiveReact;

const App = () => (
    <ResponsiveContainer top={true} listenResizeOf={document.body} roCreator={AResponsiveContainers.commonProperties(AResponsiveContainers.WindowPrefix)}>
        <ResponsiveContainer onParent={onParent}>
            <ResponsiveElement id="app" roCreator={AResponsiveContainers.commonProperties()}>
                <Me/>
                <Glasses/>
                <Projects/>
                <Footer/>
            </ResponsiveElement>
        </ResponsiveContainer>
    </ResponsiveContainer>
);

export function renderApp (id = 'root') {
    ReactDom.render(<App/>, document.getElementById(id));
}
