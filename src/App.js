import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import Introduction from './components/Introduction'; 
import About from './components/About';
import TimeLine from './components/TimeLine';

class App extends Component {
  render() {
    return (
    	      <div id="colorlib-page">
    	        <div id="container-wrap">
    	         	<Sidebar></Sidebar>
    					<div id="colorlib-main">
    						<Introduction></Introduction>
    						<About></About>
    						<TimeLine></TimeLine>
    	          	</div>
    	      	</div>
    	      </div>
    );
  }
}

export default App;
