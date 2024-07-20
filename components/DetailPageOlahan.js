import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function DetailPageOlahan({ route, navigation }) {
  const { name, Bahan, description, penjelasan, image } = route.params;

  return (
    <View style={styles.container}>
      {image && <Image style={styles.image} source={image} />}
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.bahan}>{Bahan}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.penjelasan}>{penjelasan}</Text>
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
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    marginLeft: 15,
    marginRight: 15,
  },
  bahan: {
    fontSize: 16,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  description: {
    fontSize: 14,
    textAlign: 'left',
    marginLeft: 15,
    marginRight: 15,
  },
  penjelasan: {
    textAlign: 'left',
    marginLeft: 15,
    marginRight: 15,
  },
});
