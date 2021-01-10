import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGoogleLogin } from '../actions/auth';
import { shareScore } from '../actions/game';
import { useForm } from '../hooks/use-form';
import { ModalContainer } from './modal';

export const ShareScore = () => {

  const dispatch = useDispatch();
  const { name, avatar, isLogged } = useSelector(state => state.auth); 
  const { score } = useSelector(state => state.game); 

  const [ formValues, handleInputChange ] = useForm({
    textArea: ''
  });

  const { textArea } = formValues;

  const newScore = {
    name,
    avatar,
    message: textArea,
    win: score.win,
    lose: score.lose,
    draw: score.draw
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(shareScore( newScore ))
  }

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin())
  }

  return (
    <div>
       <ModalContainer
          button={<button>Share Result & leave a message</button>}
        >
          {
            ( isLogged ) 
            ? 
              <form onSubmit={ handleSubmit }>
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
            : <>
                <button onClick={ handleGoogleLogin }>Google Login</button>
              </>
          }
        </ModalContainer>
    </div>
  )
}
