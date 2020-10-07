
import { React } from '../../chunk-e.js';

import style from './Glasses.m.scss';


const GlassesSvg = React.forwardRef((props, ref) => (
    <svg className={props.className} ref={ref} xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 2380 800.109">
        <path id="frame" fill="#666666" d="M1114.1,115.1c-37.2-1.6-76.1-10.2-116.2-32.4C901.9,29.6,660,0,587.8,0,384.4,0,184.2,6.8,0,34.9L6.1,172.7c52.7,19.2,68.7,55.2,75.9,98.6,33.2,200,79.8,370,166.6,440,61.6,49.7,139,92.9,283.8,88.5,154.3-4.8,318.2-47.2,398.6-140,70.6-81.5,144.2-206.9,170.9-343.9,10-51.6,46.6-74.5,88.1-74.5s78.1,22.8,88.1,74.5c26.7,137,100.3,262.4,170.9,343.9,80.4,92.8,244.3,135.2,398.6,139.9,144.8,4.4,222.2-38.8,283.8-88.5,86.7-69.9,133.3-240,166.6-440,7.2-43.4,23.3-79.3,75.9-98.6L2380,34.8C2195.8,6.8,1995.6,0,1792.2,0,1720,0,1478,29.6,1382.1,82.7c-40.1,22.2-79,30.7-116.2,32.4-50.6,2.2-101.3,2.2-151.8,0ZM522,69.4c44.9-.1,90.4,1,133.5.4,37.2-.6,293.8-7.6,335.3,146.1,39.5,146.4-19.1,332.6-143.9,437.8-87,73.3-429.1,152.9-563.3-4.3-92-107.7-111.4-205.5-121.2-341-6.2-85.9,15.9-173.4,156.1-218,55.6-17.8,128.6-20.8,203.5-21Zm1179.2,0c10.7-.1,18.7.3,23.4.4,43,.6,88.5-.4,133.5-.4,74.9.1,147.9,3.2,203.6,20.9,140.2,44.6,162.3,132.1,156.1,218-9.8,135.5-29.3,233.3-121.2,341-134.2,157.2-476.4,77.6-563.3,4.3-124.8-105.2-183.4-291.4-143.9-437.8C1425.6,81.4,1626.6,69.8,1701.2,69.4Z"/>
        <path id="lines" fill="#e91e63" d="M159.8,126.6H65.1a5.015,5.015,0,0,1-5-5V106.8a5.015,5.015,0,0,1,5-5h94.7a5.015,5.015,0,0,1,5,5v14.8A5.015,5.015,0,0,1,159.8,126.6Zm2160.1-5V106.8a5.015,5.015,0,0,0-5-5h-94.7a5.015,5.015,0,0,0-5,5v14.8a5.015,5.015,0,0,0,5,5h94.7A5.015,5.015,0,0,0,2319.9,121.6Z"/>
    </svg>
));


export class Glasses extends React.Component {

    constructor (props) {
        super(props);

        this.svgTop = React.createRef();
        this.svgBottom = React.createRef();
    }

    render () {
        return (
            <div className={style.glasses}>
                <GlassesSvg className={style.top} ref={this.svgTop}/>
                <GlassesSvg className={style.bottom} ref={this.svgBottom}/>
            </div>
        )
    }

    componentDidMount () {

        const svgTop = this.svgTop.current;
        const svgBottom = this.svgBottom.current;

        const request = new XMLHttpRequest();

        function onLoad () {

            if (request.status !== 200) {
                return;
            }

            createPath(svgTop, request.responseText);
            createPath(svgBottom, request.responseText);
        }

        request.addEventListener("load", onLoad);
        request.open("GET", "/assets/glasses-path.str");
        request.send();
    }

}

function createPath(svg, pathData) {
    const path = document.createElementNS(svg.namespaceURI, 'path');
    path.setAttribute('fill', 'white');
    path.setAttribute('d', pathData);
    svg.appendChild(path);
}