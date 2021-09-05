import React from 'react'
import {View,Text,StyleSheet}from 'react-native'
import Colors from '../constants/colors'

const TitleText =(props)=>{

    return<Text style={styles.title}>{props.children}</Text>
}

export default TitleText;
const styles =StyleSheet.create({

    title:{
fontFamily:'Lato-Bold'

}
})