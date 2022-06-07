import React, { useEffect, useState } from 'react';

function ItemListContainer() {

  const [estilos, setEstilos] = useState([]);

  //. Usamos un useEffect para poder traer una promesa, un fetch o una API
  useEffect(() => {
    const promesaProducto = new Promise((res, rej) => {
      setTimeout(() => {
        res(
          {
            id: 0,
            estilo: 'English Bitter',
            precio: '$3.00',
            stock: 8,
            img_url:
              'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
          },
          {
            id: 1,
            estilo: 'Germand HeffeWeizen',
            precio: '$2.00',
            stock: 10,
            img_url:
              'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
          },
          {
            id: 2,
            estilo: 'Imperial Stout',
            precio: '$5.00',
            stock: 8,
            img_url:
              'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
          }
        );
      }, 2000);
    }, []);

    promesaProducto
      .then((resultado) => {
        setEstilos(resultado)
        console.log(resultado)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        console.log('Finalmente')
      })
    });
}
    
    export default ItemListContainer
