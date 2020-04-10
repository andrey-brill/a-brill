
import './App.scss';
import { AResponsiveReact, AResponsiveContainers, ReactDom, React } from '../chunk-e.js';
import { Header } from './header/Header.jsx';


const { ResponsiveWindow, ResponsiveElement, ResponsiveContainer } = AResponsiveReact;

const container = {
    rcResize: AResponsiveContainers.rcResize
 }

const App = () => (
    <ResponsiveWindow>
        <ResponsiveContainer container={container}>
            <ResponsiveElement id="app" roCreator={AResponsiveContainers.commonProperties()}>
                <Header/>
            </ResponsiveElement>
        </ResponsiveContainer>
    </ResponsiveWindow>
);

export function renderApp (id = 'root') {
    ReactDom.render(<App/>, document.getElementById(id));
}