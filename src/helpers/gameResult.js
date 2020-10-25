const { gameDraw, gameWin, gameLose } = require("../actions/game");

export const gameResult = (pick, housePick, dispatch) => {
  if(pick !== '' && housePick !== '') {
    if(pick !== housePick) {
      const result = () => {
        switch (pick) {
          case 'rock':
            if(housePick === 'paper') {
              return false;
            }
            if(housePick === 'scissor') {
              return true;
            }
            break;
          case 'paper':
            if(housePick === 'rock') {
              return true;
            }
            if(housePick === 'scissor') {
              return false;
            }
            break;
          case 'scissor':
            if(housePick === 'rock') {
              return false;
            }
            if(housePick === 'paper') {
              return true;
            }
            break;
        
          default:
            break;
        }
      }
      dispatch((result()) ? gameWin() : gameLose())
    } else {
      dispatch(gameDraw())
    }
  }
}