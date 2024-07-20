import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { olahansampah } from './DataOlahan';

const { width } = Dimensions.get('window');

export default function DetailPage({ route, navigation }) {
  const { name, kategori, image, penjelasan, olahans } = route.params;

  const handleOlahanPress = () => {
    const olahanCategory = olahansampah.find(olahan => olahan.category === kategori)
    const olahanRelation = olahanCategory.data.filter((value) => olahans.includes(value.id));

    navigation.navigate('ListSampah', { olahanData: olahanRelation ? olahanRelation : [] });
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.kategori}>{kategori}</Text>
      <Text style={styles.penjelasan}>{penjelasan}</Text>
      <TouchableOpacity style={styles.button} onPress={handleOlahanPress}>
        <Text style={styles.buttonText}>Bisa Diolah</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 16,
  },
  image: {
    width: 0.93 * width,
    height: 0.93 * width,
    marginBottom: 16,
    borderRadius: 10,
    alignItems: 'center'
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    marginLeft: 15,
    marginRight: 15,
  },
  kategori: {
    fontSize: 16,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  penjelasan: {
    fontSize: 14,
    textAlign: 'left',
    marginLeft: 15,
    marginRight: 15,
  },
  button: {
    borderWidth: 1,
    width: 125,
    height: 50,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'black',
    marginLeft: 15,
    marginTop: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    margin: 'auto'
  }
});
