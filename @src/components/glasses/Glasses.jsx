

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