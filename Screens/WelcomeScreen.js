import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Lato_700Bold, Lato_400Regular } from '@expo-google-fonts/lato'
import Database from '../storage/Database';

export default function WelcomeScreen({navigation}){

    let [fontsLoaded] = useFonts({
        Lato_700Bold, Lato_400Regular
    })

    React.useEffect(async () => {

        await Database.createDatabase();

        //TODO: clearUsersTable is for testing purposes only, remove on release!
        //await Database.clearUsersTable();

    }, [] );

    if(!fontsLoaded)
        return (<AppLoading/>);
    else return(

        <View style={styles.container}>

            <Image 
                source={require('./../assets/logo.jpg')}
                style={styles.welcomeImage}
                resizeMode="contain"/>


            <Pressable style={styles.defaultButton} onPress={() => {navigation.navigate('SignUp')}}>
                <Text style={styles.defaultButtonText}>Sign up for Rebecca</Text>
            </Pressable>

            <Pressable style={[styles.defaultButton, styles.logInButton]} onPress={() => {navigation.navigate('LogIn')}}>
                <Text style={[styles.defaultButtonText, styles.logInButtonText]}>I already have an account</Text>
            </Pressable>

        </View>

    )

}

const styles = StyleSheet.create({

    container: {

        flex: 1,
        backgroundColor: "#ffffff",
        alignItems: "center",
        justifyContent: 'center'

    },

    welcomeImage: {

        width: "100%",
        height: 300,
        marginTop: 20,
        marginBottom: 20,
        alignSelf: 'stretch'

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

    logInButton: {
        backgroundColor: '#fff',
        borderWidth: 1.5,
        borderColor: '#ffc0cb'
    },

    defaultButtonText: {
        fontSize: 20,
        lineHeight: 21,
        letterSpacing: 0,
        color: '#fff',
        fontFamily: 'Lato_400Regular'
    },

    logInButtonText: {
        color: '#ffc0cb'
    }

});