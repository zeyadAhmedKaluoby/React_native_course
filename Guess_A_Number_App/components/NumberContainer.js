import React from 'react'
import {View,Text,StyleSheet}from 'react-native'
import Colors from '../constants/colors'

const NumberContainer =(props)=>{

    return<View style={styles.container}>
    <Text style={styles.number}>{props.children}</Text>
</View>
}

export default NumberContainer;
const styles =StyleSheet.create({
container:{
    borderColor:Colors.accent,
    borderWidth:2,
    borderRadius:20,
    padding:20,
    marginVertical:20,
    alignItems:'center',
    justifyContent:'center',
    
},
number:{
    color:Colors.accent,
    fontSize:20
}
})