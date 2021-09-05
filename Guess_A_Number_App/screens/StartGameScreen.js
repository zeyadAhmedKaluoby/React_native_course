import React, { useState } from 'react'
import Card from '../components/Card'
import {View,Text,StyleSheet, TextInput, Button, TouchableWithoutFeedback, Keyboard, TouchableWithoutFeedbackBase} from 'react-native';
import Colors from '../constants/colors'
import Input from '../components/Input';
import { Alert } from 'react-native';
import NumberContainer from '../components/NumberContainer';
const StartGameScreen =()=>{
    
    const [val,setVal]=useState('')
    const [confirmed,setConfirmed]=useState(false)
    const [selectedNum,setSelectedNum]=useState()
    let ConfirmedNumber;
    const numInpHandler =(text)=>{
        setVal(text.replace(/[^0-9]/g,''));
    }
    const resetInpHandler =()=>{
        setVal('');
        setConfirmed(false)
    }
    const confirmInpHandler =()=>{
        const sNum=        parseInt(val)
        if(isNaN(sNum ) || sNum <=0 ||sNum>99){
            Alert.alert('Invalid number','number has to be between 0 and 100',[{text:'Ok',style:'destructive',onPress:resetInpHandler}])
            return;
        }

        setConfirmed(true)
        setSelectedNum(parseInt(val))
        setVal('');
        Keyboard.dismiss();
    }

    if(confirmed)
    {
        ConfirmedNumber= 
        <Card style={styles.summaryContainer}>
            <Text>Chosen Number</Text>
                    <NumberContainer >{selectedNum}</NumberContainer>
                    <Button title='Start game'></Button>
            </Card>
    }
return(
<TouchableWithoutFeedback onPress={()=>{
    Keyboard.dismiss();
}}>
<View style={styles.screen2}>
<Text style={styles.title}>Start a New Game</Text>
<Card style={styles.inputContainer}>
    <Text>Select a Number</Text>
<Input onChangeText={numInpHandler} value={val} style ={styles.input} keyboardType='numeric' maxLength={2}/>
    <View style={styles.buttonContainer}>
      <View style={styles.button}> 
       <Button title="Reset"  onPress={resetInpHandler} color={Colors.accent}/></View>      
       <View style={styles.button}> 
        <Button title="Confirm" onPress={confirmInpHandler}color={Colors.primary}/></View>
    </View>
{ConfirmedNumber}
</Card>
</View>
</TouchableWithoutFeedback>);
}
export default StartGameScreen;

const styles=StyleSheet.create({
    screen2:{
        flex:1
        ,padding:10,
        width:'100%',
        alignItems:'center',
        
    },
    title:{fontSize:20,marginVertical:10},
    inputContainer:{
        width:300,
     maxWidth:'80%',
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',        padding:0,
        margin:0
    },
    summaryContainer:{
        marginTop:10,
        alignItems:'center'
    },
    button:{
        width:100
    },
    input:{
        height:60,
        borderBottomColor:'grey',
        borderBottomWidth:1,
        marginVertical:6,
        width:50,
        textAlign:'center'
    }
})