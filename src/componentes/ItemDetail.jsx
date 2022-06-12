import '../style-sheet/ItemDetail.css';
import ItemDetailCount from './ItemDetailCount.jsx';


function ItemDetail ({detalleProducto, sumar, restar, agregarCantidad, onAdd, validarStock, sumarCarrito}) {


    return (
      <> 
        {detalleProducto?.map((producto)=>{
                return (

                  <div className="itemDetail">
                    <div className="producto_titulo text-center"><h2>{producto.nombre}</h2></div>
                      <p className="text-center mt-1">Estilo: {producto.estilo}</p>
                      <p className="text-center mt-2">{producto.tagline}</p>
                      <div className="cuerpo_info">
                        <div className="row">
                          <div className="producto_img justify-content-end align-items-center d-flex col-6 flex-column">
                            <img src= {producto.url} alt="" className="img-card" />
                            <div className="descripcion_detail text-justify">
                              <p className="text-center font-italic">{producto.descripcion}</p>
                              <p className="text-center">{producto.descripcion_complemento}</p>
                            </div>
                          </div>
                          <div className="datos_extras col-6 d-flex flex-column align-items-center justify-content-center">
                            <p className="text-center">Entregas a todo el pais a traves del correo Andreani en hasta 48h</p>
                            <p className="text-center">La mejor experiencia Birristica</p>
                            <p className="text-center">AA: {producto.abv} | IBU: {producto.ibu}</p>
                            <div className="btn_litros">
                              <button className="btn btn-warning m-2">500ml</button>
                              <button className="btn btn-warning m-2">1000ml</button>
                            </div>
                            <div className="count">
                              <ItemDetailCount max={producto.stock} sumar={sumar} restar={restar} agregarCantidad={agregarCantidad} onAdd={onAdd} precio={producto.precio} initial={1} validarStock={validarStock} sumarCarrito={sumarCarrito}/>
                            </div>
                          </div>
                        </div>
                      </div> 
                  </div>
                )
        })
      }
    
      </>
  )
}

export default ItemDetail;