import React, {useState, useEffect} from "react";

function TestPromise () {
    const [cerveza, setCerveza] = useState([]);
}

const cervezas = [
    {id: 1, nombre: 'English Best Bitter', precio: '$3.00', stock: 8},
    {id: 2, nombre: 'German HeffeWeizen', precio: '$2.00', stock: 10},
    {id: 3, nombre: 'Imperial Stout', precio: '$5.00', stock: 8}
]


const Pedido = new Promise ((res, rej) => {
    setTimeout (() => {
        res ({idPedido: 'a123bcd', monto: '$1.800', mesa: '32'});
    }, 3000);
})

    
    export default TestPromise;