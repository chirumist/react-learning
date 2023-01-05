import React from 'react';
import ReactDOM from 'react-dom/client';

const cE = React.createElement
const heading1 = cE("h1", {}, "Hello World H1!")
const heading2 = cE("h2", {}, "Hello World H1!")
const container = cE("div", {key: 1}, [heading1,heading2])

ReactDOM.createRoot(document.querySelector('#app')).render(container)
