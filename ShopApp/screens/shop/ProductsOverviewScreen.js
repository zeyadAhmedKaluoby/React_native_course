import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { FlatList,Text } from 'react-native'
import ProductItem from '../../components/shop/ProductItem'
import { addToCart } from '../../store/actions/cart'



export default ProductsOverviewScreen=(props)=>{
    const products = useSelector(state=>state.products.availableProducts)
    const dispatch = useDispatch();


    return<FlatList data={products} keyExtractor={(item,index)=>{
        return item.id
    }}
    renderItem={itemData=>{
        return<ProductItem image={itemData.item.imageUrl} 
        title={itemData.item.title}
        price={itemData.item.price}
        onViewDetail={()=>{
            props.navigation.navigate(
                {routeName:'ProductDetail',params:{
                    productId:itemData.item.id,
                    productTitle:itemData.item.title

                }})
        }}
        onAddToCart={()=>{
            dispatch(addToCart());
        }}

         />
    }}
    />
}

ProductsOverviewScreen.navigationOptions={
    headerTitle:'Products Overview'
}