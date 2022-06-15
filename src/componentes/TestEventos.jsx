function TestEventos () {


        function controlarVocales (e) {
            const vocales = "aeiouAEIOU"
            if (vocales.includes(e.key)) {
                e.preventDefault()
                alert("No se pueden usar vocales")
            }
        }

    return (
        <> 
            <input onKeyDown={controlarVocales} placeholder="Digite algo" type="text" />
            
        </>
    )
}
export default TestEventos;




// En stackblitz crea un input de texto que no permita el ingreso de vocales, cancelando su evento onKeyDown en los keys adecuados.
// Pista: el synthetic event de keydown tiene varias propiedades, encuentra cuál te puede dar la información de la tecla ;)
// Cuentas con 15/20 minutos para realizar la actividad.
