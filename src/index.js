import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';

import App from './App.jsx';
import store from './redux/store'

ReactDOM.render(
    <Provider store={ store } >
        <App />
    </Provider>,
    document.querySelector( '#root' )
);