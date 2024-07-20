import React, { useState, useEffect } from 'react';
import { SafeAreaView, SectionList, StyleSheet, Text, TextInput, View, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { olahansampah } from './DataOlahan';
import Navigation from './Navigation'

const { width } = Dimensions.get('window');

export default function OlahanPage({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(olahansampah);

  useEffect(() => {
    if (searchQuery === '') {
      setFilteredData(olahansampah);
    } else {
      const filtered = olahansampah.map(section => {
        const filteredItems = section.data.filter(item =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        return { ...section, data: filteredItems };
      }).filter(section => section.data.length > 0);
      setFilteredData(filtered);
    }
  }, [searchQuery]);

  return (
    <SafeAreaView style={styles.container}>
      <Navigation navigation={navigation} />
      <View style={styles.headerContainer}>
        <Text style={styles.mainHeader}>Selamat Datang!</Text>
        <Text style={styles.subHeader}>ReSis (Recycle Assistant)</Text>
        <TextInput
          style={styles.searchBar}
          placeholder="Search Sampah..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <SectionList
        sections={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => null} 
        renderSectionHeader={({ section: { category, data } }) => (
          <View style={styles.section}>
            <Text style={styles.sectionHeader}>{category}</Text>
            <Text style={styles.section2}>
              {category === 'Organik' && 'Jenis sampah yang berasal dari bahan-bahan non-biologis yang tidak dapat terurai secara alami oleh mikroorganisme.'}
              {category === 'Anorganik' && 'Sampah anorganik terdiri dari bahan-bahan yang tidak berasal dari sumber alami dan sulit terurai secara alami.'}
              {category === 'B3' && 'Sampah B3 adalah jenis sampah yang mengandung bahan-bahan berbahaya dan beracun yang dapat membahayakan kesehatan manusia dan lingkungan.'}
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.itemsRow}>
              {data.map((item) => (
                <TouchableOpacity key={item.id} onPress={() => navigation.navigate('DetailPageOlahan', item)}>
                  <View style={styles.item}>
                    <Image style={styles.itemImage} source={item.image} />
                    <Text style={styles.itemText}>{item.name}</Text>
                    <Text style={styles.deskripsi}>{item.description}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}
        contentContainerStyle={styles.scrollContainer}
      />
      
      <Text style={styles.footer}>"Sampah Bukan Masalah, Tetapi Sebuah Peluang"</Text>
      <Text style={styles.footer2}>@ReSis</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    padding: 16,
    alignItems: 'center',
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  mainHeader: {
    fontSize: 0.1 * width,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    marginTop: 7,
  },
  subHeader: {
    fontSize: 0.05 * width,
    textAlign: 'center',
    marginBottom: 16,
  },
  searchBar: {
    height: 40,
    width: '80%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 8,
    marginBottom: 1,
  },
  section: {
    width: '100%',
    marginBottom: 20,
  },
  section2: {
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 0.06 * width,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemsRow: {
    flexDirection: 'row',
  },
  item: {
    width: 0.35 * width,
    alignItems: 'center',
    marginRight: 16,
  },
  itemImage: {
    width: '100%',
    height: 0.25 * width,
    marginBottom: 8,
    borderRadius: 10,
  },
  itemText: {
    fontSize: 0.04 * width,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  deskripsi: {
    fontSize: 0.035 * width,
    textAlign: 'center',
  },
  footer: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 0.04 * width,
  },
  footer2: {
    textAlign: 'center',
    color: 'grey',
    fontSize: 0.035 * width,
    marginBottom: 10
  },
  bahan: {
   fontWeight: 'bold', 
  }
});