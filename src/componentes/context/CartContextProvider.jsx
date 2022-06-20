import { createContext } from 'react';
import { useState } from 'react';

export const CartContext = createContext({});

function CartContextProvider({ children }) {
    
	const estilosArray = [
		{
			id: '1',
			nombre: 'Royal Alberto Dock',
			estilo: 'English Bitter',
			precio: 3,
			stock: 8,
			categoria: 'ale',
			tagline: 'A Real Bitter Experience.',
			url: 'https://img.freepik.com/foto-gratis/composicion-deliciosa-cerveza-americana_23-2148907622.jpg?size=338&ext=jpg&ga=GA1.2.1123120206.1650681808',
			descripcion:
				'A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.',
			descripcionComplemento:
				'The earthy and floral aromas from the hops can be overpowering. Drop a little Cascade in at the end of the boil to lift the profile with a bit of citrus.',
			abv: 4.5,
			ibu: 60,
		},
		{
			id: '2',
			nombre: 'Vovo Edna',
			estilo: 'Imperial Pilsner',
			prec: 2,
			stock: 10,
			categoria: 'lager',
			tagline: "Bloggers' Imperial Pilsner.",
			url: 'https://img.freepik.com/foto-gratis/close-up-cerveza-plato-sandwich-papas-fritas_176474-2426.jpg?size=338&ext=jpg&ga=GA1.2.1123120206.1650681808',
			descripcion:
				'An Imperial Pilsner in collaboration with beer writers. Tradition. Homage. Revolution.',
			descripcionComplemento:
				'We wanted to showcase the awesome backbone of the Czech brewing tradition, the noble Saaz hop, and also tip our hats to the modern beers that rock our world, and the people who make them.',
			abv: 7.2,
			ibu: 59,
		},

		{
			id: '3',
			nombre: 'Not So Dark',
			estilo: 'Black IPA',
			precio: 5,
			stock: 9,
			categoria: 'ale',
			tagline: 'Seasonal Black IPA.',
			url: 'https://img.freepik.com/foto-gratis/arreglo-sabrosa-cerveza-americana_23-2148907583.jpg?size=338&ext=jpg&ga=GA1.2.1123120206.1650681808',
			descripcion:
				'Running the knife-edge between an India Pale Ale and a Stout, this particular style is one we truly love.',
			descripcionComplemento:
				'Black IPAs are a great showcase for the skill of our brew team, balancing so many complex and twisting flavours in the same moment. The citrus, mango and pine from the hops – three of our all-time favourites – play off against the roasty dryness from the malt bill at each and every turn.',
			abv: 5.3,
			ibu: 60,
		},
		{
			id: '4',
			nombre: 'Pale Lager',
			estilo: 'European Pale Lager',
			precio: 5,
			stock: 13,
			categoria: 'lager',
			tagline: 'Unleash the Yeast Series.',
			url: 'https://img.freepik.com/foto-gratis/vaso-oso-bistec-tomates_23-2148754943.jpg?size=338&ext=jpg&ga=GA1.2.1123120206.1650681808',
			descripcion:
				'Our Unleash the Yeast series was an epic experiment into the differences in aroma and flavour.',
			descripcionComplemento:
				'provided by switching up your yeast. We brewed up a wort with a light caramel note and some toasty biscuit flavour, and hopped it with Amarillo and Centennial for a citrusy bitterness. Everything else is down to the yeast. Pilsner yeast ferments with no fruity esters or spicy phenols, although it can add a hint of butterscotch.',
			abv: 7.2,
			ibu: 55,
		},
	];


    const [estilos, setEstilos] = useState(estilosArray);
    const [cartItem, setCartItem] = useState([]);

    const addItem = (item, quantidad) => {
        if(!estaEnCarrito(item.id)) {
            const newItem = {
                ...item, 
                quantidad,
            };
            setCartItem([...cartItem,newItem]);
        }
    };

    const removerItem = (id) => {
        if(estaEnCarrito(id)) {
            const newArray = cartItem?.filter((item) => item.id != id);
            setCartItem(newArray);
        }
    }

    const limparCarrito = () => {
        setCartItem([])
    }

    const estaEnCarrito = (id) => {
        return cartItem?.some((item) => item.id === id)
    }

    const encontrarEstilo = (id) => {
        return estilosArray.find((item) => item.id === id);
    }

    const cantidadCarrito = () => {
        return cartItem.length;
    }

    const valorTotalCarrito = () => {
        return cartItem?.reduce((previousValue, currentValue) => {
            return previousValue + currentValue.precio * currentValue.cantidad;
        },0)
    };

    return(
        <CartContextProvider
            value={{
                estilos,
                cartItem,
                cantidadCarrito,
                setEstilos,
                addItem,
                removerItem,
                encontrarEstilo,
                limparCarrito,
                valorTotalCarrito
            }}
            >
                {children}
            </CartContextProvider>
    );
};

export default CartContextProvider;
