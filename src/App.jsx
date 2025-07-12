import { useState } from 'react'
import './App.css';
import Topheader from './components/Topheader.jsx';
import Menu from "./components/Menu.jsx";
import Header from './components/Header.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Topheader/>
      <Menu/>
      <Header/>
      
    </>
  )
}

export default App
