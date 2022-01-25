import {useState} from 'react';
import axios from 'axios';
import {Button, Form, Modal} from 'react-bootstrap'
import {useForm} from './useForm'

const ModalAjouter = (props) => {

	//Show Unshow the component
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	//Form
	const [values, handleChangeForm] = useForm({user:"",password:""})
	const updateOnKey = e => {handleChangeForm(e.target.name,e.target.value)}

	//Add user
	const addUser = () => {
		axios.post(process.env.REACT_APP_API_ULR+'/exemple_route',{"user":values.user,"password":values.password})
			.then(response => {
				if(response.status === 200 && response.data.retour === "ok"){
					props.loadOrReload()
					handleChangeForm("user","")
					handleChangeForm("password","")
					handleClose()
				}
			})
			.catch(error => {console.log(error)})
	}

	return (
		<>
		<Button variant="dark" onClick={handleShow}> Ajouter un utilisateur </Button>

		<Modal show={show} size="lg" onHide={handleClose} centered>
			<Modal.Header closeButton> <Modal.Title> Ajouter un utilisateur </Modal.Title> </Modal.Header>
			<Modal.Body> 
				
				<div className="aaaak"> <div className="aaaam"> Nom d'utilisateur </div> <Form.Control type="text" value={values.user} name="user" onChange={updateOnKey} /> </div>
				<div className="aaaal"> <div className="aaaan"> Mot de passe </div> <Form.Control type="text" value={values.password} name="password" onChange={updateOnKey} /> </div>

			</Modal.Body>
			<Modal.Footer>
				<Button variant="primary" onClick={addUser}> Ajouter </Button>
			</Modal.Footer>
		</Modal>
		</>
	);
}

export default ModalAjouter;
