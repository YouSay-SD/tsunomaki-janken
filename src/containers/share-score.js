import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from '../hooks/use-form';
import { ModalContainer } from './modal';

export const ShareScore = () => {

  const history = useHistory();

  const [ formValues, handleInputChange ] = useForm({
    textArea: ''
  });

  const { textArea } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault()
    history.push('/message-board');
  }

  return (
    <div>
       <ModalContainer
          button={<button>Share Result & leave a message</button>}
        >
          <form onSubmit={handleSubmit}>
            <h3>Leave your message here, it will be posted on the message board</h3>
            <textarea 
              placeholder="Your Message..." 
              name="textArea"
              value={ textArea }
              onChange={ handleInputChange }
            />
            <button type="submit">Send</button>
          </form>
        </ModalContainer>
    </div>
  )
}
