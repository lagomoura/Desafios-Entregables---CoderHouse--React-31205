import React from 'react';
import Item from './Item.jsx';

function ItemList({estilos, onAdd, sumarCarrito}){

    return(
        <div className=" d-flex flex-wrap">
        {estilos?.map((estilo)=>{

                return <Item 
                id={estilo.id} 
                estilo={estilo.estilo}
                tagline={estilo.tagline}
                imagen={estilo.url} 
                key={estilo.id} 
                onAdd={onAdd}
                stock={estilo.stock}
                initial={1}
                max={estilo.stock}
                agregarCantidad={sumarCarrito} />

            })}
        </div>
    )
}

export default ItemList