import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Catalogo from './components/Catalogo';
import CarritoCompras from './components/CarritoCompras'


function App() {

  return (
    <>
    <Header></Header>
    <CarritoCompras></CarritoCompras>
    <Catalogo />
    <Footer></Footer>
    </>
  )
}

export default App
