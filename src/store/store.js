import { createStore, combineReducers } from 'redux';
import { gameReducer } from '../reducers/gameReducer';

const reducers = combineReducers({
  game: gameReducer
});

export const store = createStore(reducers);