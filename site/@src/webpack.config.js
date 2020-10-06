
const { spa } = require('a-webpack-configs');


const header = `
    <link rel="shortcut icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">

    <link href="https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;600&family=Montserrat:wght@300&display=swap" rel="stylesheet">
`;

module.exports = (env) => spa(env, {

    entryPath: './site/@src/site.jsx',
    productionPath: './docs',
    developmentPath: './site/spa',

    title: 'A.Brill',
    header,

    scripts: [
        /modules/
    ],

    plugins: {
        scss: true,
        babel: true,
        react: true,
        copy: true
    }
});

