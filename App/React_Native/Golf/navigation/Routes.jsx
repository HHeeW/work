<<<<<<< HEAD
import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect, useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'
import {AuthContext} from './AuthProvider';
import AppStack from './AppStack';
import AuthStack from './AuthStack';

const Routes = () => {
    const { user, setUser } = useContext(AuthContext);
    const [initializing, setInitializing] = useState(true);

    const onAuthStateChanged = (user) => {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(()=>{
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, [])

    if(initializing) return null;

    return (
        <NavigationContainer>
            {user ? <AppStack /> : <AuthStack /> }
        </NavigationContainer>
    )
}

=======
import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect, useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'
import {AuthContext} from './AuthProvider';
import AppStack from './AppStack';
import AuthStack from './AuthStack';

const Routes = () => {
    const { user, setUser } = useContext(AuthContext);
    const [initializing, setInitializing] = useState(true);

    const onAuthStateChanged = (user) => {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(()=>{
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, [])

    if(initializing) return null;

    return (
        <NavigationContainer>
            {user ? <AppStack /> : <AuthStack /> }
        </NavigationContainer>
    )
}

>>>>>>> bbb1fe6a3e1fa9f52bf01c7f1ea65d3342320427
export default Routes