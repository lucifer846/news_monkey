import { useState } from 'react'; 
import './App.css';  
import Navbar from './components/Navbar';  
import React, { Component } from 'react';  
import News from './components/News';  
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<News key="general" pageSize={5} category="general" />} />
          <Route path="/business" element={<News key="business" pageSize={5} category="business" />} />
          <Route path="/entertainment" element={<News key="entertainment" pageSize={5} category="entertainment" />} />
          <Route path="/general" element={<News key="general" pageSize={5} category="general" />} />
          <Route path="/health" element={<News key="health" pageSize={5} category="health" />} />
          <Route path="/science" element={<News key="science" pageSize={5} category="science" />} />
          <Route path="/sports" element={<News key="sports" pageSize={5} category="sports" />} />
          <Route path="/technology" element={<News key="technology" pageSize={5} category="technology" />} />
        </Routes>
      </Router>
      </div>
    );
  }
}