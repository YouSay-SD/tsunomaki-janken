import { db } from "../firebase/firebase-config"

export const getScores = async () => {
  // const scoreRef = db.collection('scores');

  // scoreRef
  //   .onSnapshot( snap => {

  //     const scores = [];

  //     snap.forEach( snapChildren => {
  //       return snapChildren.data();
  //     })
      
  //     // return scores;
  //   })

  const scoresSnap = await db.collection('scores').get();
  const scores = [];

  scoresSnap.forEach( snapChildren => {
    scores.push({
      ...snapChildren.data()
    })
  });

  return scores;

    
}