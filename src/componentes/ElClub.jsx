import React from 'react';
import '../style-sheet/ElClub.css';

export default function ElClub() {
	return (
		<section className='container-fluid' id='elClub'>
			<div className='row'>
				<div className='titulo titulo-club text-center text-warning fw-bold mt-3 p-0 m-0'>
					<span>El club</span>
				</div>
				<div className='linea-titulo d-flex justify-content-center align-content-center py-0 my-0' />
				<div className='row'>
					<div className='col-sm-12 col-lg-6 p-3 pb-0 pb-lg-2 d-flex-block text-club'>
						<p>
							<em>Eita!</em> nace en el año 2018, pero es en el 2015 cuando este
							viaje empieza en nuestras vidas. Dublin, Irlanda, es el lugar
							donde todo empezó, una visita a la fabrica de cerveza Guinnes
							encendió la chispa de la curiosidad por el mundo cervecero.
						</p>
						<p>
							Somos curiosos, queremos aprender y conocer cosas nuevas todo el
							tiempo, es nuestra motivacion, nuestro motor, mejorar y crecer. Y
							creemos fervientemente que el saber y el conocimiento se
							comparten, y mucho más si es sobre cerveza!! Es por esto que en
							Abril de 2021, y con algunos años de experiencia, creamos Eita!
							“Club Exclusivo de Cerveza” ¿Qué mejor forma de aprender de
							cerveza que tomando cerveza?
						</p>
						<p>
							Tal como sugiere el nombre del Club, las produccion es realmente
							exclusiva, son cocciones de bajo volumen y con recetas que no se
							repiten, tratando de seguir siempre el objetivo de proporcionar la
							mayor gama de estilos cerveceros posible.
						</p>
						<p>
							No hay nada mejor que saber con certeza que es lo que estamos
							consumiendo, por eso, cada entrega llega acompañada de material
							gráfico con informacion del estilo que se esta tomando, la materia
							prima utilizada en esa coccion, guías de maridajes para ese estilo
							en particular, curiosidades cerveceras y mucho mas.
						</p>
						<p>
							Al ser miembro estas participando de un grupo exclusivo donde
							hacemos catas guiadas, te mostramos backstages de la producción,
							realizamos sorteos, regalos y una gran variedad de cosas que
							surgen dia a dia, muchas veces propuestas por los propios
							miembros.
						</p>
						<p>
							Que estas esperando? Vení a descubrír un mundo paralelo, donde la
							interacción del agua, las maltas, lupulos, levaduras y quizás unas
							cositas más, te hará viajar sin mover los pies del piso.
						</p>
					</div>
					<div className='col-12 p-5 col-lg-6 p-lg-5 pt-2 d-flex align-content-center'>
						<img
							src={require('../imagenes/elClub.jpg')}
							className='img-fluid img-club'
							alt='club'
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
