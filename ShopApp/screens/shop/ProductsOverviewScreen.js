import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { FlatList,Platform,Text,View,Button } from 'react-native'
import ProductItem from '../../components/shop/ProductItem'
import { addToCart } from '../../store/actions/cart'
import { HeaderButtons ,Item} from 'react-navigation-header-buttons'
import HeaderButton from '../../components/UI/HeaderButton'

import Colors from '../../constants/Colors'

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
         >
                         <View><Button color={Colors.primary} title='View Details' onPress={()=>{
            props.navigation.navigate(
                {routeName:'ProductDetail',params:{
                    productId:itemData.item.id,
                    productTitle:itemData.item.title

                }})
        }}></Button></View>
             <View><Button color={Colors.primary} title='To Cart' onPress ={()=>{
            dispatch(addToCart(itemData.item));
        }}></Button></View>

         </ProductItem>
    }}
    />
}

ProductsOverviewScreen.navigationOptions=(navData)=>{
  return{
        headerTitle:'Products Overview',
    headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title='Cart' iconName='md-cart'
         onPress={()=>{
             navData.navigation.navigate({routeName:'cart'})
         }}/>
    </HeaderButtons>,
    headerLeft:<HeaderButtons HeaderButtonComponent={HeaderButton}>
    <Item title='Menu' iconName='md-menu'
     onPress={()=>{
         navData.navigation.toggleDrawer()
     }}/>
</HeaderButtons>
}
}