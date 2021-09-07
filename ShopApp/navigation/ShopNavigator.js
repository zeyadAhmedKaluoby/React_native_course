import { Platform } from 'react-native'
import {createAppContainer, createStackNavigator}from'react-navigation'
import Colors from '../constants/Colors'
import ProductDetailScreen from '../screens/shop/ProductDetailScreen'
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen'
const productNavigator=createStackNavigator({
    ProductsOverview:ProductsOverviewScreen,
    ProductDetail:ProductDetailScreen
},{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor: Platform.OS==='android'? Colors.primary:''
        },
        headerTintColor:Platform.OS==='android'?'white': Colors.primary
    }
})

export default createAppContainer(productNavigator);