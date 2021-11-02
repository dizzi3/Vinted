import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Lato_700Bold, Lato_400Regular } from '@expo-google-fonts/lato'

export default function WelcomeScreen({navigation}){

    let [fontsLoaded] = useFonts({
        Lato_700Bold, Lato_400Regular
    })

    if(!fontsLoaded)
        return (<AppLoading/>);
    else return(

        <View style={styles.container}>

            <Text style={styles.welcomeText}>
                VINTED
            </Text>

            <Image 
                source={require('./../assets/jordans.jpg')}
                style={styles.welcomeImage}
                resizeMode="contain"/>


            <Pressable style={styles.defaultButton} onPress={() => {navigation.navigate('SignUp')}}>
                <Text style={styles.defaultButtonText}>Sign up for Vinted</Text>
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
        backgroundColor: "#aed6ef",
        alignItems: "center",
        justifyContent: 'center'

    },

    welcomeText: {

        marginTop: 20,
        fontSize: 70,
        letterSpacing: .8,
        fontFamily: "Lato_700Bold",
        color: "#fff"

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
        width: 380,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 13,
        elevation: 2,
        backgroundColor: '#00a4ff',
        marginTop: 15

    },

    logInButton: {
        backgroundColor: '#fff',
        borderWidth: 1.5,
        borderColor: '#00a4ff'
    },

    defaultButtonText: {
        fontSize: 20,
        lineHeight: 21,
        letterSpacing: 0,
        color: '#fff',
        fontFamily: 'Lato_400Regular'
    },

    logInButtonText: {
        color: '#00a4ff'
    }

});