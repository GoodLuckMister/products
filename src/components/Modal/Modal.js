import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import FormAddProduct from '../FormProduct/FormAdd';

export default function ModalPage({ name, description }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {name}
      </Button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header>
          <Modal.Title>{description}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormAddProduct handleClose={handleClose} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
