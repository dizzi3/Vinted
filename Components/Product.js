import React from "react";
import { StyleSheet, View, Text, Image} from 'react-native';
import { useFonts, Lato_700Bold, Lato_400Regular } from '@expo-google-fonts/lato'

const Product = (props) => {

    const name = props.name;
    const price = props.price;
    const imgSrc = props.imgSrc;
    const status = props.status;

    useFonts({ Lato_700Bold, Lato_400Regular });

    return(

        <View style={styles.container}>

            <View style={styles.informationContainer}>

                <Text style={[styles.defaultText, styles.nameStyle]}>{name}</Text>
                <Text style={[styles.defaultText, styles.priceStyle]}>{price}$</Text>
                <Text style={[styles.defaultText, 
                            status === "sold" ? styles.soldStyle : styles.listedStyle]}>
                    {status}
                </Text>

            </View>

            <View style={styles.imageContainer}>

                <Image source={imgSrc}
                        style={styles.imageStyle}
                        resizeMode="contain"/>

            </View>

            

        </View>

    )

}

const styles = StyleSheet.create({

    container: {

        height: 170,
        backgroundColor: "#04374a",
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 12,
        flexDirection: "row",
        marginBottom: 10
    },

    informationContainer: {
        flex: .5,
        alignItems: "center",
    },

    defaultText: {
        fontSize: 25,
        letterSpacing: 0,
        color: '#fff',
        fontFamily: 'Lato_400Regular',
        padding: 2
    },

    nameStyle: {
        fontSize: 29,
        marginBottom: 8,
        fontFamily:"Lato_700Bold"
    },

    priceStyle: {
        color: "#fcfcd4"
    },

    imageContainer: {
        flex: .4,
        padding: 10
    },

    imageStyle: {
        width: "100%",
        height: "100%",
        alignSelf: "stretch",
    },
    
    soldStyle: {
        color: "#f59e9d"
    },

    listedStyle: {
        color: "#00c6ae"
    }

})

export default Product