import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

//Style Sheets
import './css/style.css';

// Components
import App from './components/App';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';

const repo = `/${window.location.pathname.split('/')['1']}`

//Router
const Root = () => (
  <BrowserRouter basename="/shiny-fishy/">
    <Switch>
        <Route path="/" exact component={StorePicker} />
        <Route path="/store/:storeId" component={App} />
        <Route component={NotFound}/>
    </Switch>
  </BrowserRouter>
)

render(<Root />, document.querySelector('#main'));
