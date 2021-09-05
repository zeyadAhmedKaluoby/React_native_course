import React, { useEffect, useRef, useState } from 'react'
import {View,Text,StyleSheet, Button, Alert, ScrollView}from 'react-native'
import Card from '../components/Card';
import MainButton from '../components/MainButton';
import NumberContainer from '../components/NumberContainer';
import Colors from '../constants/colors'
import Icon from 'react-native-vector-icons/Ionicons';
import defaultStyles from '../constants/default-styles';
import BodyText from '../components/BodyText';
const generateRandomBetween=(min,max,exlude)=>{
min = Math.ceil(min)
max =Math.floor(max);
const randNum = Math.floor( Math.random() * (max-min))+min;
 if(randNum===exlude){
     return generateRandomBetween(min,max,exlude)
     
 }
 else
 return randNum

};
const GameScreen =(props)=>{
const initialGuess =generateRandomBetween(1,100,props.userChoice);

const [currentGuess,setCurrentGuess]=useState(initialGuess);
const currentLow=useRef(1);
const currentHigh=useRef(100);
const [pastGuesses,setPastGuesses]=useState([initialGuess])
const {userChoice,onGameOver}=props

const nextGuessHandle = (direction)=>{
    console.log('lower')

if((direction ==='lower' && currentGuess <props.userChoice)||(direction ==='greater' &&currentGuess >props.userChoice))
{
    
    Alert.alert('Don\'t lie ','You know that is wrong...',[{text:'Sorry!',style:'cancel'}]);
return;

}
if(direction==='lower')
{
currentHigh.current=currentGuess;
console.log('lower')

}else
{
currentLow.current=currentGuess;

}
const nextNum = generateRandomBetween(currentLow.current,currentHigh.current,currentGuess);
setCurrentGuess(nextNum);
//setRounds(curRounds=>curRounds+1)
setPastGuesses(currPastGuesses=>[nextNum,...currPastGuesses])
}    
    useEffect(()=>{
        if(currentGuess===userChoice)
        {
            onGameOver(pastGuesses.length)
        }
    },[currentGuess,userChoice,onGameOver])
const renderListItem=(value,numOfRounds)=>{
    return (<View key={numOfRounds} style={styles.listItem}>
        <BodyText >#{numOfRounds}</BodyText>
        
        <Text >{value}</Text>
        </View>);
}
    return<View style={styles.screen}>
        <Text style={defaultStyles.bodyText}>Opponent's Guess</Text>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card style={styles.buttonContainer}>
            <MainButton  onClick={()=>{nextGuessHandle('lower')
        }}> <Icon size={24} color="white"  name="remove" />
        </MainButton>
            <MainButton  onClick={()=>{nextGuessHandle('greater')}}>
            <Icon size={24} color="white"  name="add" />
            </MainButton>

        </Card>
        <View style={styles.listContainer}>
        <ScrollView contentContainerStyle={styles.list}>
            {pastGuesses.map((guess,index)=>renderListItem(guess,index+1))}
        </ScrollView>
        </View>
    </View>
}

export default GameScreen;
const styles =StyleSheet.create({
screen:{
    flex:1,
    padding:10,
    alignItems:'center'
},
buttonContainer:{
    flexDirection:"row",
    justifyContent:'space-around',
    
    marginTop:20,
    width:350,
    maxWidth:'90%'
},
listItem:{
borderColor:'black',
padding:10,
marginVertical:10,
backgroundColor:'white',
borderWidth:1,
width:'80%',
flexDirection:'row',
justifyContent:'space-between'
},
listContainer :{
    flex:1,
    width:'60%',
},
list:{
    alignItems:'center',
    flexGrow:1
}
})