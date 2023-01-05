import React from 'react';
import ReactDOM from 'react-dom/client';


const heading1 = React.createElement("h1", {}, "Hello World H1!")
const heading2 = React.createElement("h2", {}, "Hello World H1!")
const container = React.createElement("div", {}, [heading1, heading2])

ReactDOM.createRoot(document.querySelector('#app')).render(container)
