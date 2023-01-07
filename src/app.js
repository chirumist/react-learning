import React from 'react';
import ReactDOM from 'react-dom/client';

import { HeaderComponent } from './components/partials/HeaderComponent'
import { FooterComponent } from './components/partials/FooterComponent'
import { MainComponent } from './components/MainComponent'

const App = () => {
    return (
        <>
            <HeaderComponent></HeaderComponent>
            <MainComponent></MainComponent>
            <FooterComponent></FooterComponent>
        </>
    )
}

ReactDOM.createRoot(document.querySelector('#app')).render(<App />)
