import React from 'react';
import { useState, useEffect } from 'react';
import Toastify from 'toastify-js';
import ItemList2 from '../componentes/ItemList2.jsx';


const ItemListContainer2 = ({ cartItemsCantidad, setCartItemsCantidad }) => {
  const [estiloListado, setEstiloListado] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);

  const estilosArray = [
    {
"id": 1,
    "estilo": "English Bitter",
    "precio": "$3.00",
    "stock": 8,
    "tagline": "A Real Bitter Experience.",
    "url": "https://img.freepik.com/foto-gratis/composicion-deliciosa-cerveza-americana_23-2148907622.jpg?size=338&ext=jpg&ga=GA1.2.1123120206.1650681808",
    },
    {
        id: 2,
        estilo: "Imperial Pilsner",
        precio: "$2.00",
        stock: 10,
        tagline: "Bloggers' Imperial Pilsner.",
        url: "https://img.freepik.com/foto-gratis/close-up-cerveza-plato-sandwich-papas-fritas_176474-2426.jpg?size=338&ext=jpg&ga=GA1.2.1123120206.1650681808"
      },
      {
        id: 3,
        estilo: "Back IPA",
        precio: "$5.00",
        stock: 8,
        tagline: "Seasonal Black IPA.",
        url: "https://img.freepik.com/foto-gratis/arreglo-sabrosa-cerveza-americana_23-2148907583.jpg?size=338&ext=jpg&ga=GA1.2.1123120206.1650681808 "
      },
      {
        id: 4,
        estilo: "European Pale Lager",
        precio: "$5.00",
        stock: 8,
        tagline: "Unleash the Yeast Series.",
        url: "https://img.freepik.com/foto-gratis/vaso-oso-bistec-tomates_23-2148754943.jpg?size=338&ext=jpg&ga=GA1.2.1123120206.1650681808 "
      }
  ];

  useEffect(() => {
    const estilosPromise = new Promise((resolve, reject) => {
      setLoading(true);
      setTimeout(() => {
        resolve(estilosArray);
      }, 2000);
    });

    estilosPromise
      .then((resultado) => setEstiloListado(resultado))
      .catch((error) => {
        setAlert(true);
        console.log((err) => console.log('Error', error));
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
    <div className="col-6">
        {
          loading ? (
                <div className='w-50'>
                    <span className='me-4'>Cargando nuestro stock</span>
                    <div className='spinner-grow bg-gradient shadow-lg '
                    role='status'></div>
                </div>
          ) : alert ? (
            Toastify({
                text: "Error",
                duration: 3000,
                style: {
                background: "linear-gradient(to right, #ffbd52, #fc9d39)"
                }
                }).showToast())
            :
            (
            <div>
                <ItemList2
                    estiloListado={estiloListado}
                    cartItemsCantidad={cartItemsCantidad}
                    setCartItemsCantidad={setCartItemsCantidad}/>
            </div>
            )
        }
    </div>
    </>
);
};

export default ItemListContainer2;
