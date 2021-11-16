import React from "react";
import { StyleSheet, View, Text, Image} from 'react-native';
import { useFonts, Lato_700Bold, Lato_400Regular } from '@expo-google-fonts/lato'

const Product = (props) => {

    const name = props.name;
    const price = props.price;
    const size = props.size;

    useFonts({ Lato_700Bold, Lato_400Regular });

    return(

        <View style={styles.container}>

            <View style={styles.informationContainer}>

                <Text style={styles.defaultText}>{name}</Text>
                <Text style={styles.defaultText}>{price}</Text>
                <Text style={styles.defaultText}>{size}</Text>

            </View>

            <View style={styles.imageContainer}>

                <Image source={require('./../assets/product_test.jpg')}
                        style={styles.imageStyle}
                        resizeMode="contain"/>

            </View>

            

        </View>

    )

}

const styles = StyleSheet.create({

    container: {

        width: "80%",
        height: 170,
        backgroundColor: "#04374a",
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 12,
        flexDirection: "row"

    },

    defaultText: {
        fontSize: 20,
        letterSpacing: 0,
        color: '#fff',
        fontFamily: 'Lato_400Regular',
        padding: 2
    },

    informationContainer: {
        flex: .5,
        alignItems: "center",
        
    },

    imageContainer: {
        flex: .7,
        padding: 10
    },

    imageStyle: {
        width: "100%",
        height: "100%",
        alignSelf: "stretch",
    }

})

export default Product