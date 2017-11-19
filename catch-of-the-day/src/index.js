import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'

//Style Sheets
import './css/style.css';

// Components
import App from './components/App';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';


//Router
const Root = () => (
  <BrowserRouter>
    <div>
        <Route path="/" exact component={StorePicker} />
        <Route path="/store/:storeId" component={App} />
        <Route component={NotFound}/>
    </div>
  </BrowserRouter>
)

render(<Root />, document.querySelector('#main'));
