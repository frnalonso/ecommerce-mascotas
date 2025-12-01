import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Catalogo from './components/Catalogo';


function App() {

  return (
    <>
    <Header></Header>
    <Catalogo />
    <Footer></Footer>
    </>
  )
}

export default App
