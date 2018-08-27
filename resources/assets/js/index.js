import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import'./responsive.css';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


