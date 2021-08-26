import React, { useState } from 'react';

import {
  Button,
  Modal,
} from 'react-bootstrap';

import UserNav from '../components/userNav';

const UserContent = (props, { loggedIn, setLoggedIn }) => {
	const [show, setShow] = useState();
	const handleClose = () => setShow(false);
	let handleShow = () => setShow(true);
	handleShow = props.handleShow;
	return (
		<div>
			<UserNav handleShow={handleShow} handleClose={handleClose} />
			<Button variant='primary' onClick={handleShow}>
				Launch demo modal
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Close
					</Button>
					<Button variant='primary' onClick={handleClose}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default UserContent;
