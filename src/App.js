import React, { Component } from 'react';
import Header from './componets/Header/Header';
import BlogHome from "./componets/blog/BlogHome"
// import Dashboard from  "./componets/dashboard/dasboard"
// import PrimarySearchAppBar from './componets/Header/test'
// import Description from './componets/Home/Description'
// import './resources/styles.css';

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* <Dashboard/> */}
        <BlogHome/>
      </div>
    );
  }
}

export default App;
