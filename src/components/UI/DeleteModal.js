import React from "react";
import { Modal, Button } from "react-bootstrap";

const DeleteModal = ({onConfirm, onCancel, show}) => {
    return (<Modal
      size="sm"
      show={show}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton onClick={onCancel}>
        <Modal.Title id="contained-modal-title-vcenter">
            Delete Entry
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
            Are you sure you want to delete this entry?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCancel}>Cancel</Button>
        <Button variant="danger" onClick={onConfirm}>Confirm</Button>
      </Modal.Footer>
    </Modal>);
}

export default DeleteModal;