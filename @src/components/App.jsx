
import './App.scss';
import { AResponsiveReact, AResponsiveContainers, ReactDom, React } from '../chunk-e.js';


const { ResponsiveWindow, ResponsiveElement, ResponsiveContainer } = AResponsiveReact;

const container = {
    rcResize: AResponsiveContainers.rcResize
 }

//const ro = {
//    gMenuHeight: '13R'
//};

const App = () => (
    <ResponsiveWindow>
        <ResponsiveContainer container={container}>
            <ResponsiveElement id="app" roCreator={AResponsiveContainers.commonProperties()}>

            </ResponsiveElement>
        </ResponsiveContainer>
    </ResponsiveWindow>
);



export function renderApp (id = 'root') {
    ReactDom.render(<App/>, document.getElementById(id));
}