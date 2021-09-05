import React, { useEffect, useRef, useState } from 'react'
import {View,Text,StyleSheet, Button, Image}from 'react-native'
import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'


const GameOverScreen =(props)=>{

    return<View style={styles.screen}>
        <TitleText>The Game is Over</TitleText>
        <View style={styles.imageContainer}>
        <Image 
        source={{uri:'https://pngimg.com/uploads/game_over/game_over_PNG50.png' } }
     //   source={require('../assets/images/gameover.png') } 
        style={styles.image} 
        resizeMode='cover'></Image>
        </View>
        <BodyText>Number of rounds : {props.roundsNumber}</BodyText>
        <BodyText>Number was : {props.userNumber}</BodyText>
        <Button title ="New Game" onPress={()=>{
            props.onRestart()
        }}></Button>

    </View>
}

export default GameOverScreen;
const styles =StyleSheet.create({
    image:{
        width:'80%',
        
    }
    ,
    imageContainer:{
width:'80%',
height:300,
borderRadius:200,
borderWidth:3,
borderColor:'black',
overflow:'hidden'

    },
screen:{
    flex:1,
    padding:10,
    alignItems:'center',
    justifyContent:'center'
},
buttonContainer:{
    flexDirection:"row",
    justifyContent:'space-around',
    
    marginTop:20,
    width:350,
    maxWidth:'90%'
}
})