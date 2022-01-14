import React from 'react';
import { StyleSheet, View, Pressable, Text } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, AguafinaScript_400Regular } from '@expo-google-fonts/aguafina-script'
import Database from '../storage/Database';
import {Root, Toast, ALERT_TYPE } from 'react-native-alert-notification'
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
 
export default function HomeScreen(props){
 
    let [fontsLoaded] = useFonts({
        AguafinaScript_400Regular
    })
 
    const { username, password, signup, userID } = props.route.params;
 
    React.useLayoutEffect(() => {
 
        if(signup !== undefined && signup === true)
            showSignUpSuccessToast();
 
    });
 
    //TODO: for testing purposes only, delete on release
    React.useEffect(() => {
        Database.printAllUsers();
    })
 
    const showSignUpSuccessToast = () => {
 
        Toast.show({
            title: 'Sign up',
            type: ALERT_TYPE.SUCCESS,
            textBody: 'Successfully created your account! =)',
            autoClose: false,
            onPress: () => { Toast.hide(); }
        });
 
    }
 
    const LogOut = () => {
        props.navigation.navigate('WelcomeScreen');
    }
 
    const MyListings = (products) => {
        props.navigation.navigate('MyProducts', {listedProducts: products});
    }
 
    const ListAProduct = () => {
        props.navigation.navigate('ListAProduct');
    }
    
 
    if(!fontsLoaded)
        return (<AppLoading/>);
    else return(
 
        <Root theme="light" style={styles.container}>
            <View style={styles.container}>
 
                <Text style={styles.logo}>
                    Rebecca
                </Text>
 
                <Pressable style={styles.defaultButton} onPress={ListAProduct}>
                    <Text style={styles.defaultButtonText}>List a product</Text>
                </Pressable>
 
                <Pressable style={styles.defaultButton} onPress={async () => {
                        let productsJSON = await AsyncStorage.getItem('listed-products')
                        productsJSON = await( productsJSON != null ? JSON.parse(productsJSON) : null);
 
                        const products = new Array();
 
                        productsJSON.map((product) => {
                            products.push(product)
                        })
 
                        MyListings(products);
                    }}>
                    <Text style={styles.defaultButtonText}>My listings</Text>
                </Pressable>
 
                <Pressable style={[styles.defaultButton, styles.logOutButton]} onPress={LogOut}>
                    <Text style={styles.defaultButtonText}>Log out</Text>
                </Pressable>
 
            </View>
        </Root>
 
    )
 
}
 
const styles = StyleSheet.create({
 
    container: {
 
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: 'center'
 
    },
 
    logo: {
 
        flex: .3,
        marginTop: 20,
        fontSize: 100,
        letterSpacing: .8,
        fontFamily: "AguafinaScript_400Regular",
        color: "#000"
 
    },
 
    defaultButton: {
 
        alignItems: 'center',
        justifyContent: 'center',
        width: 350,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 13,
        elevation: 2,
        backgroundColor: '#ffc0cb',
        marginTop: 15
 
    },
 
    defaultButtonText: {
        fontSize: 20,
        lineHeight: 21,
        letterSpacing: 0,
        color: '#fff',
        fontFamily: 'Lato_400Regular'
    },
 
    logOutButton: {
        backgroundColor: "#ff6781"
    }
 
})