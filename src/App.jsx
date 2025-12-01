import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Catalogo from './components/Catalogo';
import CarritoCompras from './components/CarritoCompras'
import Alta from './components/Alta';


function App() {

  return (
    <>
    <Header></Header>
    <Alta></Alta>
    <CarritoCompras></CarritoCompras>
    <Catalogo />
    <Footer></Footer>
    </>
  )
}

export default App
