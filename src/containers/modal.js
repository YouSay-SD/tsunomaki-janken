import React, { useState } from 'react';
import { Modal } from '../components';
import { useSpring } from 'react-spring';

export const ModalContainer = ({children, button}) => {

  const [ openModal, setOpenModal ] = useState(false);

  const showHideModal = useSpring({
    to: async (next) => {
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
      <div onClick={() => setOpenModal(!openModal)}>
        {button}
      </div>
      <Modal.Box style={showHideModal}>
        {children}
      </Modal.Box>
      <Modal.Background style={showHideModal} onClick={() => setOpenModal(!openModal)} />
    </Modal>
  )
}
