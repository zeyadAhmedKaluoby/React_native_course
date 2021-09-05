import React from 'react'
import {View,Text,StyleSheet, TouchableOpacity}from 'react-native'
import Colors from '../constants/colors'

const MainButton =(props)=>{

    return(
    <TouchableOpacity
    activeOpacity={.6}
    onPress={
        props.onClick
    }>
        <View style={styles.button}>
    <Text style={styles.buttonText}>{props.children}</Text></View></TouchableOpacity>
    )
}

export default MainButton;
const styles =StyleSheet.create({

button:{
backgroundColor:Colors.primary,
paddingHorizontal:30,
paddingVertical:12

},
buttonText:{
    fontFamily:'Lato-Bold'
    ,color:'white',
    fontSize:18
    }
})