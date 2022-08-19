import React, { useState, useEffect } from 'react'
import { DrawerLayoutAndroid, TouchableNativeFeedback, View } from 'react-native'

import ListDrawerLayout from './ListDrawerLayout';
import HeaderDrawerLayout from './HeaderDrawerLayout'

const Menu = (props) =>{
    const [state, setState] = useState({
        selectedItem: ''
    });
    let newItem;
    
    if(props.initialEntry){
        selectedItem = props.initialEntry;
    }else{
        selectedItem = porps.entries[0].id
    }
    useEffect(()=>{
        setState({
            selectedItem: newItem
        })
    },[]);
    const _onSelectionChange = (section) => {

    }
    const _openMenu =()=>{
        
    }
    const _renderNavigationView = () => {

    }
    const _renderContent = () => {

    }
    return(
        <DrawerLayoutAndroid
            ref={(ref)=> {_drawer = ref}}
            {...props}
            renderNavigationView = {_renderNavigationView}>
            {_renderContent()}
        </DrawerLayoutAndroid>
    )
}