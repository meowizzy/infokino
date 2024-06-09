import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from '@containers/App';
import { ModalContextProvider } from "@contexts";
import store from '@store';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '@styles/index.scss';
import { toastifyConfig } from "./app/config/toastify";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <ModalContextProvider>
                <App />
                <ToastContainer
                    {...toastifyConfig}
                />
            </ModalContextProvider>
        </Provider>
    </BrowserRouter>
);
