import {useState} from 'react';
import axios from 'axios';
import {Card, Button} from 'react-bootstrap'

import image from './image_messages.png'
import image2 from './exit2.png'

import ModalModifier from "./ModalModifier.js";

const Carte = (props) => {

	const supprimerHandler = () => {
		axios.delete(process.env.REACT_APP_API_ULR+'/exemple_route',{params:{"user":props.infos.user}})
			.then(response => { if(response.status === 200 && response.data.retour === "ok"){props.loadOrReload()}})
			.catch(error => {console.log(error)})
	}

	return(
		<div className="aaaae">
			<Card bg="dark" text="light">
				<div className="aaaaf">
					<div className="aaaag"> <Card.Img variant="left" className="aaaad" src={image} /> </div>
					<div className="aaaah"> 
						<Card.Body>
							<Card.Title>{props.infos.user}</Card.Title>
							<Card.Text>
								Le mot de passe du fils, c'est : {props.infos.mdp}
							</Card.Text>
						</Card.Body>
					</div>
					<div className="aaaai">
						<ModalModifier infos={props.infos} loadOrReload={props.loadOrReload} />
						<Button variant="dark" onClick={supprimerHandler}> <img alt="jsp" src={image2} className="image-log-off" /> </Button>
					</div>
				</div>
			</Card>
		</div>
	)
}

export default Carte;
