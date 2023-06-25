import React, { useState } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
// import {
//   BrowserRouter as Router,
//   Route,
// } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './contents/Home';
import About from './contents/About';
import Skills from './contents/Skills';
import Projects from './contents/Projects';
import Contact from './contents/Contact';

const GlobalStyle = createGlobalStyle`
  body{
  background: linear-gradient(${props => props.theme.mode === 'dark' ? '#868f96, #596164' : '(#ff758c,#764ba2'});
  background-attachment: fixed;
  }

`

function App() {
  const [theme, setTheme] = useState({ mode: 'light' });
  const [menuVisible, setMenuVisible] = useState(true);

  const handleMenuClick = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <ThemeProvider theme={theme}>

      <GlobalStyle />
      <HashRouter>
        {/* <Router> */}
        <div className="App">
          <Navbar menuVisible={menuVisible} />
          <Route exact path="/">
            <Home menuVisible={menuVisible} />
          </Route>
          <Route path="/about">
            <About menuVisible={menuVisible} />
          </Route>
          <Route path="/skills">
            <Skills menuVisible={menuVisible} />
          </Route>
          <Route path="/projects">
            <Projects menuVisible={menuVisible} />
          </Route>
          <Route path="/contact">
            <Contact menuVisible={menuVisible} />
          </Route>
          <div class="back1 glass" onClick={e => setTheme(
            theme.mode === 'dark' ? { mode: 'light' } : { mode: 'dark' }
          )}><i class={theme.mode === 'dark' ? "fa fa-sun i1" : "fa fa-moon i1"}></i></div>
        </div>
        <div className="hamburger glass" onClick={handleMenuClick}><i class="fa-solid fa-bars i1"></i></div>
        {/* </Router> */}
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
