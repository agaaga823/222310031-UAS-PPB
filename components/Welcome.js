import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import backgroundImage from '../assets/Bckground.jpg'; 

export default function Welcome({ navigation }){
    return (
        <ImageBackground source={backgroundImage} style={styles.background} >
            <SafeAreaView style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.header}>Selamat Datang</Text>
                    <Text style={styles.headerSubtitle}>"Sampah Bukan Masalah, Tetapi Sebuah Peluang"</Text>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={[styles.title, styles.textOutline]}>ReSis</Text>
                    <Text style={[styles.subtitle, styles.textOutline]}>Recycle Assistant</Text>
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.prompt}>Ayo Cari Sampahmu!</Text>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("MainScreen")}>
                        <Text style={styles.buttonText}>Masuk</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerContainer: {
        alignItems: 'center',
        marginTop: 50, // Move "Selamat Datang" higher
        marginBottom: 30, // Adjust spacing
    },
    header: {
        fontSize: 40,
        color: 'black',
        marginBottom: 10,
    },
    headerSubtitle: {
        fontSize: 14,
        color: 'black',
        textAlign: 'center',
    },
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    title: {
        fontSize: 130,
        color: 'black',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
    },
    contentContainer: {
        alignItems: 'center',
        marginBottom: 50    , 
    },
    prompt: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        marginVertical: 20,
    },
    button: {
        borderWidth: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        width: 250,
        borderRadius: 6,
        height: 40,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
    },
    textOutline: {
        textShadowColor: 'rgba(0, 0, 0, 3)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 1,
    }
});
