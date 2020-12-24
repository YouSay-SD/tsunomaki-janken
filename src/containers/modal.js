import React, { useState } from 'react';
import { Modal } from '../components';
import { useSpring } from 'react-spring';

export const ModalContainer = () => {

  const [ openModal, setOpenModal ] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  }

  const showHideModal = useSpring({
    display: openModal ? 'block' : 'none',
    opacity: openModal ? 1 : 0,
  });

  // const scaleModal = useSpring({
  //   transform: openModal ? 'scale(1.1)' : 'initial'
  // })

  return (
    <Modal>
      <Modal.Button onClick={handleOpenModal}>Share Result & leave a message</Modal.Button>
      <Modal.Box style={showHideModal}>
        <Modal.Title>Leave your message here, it will be posted on the message board</Modal.Title>
      </Modal.Box>
      <Modal.Background style={showHideModal} onClick={handleOpenModal} />
    </Modal>
  )
}
