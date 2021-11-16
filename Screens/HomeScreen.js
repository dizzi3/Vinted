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

        if(signup !== undefined && signup === true)
            showSignUpSuccessToast();

    });

    //TODO: for testing purposes only, delete on release
    React.useEffect(() => {
        Database.printAllUsers();
    }, [] );

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

    const MyProducts = () => {
        props.navigation.navigate('MyProducts', { userID: props.route.params.userID });
    }

    const BrowseProducts = () => {
        
    }

    const ListAProduct = () => {

    }
    

    if(!fontsLoaded)
        return (<AppLoading/>);
    else return(

        <Root theme="light" style={styles.container}>
            <View style={styles.container}>

                <Text style={styles.logo}>
                    VINTED
                </Text>

                <Pressable style={styles.defaultButton} onPress={BrowseProducts}>
                    <Text style={styles.defaultButtonText}>Browse products</Text>
                </Pressable>

                <Pressable style={styles.defaultButton} onPress={ListAProduct}>
                    <Text style={styles.defaultButtonText}>List a product</Text>
                </Pressable>

                <Pressable style={styles.defaultButton} onPress={MyProducts}>
                    <Text style={styles.defaultButtonText}>My products</Text>
                </Pressable>

                <Pressable style={styles.defaultButton} onPress={LogOut}>
                    <Text style={styles.defaultButtonText}>Log out</Text>
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

        flex: .3,
        marginTop: 20,
        fontSize: 70,
        letterSpacing: .8,
        fontFamily: "Lato_700Bold",
        color: "#fff"

    },

    defaultButton: {

        alignItems: 'center',
        justifyContent: 'center',
        width: 350,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 13,
        elevation: 2,
        backgroundColor: '#00a4ff',
        marginTop: 15

    },

    defaultButtonText: {
        fontSize: 20,
        lineHeight: 21,
        letterSpacing: 0,
        color: '#fff',
        fontFamily: 'Lato_400Regular'
    },

})