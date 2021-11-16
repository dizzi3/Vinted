import React from 'react';
import { StyleSheet, View, Pressable, Text} from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Lato_700Bold, Lato_400Regular } from '@expo-google-fonts/lato'
import Database from '../storage/Database';
import Product from '../Components/Product';

export default function MyProductsScreen(props){

    let [fontsLoaded] = useFonts({
        Lato_700Bold, Lato_400Regular
    })

    const { userID } = props.route.params;

    React.useEffect(() => {
        
    }, [] );
    

    if(!fontsLoaded)
        return (<AppLoading/>);
    else return(

        <View style={styles.container}>

            <Text style={styles.logo}>
                VINTED
            </Text>

            <Product name="Jordans" price="100$" size="40"/>
            

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