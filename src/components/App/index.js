/**
 * NPM import
 */
import React from 'react';
import {Container,Row,Col, Badge} from 'react-bootstrap';
/**
 * Local import
 */
import './app.scss';
import Display from '../DisplayCard';
import Appbar from '../AppBar';
import Footer from '../Footer';
/**
 * Code
 */
const App = () => (
  <div id="app">
    <Appbar/>
    <Display />
    <Footer />
  </div>  
        
);

/**
 * Export
 */
export default App;
