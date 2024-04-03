import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from '@store/store';
import { BrowserRouter } from 'react-router-dom';
import '@styles/index.scss';
import App from '@containers/App';
import "@services/firebase";
import { ModalContextProvider } from "@contexts";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Provider store={store}>
            <ModalContextProvider>
                <App />
            </ModalContextProvider>
        </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
