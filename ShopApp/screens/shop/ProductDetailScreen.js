import React, { useEffect } from "react";
import{View , Text,Button,Image,ScrollView,StyleSheet} from 'react-native'
import { useSelector } from "react-redux";
import Colors from "../../constants/Colors";
import { addToCart } from "../../store/actions/cart";


export default ProductDetailScreen=(props)=>{

    const productId = props.navigation.getParam('productId')
    const dispatch = useDispatch();



    const selectedProduct=useSelector(state=>{
        return state.products.availableProducts
        .find(prod=>prod.id===productId);

    });
    return<ScrollView>
        <Image source={{uri:selectedProduct.imageUrl}} style={styles.image}/>
        <View style={styles.actions}>
        <Button title='Add to cart' color={Colors.primary} onPress={()=>{
dispatch(addToCart())
        }}/>
        </View>
        <Text style={styles.price}>${selectedProduct.price}</Text>
        <Text style={styles.description}>${selectedProduct.description }</Text>

    </ScrollView>
}

const styles = StyleSheet.create({
    image:{width:'95%',height:300},
    price:{
        fontSize:20,
        color:'#888',
        textAlign:'center',
        marginVertical:10
    },
    description:{
        fontSize:14,
        textAlign:'center'
    },
    actions:{
        alignItems:'center',
        marginTop:10
    }
});
ProductDetailScreen.navigationOptions=(navigationData)=>{
    const productTitle =navigationData.navigation.getParam('productTitle')
    return{
        headerTitle:productTitle
    }
}