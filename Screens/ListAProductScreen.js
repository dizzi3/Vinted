
import {  View, Text, TextInput} from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Lato_700Bold, Lato_400Regular } from '@expo-google-fonts/lato'
import { Camera } from 'expo-camera';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ListAProductScreen(){

    let [fontsLoaded] = useFonts({
        Lato_700Bold, Lato_400Regular
    })

   
    const [price, onPriceChanged] = useState('');
    const [hasPermission, setHasPermission] = useState(null);
    
    const [hasPermission, setHasPermission] = useState(null);
    const camera = useRef(null);
    const [pictureTaken, setPictureTaken] = useState(false);
    const [photo, setPhoto] = useState(null);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
          })();
    }, [] );
    
    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    if(!fontsLoaded)
        return (<AppLoading/>);
    else return(

        <View style={styles.container}>

            <Text style={styles.header}>
                List a product
            </Text>

            <TextInput 
                placeholder = 'Name'
                style={styles.textInput}
                onChangeText={onNameChanged}
                placeholderTextColor='#fff'
                underlineColorAndroid='transparent'
                autoCorrect={false}
                spellCheck={false}
                keyboardType="visible-password"
            />

            <TextInput 
                placeholder = 'Price'
                style={styles.textInput}
                onChangeText={onPriceChanged}
                onEndEditing={() => {
                    let buffer = price.slice();
                    buffer.replace("$", "")
                    buffer.concat('$');
                    onPriceChanged(buffer + '$');
                }}
                value={price}
                placeholderTextColor='#fff'
                underlineColorAndroid='transparent'
                autoCorrect={false}
                spellCheck={false}
                keyboardType="visible-password"
            />

{!pictureTaken ? 
                <Camera style={styles.camera} ref={camera} type={Camera.Constants.Type.back}>
                    <View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={async () => {
                            if (camera) {
                                let photo = await camera?.current?.takePictureAsync();
                                await setPhoto(photo);
                                setPictureTaken(true);
                            }
                        }}>
                        <Text>Take pic</Text>
                    </TouchableOpacity>
                    </View>
                </Camera>
            : <Image
            style={styles.image}
            source={{
              uri: photo?.uri,
            }}
          />}
 
            <Pressable style={styles.defaultButton} onPress={async () => {
                if(photo && photo.uri){
 
                    try {
                        let productsJSON = await AsyncStorage.getItem('listed-products')
                        productsJSON = productsJSON != null ? JSON.parse(productsJSON) : null;
                        
                        if(productsJSON === null || productsJSON === '')
                            productsJSON = JSON.parse('[]');
 
                        productsJSON.push({
                            'name': name,
                            'price': price,
                            'status': 'listed',
                            'photoUri': photo.uri
                        })
 
                        await AsyncStorage.setItem('listed-products', JSON.stringify(productsJSON))
 
                    } catch(e) {
                        console.log(e)
                    }
                }
            }}>
                <Text style={styles.defaultButtonText}>Add</Text>
            </Pressable> 
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
 
    camera: {
        flex: .8,
        width: '80%',
    },
 
    image: {
        width: 300,
        height: 300
    }
})
       

