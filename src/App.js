 
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/projects" component={Projects}/>
             <Route path="/contact" component={Contact}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;
