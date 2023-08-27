import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Image } from 'react-native';

const comedorITCRImage = require('./assets/images/comedorITCR.png');
const laDeportivaImage = require('./assets/images/LaDeportiva.png');
const sodaDelLagoImage = require('./assets/images/SodaDelLago.png');

export const ComedorContext = React.createContext({
    comedorActual: null,
    setComedorActual: () => {}
});

export default function ComedoresScreen({ navigation }) {
    const { setComedorActual } = React.useContext(ComedorContext);


    const handleComedorSelect = (comedor) => {
        setComedorActual(comedor);
        navigation.navigate('Menu', { day: 'LUN' });
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.button, styles.buttonITCR]} onPress={() => {
                setComedorActual('ITCR');
                navigation.navigate('Menu');
            }}>
                <Image source={comedorITCRImage} style={styles.imageStyle} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.buttonDeportiva]} onPress={() => {
                setComedorActual('LaDeportiva');
                navigation.navigate('Menu');
            }}>
                <Image source={laDeportivaImage} style={styles.imageStyle} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.buttonLago]} onPress={() => {
                setComedorActual('SodaDelLago');
                navigation.navigate('Menu');
            }}>
                <Image source={sodaDelLagoImage} style={styles.imageStyle} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    button: {
        marginBottom: 20,
        padding: 0,
        width: '90%',
        height: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
    },
    buttonITCR: {
        backgroundColor: '#4A5899',
    },
    buttonDeportiva: {
        backgroundColor: '#DDD8B8',
    },
    buttonLago: {
        backgroundColor: '#B3CBB9',
    },
    imageStyle: {
        width: 325,
        height: 325,
        resizeMode: 'contain',
    },
});