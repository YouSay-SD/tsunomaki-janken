import React, { useState } from 'react';
import { Modal } from '../components';

export const ModalContainer = () => {

  const [ openModal, setOpenModal ] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  }

  return (
    <Modal>
      <Modal.Button onClick={handleOpenModal}>Share Result & leave a message</Modal.Button>
      <Modal.Box>
        <Modal.Title>Leave your message here, it will be posted on the message board</Modal.Title>
      </Modal.Box>
      <Modal.Background />
    </Modal>
  )
}
