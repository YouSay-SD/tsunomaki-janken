import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { startGoogleLogin } from '../actions/auth';
import { useForm } from '../hooks/use-form';
import { ModalContainer } from './modal';

export const ShareScore = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const { isLogged } = useSelector(state => state.auth); 

  const [ formValues, handleInputChange ] = useForm({
    textArea: ''
  });

  const { textArea } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault()
    // history.push('/message-board');
  }

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    dispatch(startGoogleLogin());
  }

  return (
    <div>
       <ModalContainer
          button={<button>Share Result & leave a message</button>}
        >
          <form onSubmit={ (isLogged) ? handleSubmit : handleGoogleLogin }>
            <h3>Leave your message here, it will be posted on the message board</h3>
            <textarea 
              placeholder="Your Message..." 
              name="textArea"
              value={ textArea }
              onChange={ handleInputChange }
            />
            <button 
              type="submit"
            >
              Send
            </button>
          </form>
        </ModalContainer>
    </div>
  )
}
