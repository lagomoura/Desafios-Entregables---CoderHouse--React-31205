import Item from './Item.jsx';

//! Componente responsable de crear el listado de ITEMs. Usando las informaciones del componente ITEM, es hecho un mapeamento del objeto y luego retorna todos estos datos separados por props.

//. Funcion para mapear el objeto. Retorna un array (estilos) con todos los datos de cada item. Cada dato de cada item es guardado en la variable estilo y luego podemos acceder a todos sus valores a traves del .valor.
function ItemList({estilos, onAdd, sumarCarrito}){

    return(
        <>

        <div className="d-flex">
        {estilos?.map((estilo)=>{

                return <Item 
                id={estilo.id}
                precio={estilo.precio}
                estilo={estilo.estilo}
                tagline={estilo.tagline}
                imagen={estilo.url} 
                key={estilo.id} 
                onAdd={onAdd}
                stock={estilo.stock}
                initial={1}
                max={estilo.stock}
                agregarCantidad={sumarCarrito}
                descripcion={estilo.descripcion}
                abv={estilo.abv}
                ibu={estilo.ibu} />

            })}
        </div>
        </>
    )
}

export default ItemList