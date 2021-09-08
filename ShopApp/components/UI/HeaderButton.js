import {HeaderButton}from 'react-navigation-header-buttons'
import Colors from "../../constants/Colors";
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
export default CustomHeaderButton=(props)=>{
    return <HeaderButton {...props}
    IconComponent={Icon} 
    iconSize={23} 
    color={'white'}
    />
}