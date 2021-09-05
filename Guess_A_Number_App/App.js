import{View}from'react-native'
import React, { useState } from 'react';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

const App= () => {
const [userNumber,setUserNumber]=useState()
const [guessRounds,setGuessRounds]=useState(0)

const startGameHandler=(selectedNum)=>{
  setUserNumber(selectedNum)
  setGuessRounds(0);
}

const configureNewGameHandler = ()=>{
  setGuessRounds(0)
  setUserNumber(null)
}

const gameOverHandler = (numOfRounds)=>{
  setGuessRounds(numOfRounds)
}

let content = <StartGameScreen onStartGame ={startGameHandler}/>;
 if(userNumber &&guessRounds<=0 ){
   content = <GameScreen userChoice = {userNumber} 
   onGameOver = {gameOverHandler} 
   />
 }else if(guessRounds>0){
   content = <GameOverScreen 
   userNumber={userNumber}
   roundsNumber={guessRounds}
   onRestart={configureNewGameHandler}
   />
 }
  return (
    <View style={{width:'100%',height:'100%'}}> 
      <Header title="Guess A Number"/>
      {content}
    </View>
  );
};

export default App;
