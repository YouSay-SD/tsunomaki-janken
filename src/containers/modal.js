import React, { useState } from 'react';
import { Modal } from '../components';
import { useSpring } from 'react-spring';

export const ModalContainer = () => {

  const [ openModal, setOpenModal ] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  }

  const showHideModal = useSpring({
    // display: openModal ? 'flex' : 'none',
    // visibility: openModal ? 'visible' : 'hidden',
    // opacity: openModal ? 1 : 0,
    to: async (next, cancel) => {
      openModal ? (
        await next ({display: 'flex'}),
        await next ({opacity: 1})
      ) : (
        await next ({opacity: 0}),
        await next ({display: 'none'})
      )
    },
    from: {opacity: 0, display: 'none'}
  });

  // const scaleModal = useSpring({
  //   transform: openModal ? 'scale(1.1)' : 'initial'
  // })

  return (
    <Modal>
      <button onClick={handleOpenModal}>Share Result & leave a message</button>
      <Modal.Form style={showHideModal}>
        <Modal.Title>Leave your message here, it will be posted on the message board</Modal.Title>
        <Modal.Message placeholder="Your Message..." />
        <button type="submit">Send</button>
      </Modal.Form>
      <Modal.Background style={showHideModal} onClick={handleOpenModal} />
    </Modal>
  )
}
