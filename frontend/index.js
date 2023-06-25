import React from 'react';
import { createRoot } from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import  ReduxStore from './Redux/ReduxStore.js';
import App from './App.js';


const GlobalStyle = createGlobalStyle`
  :root {
    --primaryColor: #EEE2DE;
    --secondaryColor:#EA906C;
    --ternaryColor: #B31312;
    --fourthColor: #2B2A4C;
  }
`;

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Provider store={ReduxStore}>
        <React.StrictMode >
            <GlobalStyle/>
            <App />
        </React.StrictMode>
    </Provider>
);




