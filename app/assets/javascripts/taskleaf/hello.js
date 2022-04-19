import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListner('DOMContentLoaded', () => {
    ReactDOM.render(
        React.createElement('div', null, 'Hello World!'),
        document.body.appendChild(document.createElement('div')),
    );
});