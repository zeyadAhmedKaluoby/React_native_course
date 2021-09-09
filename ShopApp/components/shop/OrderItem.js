import React,{useState} from "react";
import { Button, Text, View,StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import Card from "../UI/Card";
import CartItem from "./CartItem";
export default OrderItem = (props)=>{
    const[showDetails,setShowDetails]=useState(false)
    
    return(
        <Card style={styles.orderItem}>
            <View style={styles.summary}>
                <Text style={styles.totalAmount}>
                    ${props.amount.toFixed(2)}
                </Text>
                <Text style={styles.date}>
                    {props.date}
                </Text>

            </View>
            <Button onPress={()=>{
                setShowDetails(prevState=>!prevState)
            }} title="Show Details" color={Colors.primary}></Button>
        
        {showDetails&& <View >
            {props.items.map(cartItem=><CartItem key ={cartItem.productId}
             quantity={cartItem.quantity} amount ={cartItem.sum} title={cartItem.productTitle}/>)}
            </View>}
        </Card>
    )
}

const styles = StyleSheet.create({
    orderItem:{

        margin:20,
        padding:15
    },
    summary:{
     flexDirection:'row',
     justifyContent:'space-between',alignItems:'center',width:'100%'

        
    },
    totalAmount:{
        fontSize:16
    },
    date:{
        fontSize:16,
        color:'#888'
    }
})