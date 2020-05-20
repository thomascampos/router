import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import  NavBar from './NavBar/NavBar';

const Home = () => <h1>Home Component Displayed</h1>
const About = () => <h2>The About Component now displayed for /about route</h2>

function App() {
  return (
    <Router>
      <NavBar />
    </Router>
  );
}

export default App;
