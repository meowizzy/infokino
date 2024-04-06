import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from '@store/store';
import { BrowserRouter } from 'react-router-dom';
import App from '@containers/App';
import '@styles/index.scss';

import { ModalContextProvider } from "@contexts";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <ModalContextProvider>
                <App />
            </ModalContextProvider>
        </Provider>
    </BrowserRouter>
);
