import {useState} from 'react';
import axios from 'axios';
import {Button, Form, Modal} from 'react-bootstrap'
import {useForm} from './useForm'

import image1 from './rewrite2.png'

const ModalModifier = (props) => {

	//Show Unshow the component
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	//Form
	const [values, handleChangeForm] = useForm({password:""})
	const updateOnKey = e => {handleChangeForm(e.target.name,e.target.value)}

	//Modify user
	const modifyUser = () => {
		axios.put(process.env.REACT_APP_API_ULR+'/exemple_route',{"user":props.infos.user,"password":values.password})
			.then(response => {
				if(response.status === 200 && response.data.retour === "ok"){
					props.loadOrReload()
					handleChangeForm("password","")
					handleClose()
				}
			})
			.catch(error => {console.log(error)})
	}

	return (
		<>
		<Button variant="dark" onClick={handleShow}> <img alt="jsp" src={image1} className="image-log-off" /> </Button>

		<Modal show={show} size="lg" onHide={handleClose} centered>
			<Modal.Header closeButton> <Modal.Title> Ajouter un utilisateur </Modal.Title> </Modal.Header>
			<Modal.Body> 
				
				<div className="aaaal"> <div className="aaaan"> Mot de passe </div> <Form.Control type="text" value={values.password} name="password" onChange={updateOnKey} /> </div>

			</Modal.Body>
			<Modal.Footer>
				<Button variant="primary" onClick={modifyUser}> Ajouter </Button>
			</Modal.Footer>
		</Modal>
		</>
	);
}

export default ModalModifier;
