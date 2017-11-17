import React from 'react';
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Miss } from 'react-router-dom'
import './css/style.css';

//components
import App from './components/App';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';

const Root = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={StorePicker}/>
        <Route path="/store/:storeId" component={App}/>
        <Miss component={NotFound} />
      </div>
    </Router>
  )
}

render(<Root/>, document.querySelector('#main'));