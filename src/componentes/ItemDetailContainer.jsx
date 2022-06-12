import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail.jsx';

function ItemDetailContainer({onAdd, sumarCarrito}) {

	const [detalleProducto, setDetalleProducto] = useState();

    const productoElegido = detalleProducto?.filter((producto) => producto.id === 4);

	useEffect(() => {

        const tomarDetalleProductos = () => {
            fetch("./productos.json")
            .then((resultado) => resultado.json())
            .then((data) => {
                setDetalleProducto(data)
        })
            .catch((error) => console.log('Error', error));
    };       
        setTimeout(() => {
            tomarDetalleProductos();
		}, 2000);
    }, []);

	return (
		<>
			<div className='d-flex justify-content-center align-items-center'>
				<ItemDetail detalleProducto={productoElegido} onAdd={onAdd} agregarCantidad={sumarCarrito}/>
			</div>
		</>
	);
}
export default ItemDetailContainer;
