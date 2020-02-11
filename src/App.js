 
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navigation from './components/Navigation';
import Properties from './pages/Properties';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/projects" component={About}/>
             <Route path="/contact" component={Contact}/>
             <Route path="/contact" component={Properties}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;
