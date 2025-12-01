import productos from "../assets/productos.json"
import { useState } from "react";
import Card from "./Card";

const Catalogo = () => {

    const [items, setItems] = useState(productos) 
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