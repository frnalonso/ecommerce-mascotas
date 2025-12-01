import productos from "../assets/productos.json"
import { useState } from "react";
import Card from "./Card";
import MensajeError from "./MensajeError";

const Catalogo = () => {

    const [items, setItems] = useState(productos) 

    
        if (items.length == 0) {
            return <MensajeError mensaje={"No hay productos disponibles"} />
        }
    

   

    return (
        <>
        <div className="container">
            <div className="row">
            {
                items.map( item => ( 

                   <Card key={item.id} item={item} ></Card>
                
                ))
                
            }

            </div>
        </div>
    
     
        </>
    )
}

export default Catalogo;