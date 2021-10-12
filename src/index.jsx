import * as React from 'react';
import * as ReactDom from 'react-dom';
import { AppComponent } from './App';

window.addEventListener('load', () => {
    ReactDom.render(<AppComponent />, document.getElementById('react-root'));
})
