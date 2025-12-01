import { useEffect, useState } from "react";
import productos from "../assets/productos.json"
import MensajeError from "./MensajeError";

const CarritoCompras = () => {

    const [carrito, setCarrito] = useState([])

    const producto1 = productos.find(item => item.id == 1)
    const producto2 = productos.find(item => item.id == 5)

    useEffect(() => {
        setCarrito([producto1, producto2])
    }, [])

  
    
        if (carrito.length == 0) {
            return ( <MensajeError mensaje={"Carrito vacío"} />)
        }
    




    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col">

        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Marca</th>
                    <th scope="col">Foto del producto</th>
                    <th scope="col">Precio unitaio</th>
                    <th scope="col">Cantidad</th>
                </tr>
                </thead>
                <tbody>
                    {
                        carrito.map((producto, index) => 
                            <tr key={index}>
                        <td className="align-middle">{producto.nombre}</td>
                        <td className="align-middle">{producto.categoria}</td>
                        <td className="align-middle"><img width="100px" src={producto.foto} /></td>
                        <td className="align-middle">{producto.precio}€</td>
                        <td className="align-middle">1</td>
                    </tr>
      
                    )}
                </tbody>
        </table>
                </div>
            </div>
        </div>
        </>
    )

}

export default CarritoCompras;