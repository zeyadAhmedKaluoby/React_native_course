import React from "react";
import {View,Text,FlatList,Button,StyleSheet}from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import Colors from "../../constants/Colors";
import CartItem from "../../components/shop/CartItem";
import { removeFromCart } from "../../store/actions/cart";
import { addOrder } from "../../store/actions/oreder";

export default CartScreen =(props)=>{
    
    const cartTotalAmount = useSelector(state=>state.cart.totalAmount)
    const dispatch = useDispatch()
    const cartItems = useSelector(state=>{
        const transformedCartItems=[];
        for(const key in state.cart.items)
    {
        transformedCartItems.push({
            productId:key,
            productTitle:state.cart.items[key].productTitle,
            productPrice:state.cart.items[key].productPrice,
            quantity:state.cart.items[key].quantity,
            sum:state.cart.items[key].sum

        })
    }
    return transformedCartItems.sort();
    })
    
    
    return <View style={styles.screen}>
        <View style={styles.summary}>
        <Text style={styles.summaryText}>
            Total :<Text style={styles.ammount}>${cartTotalAmount.toFixed(2)}</Text></Text>
        <Button color='orange' title="Order Now" onPress={
            ()=>{
                dispatch(addOrder(cartItems,cartTotalAmount))
            }
        } disabled={cartItems.length===0}></Button>
</View>
<FlatList data={cartItems} keyExtractor={item=>item.id}

renderItem={
    (itemData)=><CartItem quantity={itemData.item.quantity}
         title={itemData.item.productTitle} 
         amount={itemData.item.sum}
         onRemove={()=>{
             dispatch(removeFromCart(itemData.item.productId))
         }}/>
    }
/>
</View>
}

const styles = StyleSheet.create({
screen:{marginVertical:20},
summary:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom:20,
    elevation:3
},
summaryText:{
    fontSize:18
},
ammount:{
    color:Colors.accent
}
})


CartScreen.navigationOptions={
    headerTitle:'Your Cart'
}