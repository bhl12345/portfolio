import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import Home from './components/Home'; 
import About from './components/About';
import TimeLine from './components/TimeLine';

class App extends Component {
  render() {
    return (
    	      <div id="colorlib-page">
    	        <div id="container-wrap">
    	         	<Sidebar></Sidebar>
    					<div id="colorlib-main">
    						<Home></Home>
    						<About></About>
    						<TimeLine></TimeLine>
    	          	</div>
    	      	</div>
    	      </div>
    );
  }
}

export default App;
