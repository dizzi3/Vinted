
import {  View, Text, TextInput} from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Lato_700Bold, Lato_400Regular } from '@expo-google-fonts/lato'
import { Camera } from 'expo-camera';
import { useState, useEffect } from 'react';


export default function ListAProductScreen(){

    let [fontsLoaded] = useFonts({
        Lato_700Bold, Lato_400Regular
    })

   
    const [price, onPriceChanged] = useState('');
    const [hasPermission, setHasPermission] = useState(null);
    

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

            
        </View>

    )

}

