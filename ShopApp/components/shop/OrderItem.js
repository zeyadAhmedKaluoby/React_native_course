import React from "react";
import { Button, Text, View,StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
export default OrderItem = (props)=>{
    return(
        <View style={styles.orderItem}>
            <View style={styles.summary}>
                <Text style={styles.totalAmount}>
                    ${props.amount.toFixed(2)}
                </Text>
                <Text style={styles.date}>
                    ${props.date}
                </Text>

            </View>
            <Button title="Show Details" color={Colors.primary}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    orderItem:{
        elevation:4
        ,borderRadius:10,
        backgroundColor:'white',
        height:100,
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