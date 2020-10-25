import React from 'react';
import { useDispatch } from 'react-redux';
import { Panel } from '../components';
import { TokenContainer } from './token';
import tokens from '../fixtures/tokens.json';
import { VideoContainer } from './video';
import { gameStart, housePick, pick } from '../actions/game';

export function PanelContainer() {
  const title = [...'Make Your Choice'];

  const dispatch = useDispatch();
  // const [pick, setPick] = useState('');
  // const [housePick, setHousePick] = useState('');
  // const [AIVideo, setAIVideo] = useState('default');
  // const [winner, setWinner] = useState(false);

  const houseSelection = () => {
    const tokensArr = [...tokens];
    const houseSelectionPick = tokensArr[Math.floor(Math.random() * tokensArr.length)].name;
    dispatch(housePick(houseSelectionPick));
    // setHousePick(housePickChoice);
    // setAIVideo(housePickChoice)

    // dispatch( 
    //   housePick({})
    // );
  }



  const handleChoice = (tokenName) => {
    houseSelection();
    dispatch(pick(tokenName));
    dispatch(gameStart());
    // setPick(name);
    // handleGameConclusion(pick, housePick);
  }

  // const handleGameConclusion = (pick, housePick) => {
  //   // console.log(housePick)
  //   // if(pick != housePick) {
  //   //   console.log('juego')
  //   // } else {
  //   //   console.log('empate')
  //   // }
  // }

  return (
    <Panel>
      <VideoContainer url={`/videos/${'default'}.mp4`} />

      <Panel.Content>
        <Panel.Title>
          {title.map((letter, i) => (
            <span key={i}>{ letter }</span>
          ))}
        </Panel.Title>

        <Panel.Grid>
          {tokens.map(({url, name, id}) => (
            <TokenContainer 
              key={id} 
              url={url} 
              name={name} 
              handleChoice={handleChoice} 
            />
          ))}
        </Panel.Grid>
      </Panel.Content>
    </Panel>
  )
}
