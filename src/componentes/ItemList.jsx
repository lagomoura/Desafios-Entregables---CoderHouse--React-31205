import Item from './Item.jsx';

//! Componente responsable de crear el listado de ITEMs. Usando las informaciones del componente ITEM, es hecho un mapeamento del objeto y luego retorna todos estos datos separados por props.

//. Funcion para mapear el objeto. Retorna un array (estilos) con todos los datos de cada item. Cada dato de cada item es guardado en la variable estilo y luego podemos acceder a todos sus valores a traves del .valor.
function ItemList({ estiloList, onAdd, categoria }) {


	return (
		<>
			<div className='container col-sm-12 col-lg-12 d-flex flex-row justify-content-around flex-wrap'>
				{estiloList?.map((estilo) => {
					return (
						<Item
							precio={estilo.precio}
							nombre={estilo.nombre}
							estilo={estilo.estilo}
							tagline={estilo.tagline}
							imagen={estilo.url}
							id={estilo.id}
							onAdd={onAdd}
                            categoria={categoria}
							stock={estilo.stock}
							initial={1}
							max={estilo.stock}
							descripcion={estilo.descripcion}
							abv={estilo.abv}
							ibu={estilo.ibu}
							key={estilo.id}
						/>
					);
				})}
			</div>
		</>
	);
}

export default ItemList;
