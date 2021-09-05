import React from 'react'
import {View,Text,StyleSheet, TextInput, Button} from 'react-native';
const Card=props=>{
    return (<View style={{...styles.card,...props.style}}>
{props.children}
    </View>);
}
export default Card
const styles =StyleSheet.create({
    card:{

justifyContent:'center',
alignItems:'center',
     shadowColor:'black',
     shadowOffset:{width:0,height:2},
     shadowRadius:6,
     shadowOpacity:.8,
     elevation:2,
     backgroundColor:'white',
     borderRadius:20
     ,padding:10

    },
})