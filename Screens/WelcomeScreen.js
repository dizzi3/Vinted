import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Lato_700Bold, Lato_400Regular } from '@expo-google-fonts/lato'

export default function WelcomeScreen(){

    let [fontsLoaded] = useFonts({
        Lato_700Bold, Lato_400Regular
    })

    if(!fontsLoaded)
        return (<AppLoading/>);
    else return(

        <View style={styles.container}>

            <Text style={styles.welcomeText}>
                Sell what you don't need
            </Text>

            <Image 
                source={require('./../assets/jordans.jpg')}
                style={styles.welcomeImage}
                resizeMode="contain"/>


            <Pressable style={styles.buttonStyle} onPress={onLogIn}>
                <Text style={styles.buttonText}>Log in</Text>
            </Pressable>

            <Pressable style={styles.buttonStyle} onPress={onSignIn}>
                <Text style={styles.buttonText}>Sign in</Text>
            </Pressable>

        </View>

    )

}

const onLogIn = () => {
    console.log('loggin in...');
}

const onSignIn = () => {
    console.log('signing in...');
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
        fontSize: 28,
        letterSpacing: .8,
        fontFamily: "Lato_700Bold",

    },

    welcomeImage: {

        width: "100%",
        height: 300,
        marginTop: 20,
        marginBottom: 20,
        alignSelf: 'stretch'

    },

    buttonStyle: {

        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 13,
        elevation: 2,
        backgroundColor: '#00a4ff',
        marginTop: 15

    },

    buttonText: {
        fontSize: 20,
        lineHeight: 21,
        letterSpacing: 1,
        color: 'white',
        fontFamily: 'Lato_400Regular'
    }

});