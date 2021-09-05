import{View}from'react-native'
import React from 'react';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';

const App= () => {

  return (
    <View style={{width:'100%',height:'100%'}}> 
      <Header title="Guess A Number"/>
      <StartGameScreen />
    </View>
  );
};

export default App;
