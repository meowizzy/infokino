import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from '@containers/App';
import { ModalContextProvider } from "@contexts";
import store from '@store';
import '@styles/index.scss';

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
