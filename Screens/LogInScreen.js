import React, { useEffect } from 'react';
import { StyleSheet, TextInput, View, Pressable, Text} from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Lato_700Bold, Lato_400Regular } from '@expo-google-fonts/lato'
import { useNavigation } from '@react-navigation/native';
import {Toast, Root, ALERT_TYPE} from 'react-native-alert-notification'
import Database from '../storage/Database'

export default function LogInScreen(){

    const [username, onUsernameChanged] = React.useState('');
    const [password, onPasswordChanged] = React.useState('');

    const navigation = useNavigation()

    let [fontsLoaded] = useFonts({
        Lato_700Bold, Lato_400Regular
    })

    const LogIn = () => {
        Database.searchForUser(username, password, LogInCallback);
    }

    const LogInCallback = (success, userID) => {

        if(success)
            navigation.navigate('HomeScreen', { username: username, password: password, userID: userID })   
        else{
            Toast.show({
                title: 'Log in',
                type: ALERT_TYPE.DANGER,
                textBody: 'Incorrect username or password',
                autoClose: false,
                onPress: () => { Toast.hide() }
            })
        }

    }

    if(!fontsLoaded)
        return (<AppLoading/>);
    else return(

        <Root theme="light" >
            <View style={styles.container}>

                <Text style={styles.logo}>
                    VINTED
                </Text>

                <TextInput 
                    placeholder = 'Username'
                    style={styles.textInput}
                    onChangeText={onUsernameChanged}
                    placeholderTextColor='#fff'
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
                    placeholderTextColor='#fff'
                    underlineColorAndroid='transparent'
                    autoCorrect={false}
                    spellCheck={false}
                />

                <Pressable style={styles.logInButton} onPress={LogIn}>
                    <Text style={styles.logInButtonText}>Log in</Text>
                </Pressable>            


            </View>
        </Root>

    )

}


const styles = StyleSheet.create({

    container: {

        flex: 1,
        backgroundColor: "#aed6ef",
        alignItems: "center",
        justifyContent: 'center'

    },

    logo: {
        marginTop: 20,
        fontSize: 70,
        letterSpacing: .8,
        fontFamily: "Lato_700Bold",
        color: "#fff",
        marginBottom: 35
    },

    textInput: {
        height: 45,
        width: 250,
        margin: 12,
        padding: 10,
        color: "#fff",
        fontSize: 22,
        borderBottomColor: "#00a4ff",
        borderBottomWidth: 2,
        fontFamily: 'Lato_700Bold',
        letterSpacing: .2,
    },

    logInButton: {

        alignItems: 'center',
        justifyContent: 'center',
        width: 320,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 13,
        elevation: 2,
        backgroundColor: '#00a4ff',
        marginTop: 45

    },

    logInButtonText: {
        color: '#fff',
        fontSize: 20,
        lineHeight: 21,
        letterSpacing: .5,
        color: '#fff',
        fontFamily: 'Lato_400Regular'
    }

})