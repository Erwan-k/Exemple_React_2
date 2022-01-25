import {useState, useEffect} from 'react';
import axios from 'axios';
import {Button} from 'react-bootstrap'
import './App.css';

import Carte from "./components/Carte.js";
import ModalAjouter from "./components/ModalAjouter.js";

const App = () => {

	const [liste, setListe] = useState([])

	const loadOrReload = () => {
		axios.get(process.env.REACT_APP_API_ULR+'/exemple_route_all',{params:{}})
			.then(response => {if(response.status === 200 &&response.data.retour === "ok"){setListe(response.data.valeur)}})
			.catch(error => {console.log(error)})
	}

	useEffect(() =>{ loadOrReload() }, [])

	const liste_elem = liste.map( (elem,i) => <Carte key={i} infos={elem} loadOrReload={loadOrReload} />)

	return(
		 <div className="App">
		 	<div className="aaaaa">
		 		<div className="aaaab">
		 			<div className="aaaac">
						{liste_elem}
					</div>
					<div className="aaaaj"> <ModalAjouter loadOrReload={loadOrReload} /> </div>
				</div>
			</div>
		</div>
		)
}

export default App;
