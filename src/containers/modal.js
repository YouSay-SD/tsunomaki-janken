import React, { useState } from 'react';
import { Modal } from '../components';
import { useSpring } from 'react-spring';

export const ModalContainer = () => {

  const [ openModal, setOpenModal ] = useState(false);

  const showHideModal = useSpring({
    to: async (next, cancel) => {
      if (openModal) {
        await next ({display: 'flex'})
        await next ({opacity: 1})
      } else {
        await next ({opacity: 0})
        await next ({display: 'none'})
      }
    },
    from: {opacity: 0, display: 'none'},
    config: {duration: 200}
  });

  return (
    <Modal>
      <button onClick={() => setOpenModal(!openModal)}>Share Result & leave a message</button>
      <Modal.Form style={showHideModal}>
        <Modal.Title>Leave your message here, it will be posted on the message board</Modal.Title>
        <Modal.Message placeholder="Your Message..." />
        <button type="submit">Send</button>
      </Modal.Form>
      <Modal.Background style={showHideModal} onClick={() => setOpenModal(!openModal)} />
    </Modal>
  )
}
