import React from 'react';
import { StyleSheet, View, Pressable, Text} from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Lato_700Bold, Lato_400Regular } from '@expo-google-fonts/lato'
import Database from '../storage/Database';
import {Root, Toast, ALERT_TYPE } from 'react-native-alert-notification'

export default function HomeScreen(props){

    let [fontsLoaded] = useFonts({
        Lato_700Bold, Lato_400Regular
    })

    const { username, password, signup } = props.route.params;
    
    React.useLayoutEffect(() => {
        //TODO: for testing purposes only, delete on release
        Database.printAllUsers();

        if(signup !== undefined && signup === true)
            showSignUpSuccessToast();

    } );

    const showSignUpSuccessToast = () => {

        Toast.show({
            title: 'Sign up',
            type: ALERT_TYPE.SUCCESS,
            textBody: 'Successfully created your account! =)',
            autoClose: 3500,
            onPress: () => { Toast.hide(); }
        });

    }
    

    if(!fontsLoaded)
        return (<AppLoading/>);
    else return(

        <Root theme="light" style={styles.container}>
            <View style={styles.container}>

                <Text style={styles.logo}>
                    VINTED
                </Text>

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

        flex: .3,
        marginTop: 20,
        fontSize: 70,
        letterSpacing: .8,
        fontFamily: "Lato_700Bold",
        color: "#fff"

    }

})