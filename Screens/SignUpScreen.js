import React, { useEffect } from 'react';
import { StyleSheet, TextInput, View, Pressable, Text, Dimensions} from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, AguafinaScript_400Regular } from '@expo-google-fonts/aguafina-script'
import { useNavigation } from '@react-navigation/native';
import Database from '../storage/Database';
import {Root, Toast, ALERT_TYPE } from 'react-native-alert-notification'

export default function SignUpScreen(){

    const [username, onUsernameChanged] = React.useState('');
    const [password, onPasswordChanged] = React.useState('');

    const navigation = useNavigation()

    let [fontsLoaded] = useFonts({
        AguafinaScript_400Regular
    })

    const SignUp = () => {
        Database.addUser(username, password, SignUpCallback);
    }

    const SignUpCallback = (success, userID) => {

        if(success)
            navigation.navigate('HomeScreen', { username: username, password: password, signup: true, userID: userID });
        else showErrorToast();

    }

    const showErrorToast = () => {
        Toast.show({
            title: 'Sign up',
            type: ALERT_TYPE.DANGER,
            textBody: 'Incorrect username or password',
            autoClose: false,
            onPress: () => { Toast.hide(); }
        })
    }

    if(!fontsLoaded)
        return (<AppLoading/>);
    else return(

        <Root theme="light" >
            <View style={styles.container}>

                <Text style={styles.logo}>
                    Rebecca
                </Text>

                <TextInput 
                    placeholder = 'Username'
                    style={styles.textInput}
                    onChangeText={onUsernameChanged}
                    placeholderTextColor='#000000'
                    underlineColorAndroid='transparent'
                    autoCorrect={false}
                    spellCheck={false}
                    keyboardType="visible-password"
                />

                <TextInput
                    placeholder = "Password"
                    secureTextEntry={true}
                    style={styles.textInput}
                    onChangeText={onPasswordChanged}
                    placeholderTextColor='#000000'
                    underlineColorAndroid='transparent'
                    autoCorrect={false}
                    spellCheck={false}
                />

                <Pressable style={styles.signUpButton} onPress={SignUp}>
                    <Text style={styles.signInButtonText}>Sign up</Text>
                </Pressable>            


            </View>
        </Root>

    )

}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        alignItems: "center",
        justifyContent: 'center'
    },

    logo: {
        marginTop: 20,
        fontSize: 70,
        letterSpacing: .8,
        fontFamily: "AguafinaScript_400Regular",
        color: "#000000",
        marginBottom: 35
    },

    textInput: {
        height: 45,
        width: 250,
        margin: 12,
        padding: 10,
        color: "#000000",
        fontSize: 22,
        borderBottomColor: "#ffc0cb",
        borderBottomWidth: 2,
        fontFamily: 'Lato_400Regular',
        letterSpacing: .2,
    },

    signUpButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 320,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 13,
        elevation: 2,
        backgroundColor: '#ffc0cb',
        marginTop: 40
    },

    signInButtonText: {
        color: '#fff',
        fontSize: 20,
        lineHeight: 21,
        letterSpacing: .5,
        color: '#fff',
        fontFamily: 'Lato_400Regular'
    }

})