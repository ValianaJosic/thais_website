 
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './pages/Home/Home';
import About from './pages/About';
import Contact from './pages/Contact/Contact';
import Navigation from './components/Nav/Nav';
import Properties from './pages/Properties';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/about" component={About}/>
             <Route path="/contact" component={Contact}/>
             <Route path="/properties" component={Properties}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;
