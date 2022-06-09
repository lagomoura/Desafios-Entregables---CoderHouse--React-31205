import React, { useEffect, useState } from 'react';
import Item2 from '../componentes/Item2.jsx';

const ItemList2 = ({estiloListado, cartItemsCantidad, setCartItemsCantidad}) => {

    return(
        <>
        {
                estiloListado.map(estilo => (
                    <Item2
                    key={estilo.id}
                    estilo={estilo.estilo}
                    imagen={estilo.url}
                    info={estilo.tagline}
                    disponibilidad={estilo.stock}
                    cartItemsCantidad={cartItemsCantidad}
                    setCartItemsCantidad={setCartItemsCantidad}/>  
                ))
        }
        </>
   )
}

export default ItemList2;