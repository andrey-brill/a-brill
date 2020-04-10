
import React from 'react';
import ReactDom from 'react-dom';

import * as AResponsiveContainers from 'a-responsive-containers';
import * as AResponsiveReact from 'a-responsive-react';
import * as AFloatingColors from 'a-floating-colors';

const MODULES = {
    'react-dom': ReactDom,
    'react': React,
    'a-responsive-containers': AResponsiveContainers,
    'a-responsive-react': AResponsiveReact,
    'a-floating-colors': AFloatingColors
}

export { MODULES };