import { Platform } from 'react-native'
import {createAppContainer,createDrawerNavigator, createStackNavigator}from'react-navigation'
import Colors from '../constants/Colors'
import CartScreen from '../screens/shop/CartScreen'
import OrdersScreen from '../screens/shop/OrdersScreen'
import ProductDetailScreen from '../screens/shop/ProductDetailScreen'
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen'
import EditProductScreen from '../screens/user/EditProductScreen'
import UserProductScreen from '../screens/user/UserProductScreen'

const defaultNavigation={
    headerStyle:{
        backgroundColor: Platform.OS==='android'? Colors.primary:''
    },
    headerTintColor:Platform.OS==='android'?'white': Colors.primary
}
const productNavigator=createStackNavigator({
    ProductsOverview:ProductsOverviewScreen,
    ProductDetail:ProductDetailScreen,
    cart:CartScreen
},{
    defaultNavigationOptions:defaultNavigation
})


const OrdersNavigator=createStackNavigator({
    Orders:OrdersScreen
},{
    defaultNavigationOptions:defaultNavigation})


const AdminNavigator=createStackNavigator({
        UserProducts:UserProductScreen,
        EditProduct:EditProductScreen
    },{
        defaultNavigationOptions:defaultNavigation})
    
const ShopNavigator = createDrawerNavigator({
    Products:productNavigator,
    Orders:OrdersNavigator,
    Admin:AdminNavigator
},{
    contentOptions:{
        activeTintColor:Colors.primary
    }
})

export default createAppContainer(ShopNavigator);