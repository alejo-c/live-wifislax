import React from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './index.css';
import App from './App';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

render(<App />, document.getElementById('root'))
serviceWorker.unregister();
