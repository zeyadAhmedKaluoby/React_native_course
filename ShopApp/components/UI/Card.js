import React from "react";
import {View,StyleSheet} from 'react-native'

export default Card =(props)=>{
    return <View
    style={{...styles.card,...props.style}}
    >{props.children}</View>
}

const styles = StyleSheet.create({
    card:{
        elevation:5,
        borderRadius:20,
        backgroundColor:'white'

    }
})