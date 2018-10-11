import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import'./responsive.css';
import store from './store'
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();


