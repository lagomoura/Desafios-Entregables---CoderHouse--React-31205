import React from 'react';
import '../style-sheet/MiCuenta.css';

export default function MiCuenta() {
	return (
		<section id='miCuenta'>
			<div className='calendario-2021 py-5'>
				<section id='acordeon' className='container'>
					<h3 className='text-center py-5 text-capitalize fs-1 retrospectiva'>
						Restrospectiva 2021
					</h3>
					{/* CARD RESUMEN */}
					<div className='card-resumen d-flex justify-content-around my-5 flex-wrap'>
						{/* INICIO CARD */}
						<div
							className='card card-calendario text-dark mb-3 animate__animated animate__jackInTheBox'
							style={{ maxWidth: '18rem' }}>
							<div className='card-header p-1 rounded-pill' />
							<div className='card-body'>
								<h5 className='card-title text-center fs-1'>9</h5>
								<p className='card-text text-center fw-bold text-uppercase'>
									Estilos presentados
								</p>
							</div>
						</div>
						{/* FIN CARD */}
						<div
							className='card card-calendario text-dark mb-3 animate__animated animate__jackInTheBox  animate__delay-1s'
							style={{ maxWidth: '18rem' }}>
							<div className='card-header p-1 rounded-pill' />
							<div className='card-body'>
								<h5 className='card-title text-center fs-1'>689</h5>
								<p className='card-text text-center fw-bold text-uppercase'>
									Litros producidos
								</p>
							</div>
						</div>
						<div
							className='card card-calendario text-dark mb-3 animate__animated animate__jackInTheBox animate__delay-2s'
							style={{ maxWidth: '18rem' }}>
							<div className='card-header p-1 rounded-pill' />
							<div className='card-body'>
								<h5 className='card-title text-center fs-1'>1378</h5>
								<p className='card-text text-center fw-bold text-uppercase'>
									Botellas entregadas
								</p>
							</div>
						</div>
					</div>
					<div className='lanzamientos-2021 d-flex flex-column my-5'>
						<p className='text-center pt-3 estilos-2021'>
							Confira todos los lanzamientos de 2021
						</p>
						<p className='text-center pb-3 estilos-2021'>
							Hojas de estilo y etiquetas.
						</p>
					</div>
					<div className='accordion' id='accordionExample'>
						<div className='accordion-item item-1'>
							<h2 className='accordion-header' id='headingOne'>
								<button
									className='accordion-button item-1'
									type='button'
									data-bs-toggle='collapse'
									data-bs-target='#collapseOne'
									aria-expanded='true'
									aria-controls='collapseOne'>
									Abril ????
								</button>
							</h2>
							<div
								id='collapseOne'
								className='accordion-collapse collapse'
								aria-labelledby='headingOne'
								data-bs-parent='#accordionExample'>
								<div className='accordion-body'>
									<strong>Citrus X Paradisi - American Wheat Beer.</strong>{' '}
									Refrescantes cervezas de trigo que muestran m??s car??cter a
									l??pulo y menos car??cter a levadura que sus primas alemanas. Un
									car??cter de fermentaci??n limpio permite sabores a trigo como a
									pan, masa o granos que se complementan con los sabores a
									l??pulo y un amargor m??s alto que sus cualidades a levadura.
								</div>
								<a
									href='/'
									className='btn btn-dark text-warning my-1 mb-4 mx-3'>
									Hoja de Estilo en PDF
								</a>
								<a
									href='/'
									className='btn btn-dark text-warning my-1 mb-4 mx-3'>
									Ver Etiqueta
								</a>
							</div>
						</div>
						<div className='accordion-item item-2'>
							<h2 className='accordion-header' id='headingTwo'>
								<button
									className='accordion-button collapsed item-2'
									type='button'
									data-bs-toggle='collapse'
									data-bs-target='#collapseTwo'
									aria-expanded='false'
									aria-controls='collapseTwo'>
									Mayo ????
								</button>
							</h2>
							<div
								id='collapseTwo'
								className='accordion-collapse collapse'
								aria-labelledby='headingTwo'
								data-bs-parent='#accordionExample'>
								<div className='accordion-body'>
									<strong>Vov?? Edna - Cream Ale.</strong> El estilo Cream Ale
									define a un tipo de cerveza suave y refrescante que estuvo en
									grave peligro de desaparici??n, al igual que muchos otros
									estilos, debido a la aplicaci??n de la Ley Seca (Prohibici??n)
									en Estados Unidos, del 1920 al 1933. La medida ilegaliz?? la
									fabricaci??n, el transporte, la importaci??n, la exportaci??n y
									la venta de alcohol. Las Cream Ale, sin embargo, lograron
									sobrevivir a la Prohibici??n y actualmente gozan de buena
									salud, sobre todo gracias a las micro-cervecer??as, que han
									empezado a elaborarlo e incluso modernizarlo.
								</div>
								<a
									href='/'
									className='btn btn-dark text-warning my-1 mb-4 mx-3'>
									Hoja de Estilo en PDF
								</a>
								<a
									href='/'
									className='btn btn-dark text-warning my-1 mb-4 mx-3'>
									Ver Etiqueta
								</a>
							</div>
						</div>
						<div className='accordion-item item-3'>
							<h2 className='accordion-header' id='headingThree'>
								<button
									className='accordion-button collapsed item-3'
									type='button'
									data-bs-toggle='collapse'
									data-bs-target='#collapseThree'
									aria-expanded='false'
									aria-controls='collapseThree'>
									Junio ????
								</button>
							</h2>
							<div
								id='collapseThree'
								className='accordion-collapse collapse'
								aria-labelledby='headingThree'
								data-bs-parent='#accordionExample'>
								<div className='accordion-body'>
									<strong>Thank You, Artur! - Sweet Stout.</strong> Suave aroma
									a granos torrados, a veces con notas a caf?? y/o chocolate. A
									menudo existe una impresi??n de dulzor a crema. El car??cter
									frutal puede ser de bajo a moderadamente alto. Diacetilo de
									nulo a bajo. Aroma a l??pulo de nulo a bajo. Color de marr??n
									muy oscuro a negro. Puede ser opaca o clara. Cremosa espuma de
									canela a marr??n. El torrado de las maltas domina el sabor como
									en las Dry Stouts, y puede aportar sabores a caf?? y/o
									chocolate. El amargor es moderado (menor que en una Dry
									Stout). Un dulzor de medio a alto (usualmente por la adici??n
									de lactosa) proporciona la contraparte del car??cter torrado y
									del amargor, y perdura en el acabado. Esteres frutados de bajo
									a moderado. Diacetilo de nulo a bajo. El balance entre las
									maltas torradas y el dulzor puede variar, de algo dulce a
									moderadamente seco y algo torrado.
								</div>
								<a
									href='/'
									className='btn btn-dark text-warning my-1 mb-4 mx-3'>
									Hoja de Estilo en PDF
								</a>
								<a
									href='/'
									className='btn btn-dark text-warning my-1 mb-4 mx-3'>
									Ver Etiqueta
								</a>
							</div>
						</div>
						<div className='accordion-item item-4'>
							<h2 className='accordion-header' id='headingFour'>
								<button
									className='accordion-button collapsed item-4'
									type='button'
									data-bs-toggle='collapse'
									data-bs-target='#collapseFour'
									aria-expanded='false'
									aria-controls='collapseFour'>
									Julio ????
								</button>
							</h2>
							<div
								id='collapseFour'
								className='accordion-collapse collapse'
								aria-labelledby='headingFour'
								data-bs-parent='#accordionExample'>
								<div className='accordion-body'>
									<strong>Royal Albert Dock - Best Bitter.</strong> La bitter es
									un tipo de cerveza inglesa, derivada originalmente de la pale
									ale (cerveza inglesa p??lida). Una versi??n m??s fuerte de la
									misma se ha convertido en una popular cerveza en botella. El
									ingrediente principal es cebada malteada, agreg??ndose l??pulo
									para mejorar las caracter??sticas, y para dar un olor y gusto
									distintivos. Las bitter cubren una amplia variedad de sabor,
									aroma y aspecto. Estos incluyen cobre, malta, seca y dulce. En
									Yorkshire la Bitter tiende a tener la parte superior cremosa,
									mientras que en la Inglaterra sur oriental la cerveza es
									generalmente m??s de l??pulo y servida sin la parte superior. En
									Escocia, se conoce como heavy a la cerveza amarga, mientras
									que como a pint of heavy.
								</div>
								<a
									href='/'
									className='btn btn-dark text-warning my-1 mb-4 mx-3'>
									Hoja de Estilo en PDF
								</a>
								<a
									href='/'
									className='btn btn-dark text-warning my-1 mb-4 mx-3'>
									Ver Etiqueta
								</a>
							</div>
						</div>
						<div className='accordion-item item-5'>
							<h2 className='accordion-header' id='headingFive'>
								<button
									className='accordion-button collapsed item-5'
									type='button'
									data-bs-toggle='collapse'
									data-bs-target='#collapseFive'
									aria-expanded='false'
									aria-controls='collapseFive'>
									Agosto ????
								</button>
							</h2>
							<div
								id='collapseFive'
								className='accordion-collapse collapse'
								aria-labelledby='headingFive'
								data-bs-parent='#accordionExample'>
								<div className='accordion-body'>
									<strong>Sinensis - American Pale Ale.</strong> Pale ale (ale
									p??lida o ale clara, en espa??ol) es un subtipo de cerveza ale
									obtenida mediante fermentaci??n templada??? empleando
									principalmente una variedad concreta de malta conocida como
									malta clara (pale malt en ingl??s). La mayor proporci??n de este
									tipo de malta hace que la cerveza presente un color m??s claro
									que otras cervezas tipo ale.??? La primera aparici??n del t??rmino
									"pale ale" data de alrededor del a??o 1703, empleado para
									aquellas cervezas fabricadas a partir de malta secada con
									coque, que resultaban ser de un color m??s claro que el resto
									de las cervezas populares de aquella ??poca. El empleo de
									diferentes tipos de preparaci??n as?? como diferentes cantidades
									de l??pulo ha dado lugar a cervezas pale ale de una amplia
									variedad de sabores e intensidades..
								</div>
								<a
									href='/'
									className='btn btn-dark text-warning my-1 mb-4 mx-3'>
									Hoja de Estilo en PDF
								</a>
								<a
									href='/'
									className='btn btn-dark text-warning my-1 mb-4 mx-3'>
									Ver Etiqueta
								</a>
							</div>
						</div>
						<div className='accordion-item item-6'>
							<h2 className='accordion-header' id='headingSix'>
								<button
									className='accordion-button collapsed item-6'
									type='button'
									data-bs-toggle='collapse'
									data-bs-target='#collapseSix'
									aria-expanded='false'
									aria-controls='collapseSix'>
									Septiembre ????
								</button>
							</h2>
							<div
								id='collapseSix'
								className='accordion-collapse collapse'
								aria-labelledby='headingSix'
								data-bs-parent='#accordionExample'>
								<div className='accordion-body'>
									<strong>Gordenchoten - Altbier.</strong> Las cervezas Altbier,
									nacieron en la ciudad alemana de D??sseldorf y tiene una
									historia que data de hace un poco m??s de 200 a??os. El t??rmino
									???alt??? significa ???viejo??? en alem??n, y hace referencia a la
									manera en la que se sol??a hacer la cerveza en el pa??s europeo.
									Antes del auge de algunos estilos de cervezas Lager en la
									parte sur de Alemania, las fermentaciones Ale eran m??s
									comunes. Cuando eso comenz?? a cambiar en el siglo XIX,
									D??sseldorf adopt?? algunas de las mejoras tecnol??gicas, pero se
									resisti?? al cambio de fermentaci??n. Estas cervezas se
									fermentan a una temperaturas que oscilan entre los 15 y los
									20??C, despu??s se condicionan a 10??C y por ??ltimo pasan por el
									proceso de ???lagerizaci??n??? a temperaturas fr??as, lo que ayuda a
									producir una cerveza limpia y suave.
								</div>
								<a
									href='/'
									className='btn btn-dark text-warning my-1 mb-4 mx-3'>
									Hoja de Estilo en PDF
								</a>
								<a
									href='/'
									className='btn btn-dark text-warning my-1 mb-4 mx-3'>
									Ver Etiqueta
								</a>
							</div>
						</div>
						<div className='accordion-item item-7'>
							<h2 className='accordion-header' id='headingSeven'>
								<button
									className='accordion-button collapsed item-7'
									type='button'
									data-bs-toggle='collapse'
									data-bs-target='#collapseSeven'
									aria-expanded='false'
									aria-controls='collapseSeven'>
									Octubre ????
								</button>
							</h2>
							<div
								id='collapseSeven'
								className='accordion-collapse collapse'
								aria-labelledby='headingSeven'
								data-bs-parent='#accordionExample'>
								<div className='accordion-body'>
									<strong>FernWeh Oktorbefest - Festbier.</strong> Lorem ipsum
									dolor sit amet consectetur adipisicing elit. Vitae soluta
									sequi sint, consequuntur, incidunt adipisci eligendi nam eaque
									consectetur rerum quae, delectus nihil odio numquam nisi
									quibusdam earum quo sit exercitationem blanditiis labore ipsa
									voluptatem ea? Delectus excepturi illum pariatur quisquam
									numquam unde fuga a, autem deserunt, quos amet perspiciatis?.
								</div>
								<a
									href='/'
									className='btn btn-dark text-warning my-1 mb-4 mx-3'>
									Hoja de Estilo en PDF
								</a>
								<a
									href='/'
									className='btn btn-dark text-warning my-1 mb-4 mx-3'>
									Ver Etiqueta
								</a>
							</div>
						</div>
						<div className='accordion-item item-8'>
							<h2 className='accordion-header' id='headingEight'>
								<button
									className='accordion-button collapsed item-8'
									type='button'
									data-bs-toggle='collapse'
									data-bs-target='#collapseEight'
									aria-expanded='false'
									aria-controls='collapseEight'>
									Noviembre ????
								</button>
							</h2>
							<div
								id='collapseEight'
								className='accordion-collapse collapse'
								aria-labelledby='headingEight'
								data-bs-parent='#accordionExample'>
								<div className='accordion-body'>
									<strong>Summer Gose - Gose.</strong> Lorem ipsum dolor sit
									amet consectetur adipisicing elit. Vitae soluta sequi sint,
									consequuntur, incidunt adipisci eligendi nam eaque consectetur
									rerum quae, delectus nihil odio numquam nisi quibusdam earum
									quo sit exercitationem blanditiis labore ipsa voluptatem ea?
									Delectus excepturi illum pariatur quisquam numquam unde fuga
									a, autem deserunt, quos amet perspiciatis?.
								</div>
								<a
									href='/'
									className='btn btn-dark text-warning my-1 mb-4 mx-3'>
									Hoja de Estilo en PDF
								</a>
								<a
									href='/'
									className='btn btn-dark text-warning my-1 mb-4 mx-3'>
									Ver Etiqueta
								</a>
							</div>
						</div>
						<div className='accordion-item item-9'>
							<h2 className='accordion-header' id='headingNine'>
								<button
									className='accordion-button collapsed item-9'
									type='button'
									data-bs-toggle='collapse'
									data-bs-target='#collapseNine'
									aria-expanded='false'
									aria-controls='collapseNine'>
									Diciembre ????
								</button>
							</h2>
							<div
								id='collapseNine'
								className='accordion-collapse collapse'
								aria-labelledby='headingNine'
								data-bs-parent='#accordionExample'>
								<div className='accordion-body'>
									<strong>Garota de IPAnema - American IPA.</strong> Prominente
									a intenso aroma a l??pulo con un car??cter c??trico, floral, a
									perfume, resinoso, a pino y/o frutal, derivado de los l??pulos
									americanos. Muchas versiones tienen dry hopping y pueden tener
									un aroma adicional a hierbas, aunque esto no es requerido.
									Puede hallarse alg??n limpio dulzor a malta, pero deber??a ser
									en un nivel menor que en los ejemplos ingleses. Se puede
									detectar en algunas versiones un car??cter frutal, ya sea por
									los ??steres o por el l??pulo, aunque un car??cter neutro de la
									fermentaci??n es tambi??n aceptable. Puede percibirse algo de
									alcohol.
								</div>
								<a
									href='/'
									className='btn btn-dark text-warning  my-1 mb-4 mx-2'>
									Hoja de Estilo en PDF
								</a>
								<a
									href='/'
									className='btn btn-dark text-warning  my-1 mb-4 mx-2'>
									Ver Etiqueta
								</a>
							</div>
						</div>
					</div>
				</section>
			</div>
		</section>
	);
}
