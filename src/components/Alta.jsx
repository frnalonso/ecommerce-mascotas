import { useEffect, useState } from "react";
import productos from "../assets/productos.json"
import MensajeError from "./MensajeError";

const Alta = () => {

    const [items, setItems] = useState(productos)
    const [nombre, setNombre] = useState("")
    const [stock, setStock] = useState("")
    const [categoria, setCategoria] = useState("")
    const [detalles, setDetalles] = useState("")
    const [precio, setPrecio] = useState("")
    const [envio, setEnvio] = useState(false)
    const [foto, setFoto] = useState("")
    const [disabled, setDisabled] = useState(true)

useEffect(() => {
    if ((nombre != "") && (precio != "") && (stock != "") && (categoria != "") && (detalles != "") && (foto != "")) {
        setDisabled(false)
    } else {
        setDisabled(true)
    }
})
    

const guardarProducto = () => {
    const producto = {id:obtenerId(), nombre, precio, stock, categoria, detalles, foto, envio}
    setItems([...items, producto])
    vaciarFormulario();
}

const obtenerId = () => {
    let max = 0;

    items.forEach(item => {
        max = item.id
    })

    return max + 1;
}

const vaciarFormulario = () => {
    setNombre("");
    setPrecio("");
    setStock("");
    setCategoria("");
    setDetalles("");
    setFoto("");
    setEnvio("");
}


    return (
        <>

<div className="container">
    <div className="row">
        <div className="col-md-6 offset-md-3">
<form>
  <div className="mb-3">
    <label className="form-label">Nombre</label>
    <input type="text" className="form-control" id="nombre" value={nombre} onInput={(e) => {setNombre(e.target.value)}} />
  </div>
  <div className="mb-3">
    <label className="form-label">Precio</label>
    <input type="number" className="form-control" id="precio" value={precio} onInput={(e) => {setPrecio(e.target.value)}} />
  </div>
  <div className="mb-3">
    <label className="form-label">Stock</label>
    <input type="number" className="form-control" id="stock" value={stock} onInput={(e) => {setStock(e.target.value)}} />
  </div>
  <div className="mb-3">
    <label  className="form-label">Categoria</label>
    <input type="categoria" className="form-control" id="categoria" value={categoria} onInput={(e) => {setCategoria(e.target.value)}}  />
  </div>
  <div className="mb-3">
    <label  className="form-label">Detalles</label>
    <input type="text" className="form-control" id="detalles" value={detalles} onInput={(e) => {setDetalles(e.target.value)}}  />
  </div>
    <div className="mb-3">
    <label  className="form-label">Foto</label>
    <input type="text" className="form-control" id="foto" value={foto} onInput={(e) => {setFoto(e.target.value)}} />
  </div>
  <div className="mb-3">
    <label  className="form-label">Envío </label>
    <input type="checkbox" className="form-check-input" id="envio" value={envio} disabled={disabled}  checked={envio ? "checked": ""} onChange={(e) => {setEnvio(e.target.checked)}} />
  </div>
  <button type="button" onClick={guardarProducto} className="btn btn-primary">Enviar</button>
</form>

        </div>

    </div>

</div>

{items.length > 0 ? 

        <div className="container">
            <div className="row">
                <div className="col">

        <table className="table">
            <thead>
                <tr>
                    <th className="text-center" scope="col">Nombre</th>
                    <th className="text-center" scope="col">Categoria</th>
                    <th className="text-center" scope="col">Detalles</th>
                    <th className="text-center" scope="col">Foto</th>
                    <th className="text-center" scope="col">Precio</th>
                    <th className="text-center" scope="col">Envio</th>
                </tr>
                </thead>
                <tbody>
                    {
                        items.map((producto, index) => 
                            <tr key={index}>
                        <td className="align-middle text-center">{producto.nombre}</td>
                        <td className="align-middle text-center">{producto.categoria}</td>
                        <td className="align-middle text-center">{producto.detalles}</td>
                        <td className="align-middle text-center"><img width="100px" src={producto.foto} /></td>
                        <td className="align-middle text-center">{producto.precio}€</td>
                        <td className="align-middle text-center">{producto.envio ? "Si": "No"}</td>
                    </tr>
      
                    )}
                </tbody>
        </table>
                </div>
            </div>
        </div> : <MensajeError mensaje={"No hay productos disponibles. Agregar un producto para visualizar"} />} 

        
        </>
    )

}

export default Alta;

