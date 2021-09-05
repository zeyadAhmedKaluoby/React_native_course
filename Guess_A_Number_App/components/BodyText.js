import React from 'react'
import {View,Text,StyleSheet}from 'react-native'
import Colors from '../constants/colors'

const BodyText =(props)=>{

    return<Text style={styles.body}>{props.children}</Text>
}

export default BodyText;
const styles =StyleSheet.create({

body:{
fontFamily:'Lato-Bold'

}
})