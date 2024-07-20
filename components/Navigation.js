import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Logo from '../assets/Logo2.png'; 

const { width } = Dimensions.get('window');

export default function Navigation({ navigation }) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={Logo} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#b6e7ca',
    padding: 10,
    flexDirection: 'row'
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    margin: 'left',
  },
});
