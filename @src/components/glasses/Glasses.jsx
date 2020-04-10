

/*

xhr = new XMLHttpRequest();
xhr.open("GET","my.svg",false);
// Following line is just to be on the safe side;
// not needed if your server delivers SVG with correct MIME type
xhr.overrideMimeType("image/svg+xml");
xhr.send("");
document.getElementById("svgContainer")
  .appendChild(xhr.responseXML.documentElement);

*/

import { React } from '../../chunk-e.js';

import style from './Glasses.m.scss';


export class Glasses extends React.Component {

    render () {
        return (
            <div className={style.glasses}>
            </div>
        )
    }

}