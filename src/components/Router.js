import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import LatestNews from './LatestNews';
import Testimonials from './Testimonials';
import AboutUs from './AboutUs';
import Login from './Login';
import Home from './Home';



class Router extends Component {
  render() {
    return (
      <div className="Router">
          <Switch> 
            <Route component={ Home } path="/" exact />                
            <Route component={ LatestNews } path="/LatestNews" />
            <Route component={ Testimonials } path="/Testimonials" />
            <Route component={ AboutUs } path="/AboutUs" /> 
            <Route component={ Login } path="/Login" />
          </Switch>     
            
      </div>
    );
  }z
}

export default Router;