import React,{useCallback, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { FlatList,Platform,Text,View,Button, ActivityIndicator } from 'react-native'
import ProductItem from '../../components/shop/ProductItem'
import { addToCart } from '../../store/actions/cart'
import { HeaderButtons ,Item} from 'react-navigation-header-buttons'
import HeaderButton from '../../components/UI/HeaderButton'

import Colors from '../../constants/Colors'
import { fetchProducts } from '../../store/actions/products'

export default ProductsOverviewScreen=(props)=>{
    const products = useSelector(state=>state.products.availableProducts)

    const dispatch = useDispatch();
    const [isLoading,setIsLoading]=useState(false)
    const[error,setError]=useState()

    const loadProducts=useCallback( async()=>{
        setError(null)

        try{
       await dispatch(fetchProducts());
        }
        catch(err){
                setError(err.message)
        }
        },[dispatch,setIsLoading,setError])

    useEffect(()=>{
      const willFocusSub=  props.navigation.addListener('willFocus',loadProducts,[]
        )
        return()=>{
            willFocusSub.remove()
        }

    },[loadProducts]);
    useEffect(()=>{
        setIsLoading(true)
       
        loadProducts()
       setIsLoading(false)

    },[dispatch,loadProducts])

    if(isLoading)
    {
        return <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <ActivityIndicator size='large' color={Colors.primary}/>
        </View>
    }


    if(error)
    {
        return <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text>Something happend</Text>
        </View>
    }

    if(isLoading &&products.length ===0)
    {
        return <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text>No products founded</Text>
        </View>
    }

    return<FlatList data={products}
    onRefresh={loadProducts}
    refreshing={isLoading}
    
    keyExtractor={(item,index)=>{
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