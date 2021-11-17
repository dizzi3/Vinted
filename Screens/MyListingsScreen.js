import React from 'react';
import { StyleSheet, View, Pressable, Text, ScrollView, Dimensions} from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Lato_700Bold, Lato_400Regular } from '@expo-google-fonts/lato'
import Database from '../storage/Database';
import Product from '../Components/Product';

export default function MyListingsScreen(props){

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

            <Text style={styles.header}>
                My listings
            </Text>


            <View style={{height: 675}}>
                <ScrollView style={styles.scroll}>
                    <Product name="Suit" price="999" status="sold" imgSrc={require("./../assets/1.jpg")}/>
                    <Product name="Hoodie" price="150" status="sold" imgSrc={require("./../assets/2.jpg")}/>
                    <Product name="Sneakers" price="380" status="listed" imgSrc={require("./../assets/3.jpg")}/>
                    <Product name="Vans" price="99" status="listed" imgSrc={require("./../assets/4.jpg")}/>
                    <Product name="Jeans" price="249" status="sold" imgSrc={require("./../assets/5.jpg")}/>
                    <Product name="Hoodie" price="349" status="sold" imgSrc={require("./../assets/6.jpg")}/>
                    <Product name="Glasses" price="460" status="listed" imgSrc={require("./../assets/7.jpg")}/>
                    <Product name="T-Shirt" price="49" status="listed" imgSrc={require("./../assets/8.jpg")}/>
                    <Product name="Hat" price="99" status="listed" imgSrc={require("./../assets/9.jpg")}/>
                    <Product name="T-Shirt" price="149" status="sold" imgSrc={require("./../assets/10.jpg")}/>
                </ScrollView>
            </View>
            

        </View>

    )

}

const styles = StyleSheet.create({

    container: {

        flex: 1,
        backgroundColor: "#aed6ef",
        alignItems: "center",
        justifyContent: 'center',

    },

    header: {

        marginTop: 50,
        fontSize: 40,
        letterSpacing: 1,
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

    scroll: {
        flex: .1,
        height: 200,
        width: 370,
        padding: 10,
        marginTop: 30,
        borderRadius: 12
    }

})