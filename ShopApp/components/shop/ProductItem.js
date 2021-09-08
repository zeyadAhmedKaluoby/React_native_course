import React from "react";
import {View,Text,Image,StyleSheet, ImageBackground, Button, TouchableOpacity} from 'react-native'
import Colors from "../../constants/Colors";
import Card from "../UI/Card";
const ProductItem =(props)=>{
    return<Card style={styles.product}>
        <TouchableOpacity useForeground onPress={props.onViewDetail}>
        <View style={styles.imageContainer}>
        <Image  source={{uri:props.image}} style={styles.image}/>
        </View>
        <View style={styles.details}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.price}>${props.price.toFixed(2)}</Text>
        </View>
         <View style={styles.actions}>
            {props.children}
         </View></TouchableOpacity>
    </Card> 
}

const styles = StyleSheet.create({
product:{

    height:300,
    margin:20,
    padding:15
},
image:{
    width:'100%',
    height:'100%'
},
title:{
    fontSize:18,
    marginVertical:4
},
price:{
    fontSize:14,
    color:'#888'
}
,
actions:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    height:'25%',
    
},
details:{
    alignItems:'center'
    ,height:'15%' 
    
},
imageContainer:{
    borderTopLeftRadius:20,
    borderTopRightRadius:20,

    overflow:'hidden',
    width:'100%',
    height:'60%'
}
});

export default ProductItem