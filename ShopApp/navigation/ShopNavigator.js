import { Button, Platform, View } from 'react-native'
import {createAppContainer,createDrawerNavigator, createStackNavigator, createSwitchNavigator, DrawerItems, SafeAreaView}from'react-navigation'
import { useDispatch } from 'react-redux'
import React from 'react'
import Colors from '../constants/Colors'
import CartScreen from '../screens/shop/CartScreen'
import OrdersScreen from '../screens/shop/OrdersScreen'
import ProductDetailScreen from '../screens/shop/ProductDetailScreen'
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen'
import StartupScreen from '../screens/StartupScreen'
import AuthScreen from '../screens/user/AuthScreen'
import EditProductScreen from '../screens/user/EditProductScreen'
import UserProductScreen from '../screens/user/UserProductScreen'
import { logout } from '../store/actions/auth'

const defaultNavigation={
    headerStyle:{
        backgroundColor:  Colors.primary
    },
    headerTintColor:'white'
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
    

       

const AuthNavigator = createStackNavigator({
    Auth:AuthScreen
},
{defaultNavigationOptions:defaultNavigation}

)

const ShopNavigator = createDrawerNavigator({
    Products:productNavigator,
    Orders:OrdersNavigator,
    Admin:AdminNavigator
},{
    contentOptions:{
        activeTintColor:Colors.primary
    },
    contentComponent:props=>{
        const dispatch=useDispatch()
        return<View style={{flex:1,padding:10}}> 
            <SafeAreaView forceInset={{top:'always',horizontal:'never'}}>
                <DrawerItems {...props}/>
                <Button title="Logout" color ={Colors.primary} onPress={
                    ()=>{
                        console.log(props)
                        try{
                        dispatch(logout())
                        
                        }catch(er)
                    {
                        console.log('error')
                        console.log(er)                    }
                    }
                }/>

            </SafeAreaView>
        </View>
    }
})

const MainNavigator = createSwitchNavigator({
    Startup: StartupScreen,
    Auth: AuthNavigator,
    Shop : ShopNavigator
})


export default createAppContainer(MainNavigator);