import React from "react";
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native'
import Icon  from "react-native-vector-icons/Ionicons";

const CartItem=(props)=>{
    return <View style={styles.cartItem}>
        <Text style={styles.itemData}>
        <Text style={styles.quantity}>{props.quantity}</Text>
        <Text style={styles.title}> {props.title}</Text>
        </Text>
        <View style={styles.itemData}>
            <Text style={styles.title}>${props.amount}</Text>
           { props.deletable&& <TouchableOpacity onPress={props.onRemove} style={styles.deleteButton}>
                <Icon name ='md-trash' color='red' size={23} />
            </TouchableOpacity>}
        </View>
    </View>
};
const styles=StyleSheet.create({
cartItem:{padding:10,
backgroundColor:'white',
justifyContent:'space-between',
marginHorizontal:10},
itemData:{
    flexDirection:'row',
    alignItems:'center',
},
quantity:{
    color:'#000',
    fontSize:16
}
,
title:{
    fontSize:16
}
})
export default CartItem