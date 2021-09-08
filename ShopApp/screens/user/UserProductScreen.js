import React from "react"
import { Alert,FlatList,View,Button } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import ProductItem from "../../components/shop/ProductItem"
import Colors from "../../constants/Colors"
import { deleteProduct } from "../../store/actions/products"
import { HeaderButtons ,Item} from 'react-navigation-header-buttons'
import HeaderButton from '../../components/UI/HeaderButton'

export default UserProductsScreen=(props)=>{
    
    const userProducts = useSelector(state=>state.products.userProducts)
    const dispatch=useDispatch()
    const deleteHandler=(id)=>{
        Alert.alert('Are you sure?','Do you really want to delete this item',
        [{text:'No',style:'default'},
    {text:'Yes',style:'destructive' ,onPress:()=>{
        dispatch(deleteProduct(id))
        
    }}])
    }
    return (<FlatList 
    
        data={userProducts} 
        keyExtractor={item=>item.id}
        renderItem={
            itemData=>(<ProductItem
            image={itemData.item.imageUrl}
            title={itemData.item.title}
            price={itemData.item.price}
       
            >
 <View><Button color={Colors.primary}
  title='Edit' onPress={()=>{
            props.navigation.navigate('EditProduct',
            {productId:itemData.item.id})

        }}></Button></View>
             <View>
                 <Button 
                 color={Colors.primary}
                  title='Delete'
                   onPress ={()=>deleteHandler(itemData.item.id)}></Button></View>
            </ProductItem>)
        }


    />)
}


UserProductsScreen.navigationOptions=navData=>{
    return{
        headerTitle: 'User Products',
        headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title='add' iconName='ios-create'
         onPress={()=>{
             navData.navigation.navigate({routeName:'EditProduct'})
         }}/>
    </HeaderButtons>,
    headerLeft:<HeaderButtons HeaderButtonComponent={HeaderButton}>
    <Item title='Menu' iconName='ios-menu'
     onPress={()=>{
         navData.navigation.toggleDrawer()
     }}/>
</HeaderButtons>
    }
}