import '../style-sheet/Home.css';
import CarouselHome from './CarouselHome';
import ElClub from './ElClub';
import HaceteMiembro from './HaceteMiembro';
import Experiencia from './Experiencia';
import Beneficios from './Beneficios';
import VisiteTienda from './VisiteTienda';
import Recicle from './Recicle';
import VisitaFabrica from './VisitaFabrica';

function Home() {
	return (
		<>
			<div className='carousel-homePage'>
				<CarouselHome />
			</div>

			<div className='elClub'>
				<ElClub />
			</div>

			<div className='haceteMiembro'>
				<HaceteMiembro />
			</div>

			<div className='experiencia'>
				<Experiencia />
			</div>

			<div className='beneficios'>
				<Beneficios />
			</div>

      <div className="visiteTienda">
        <VisiteTienda />
      </div>

      <div className="recicle">
        <Recicle />
      </div>

      <div className="visitaFabrica">
        <VisitaFabrica />
      </div>
		</>
	);
}

export default Home;
