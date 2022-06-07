import React from 'react';
import ItemListContainer from './ItemListContainer.jsx';

const ItemList = ({estilos}) => {
    
estilos?.map(estilos => <ItemListContainer key={estilos.id} estilos={estilos}/>)
    
}

export default ItemList;