import './App.css';
import Header from './components/Header';
// import  { BrowserRouter ,Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Cart from './components/Cart';
import Profile from './components/Profile';
import Login from './components/Login';
import { useState } from 'react';
import Theme from './context/Theme';
import Button from './components/jest/Button';



function App() {

    // const [show, setShow] = useState(true)


  return (
    <Theme>
      <h1>
        Context and Jest
      </h1>
      <Home />
      <Button label={"click"}>
      </Button>
    </Theme>
  );
}

export default App;
