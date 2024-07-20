import React, { useState } from 'react';
import { SafeAreaView, View, Text, FlatList, TextInput, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const TableHeader = () => (
  <View style={styles.header}>
    <Text style={styles.headerCell}>Id</Text>
    <Text style={styles.headerCell}>Nama Hasil Olahan Sampah</Text>
    <Text style={styles.headerCell}>Bahan</Text>
    <Text style={styles.headerCell}>Deskripsi</Text>
  </View>
);

const ListSampah = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { olahanData } = route.params;
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (text) => {
    setSearchTerm(text);
  };

  const filteredData = olahanData.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('DetailPageOlahan', { 
        name: item.name,
        Bahan: item.Bahan,
        description: item.description,
        penjelasan: item.penjelasan,
        image: item.image
    })}>
      <View style={styles.row}>
        <Text style={styles.cell}>{item.id}</Text>
        <Text style={styles.cell}>{item.name}</Text>
        <Text style={styles.cell}>{item.Bahan}</Text>
        <Text style={styles.cell}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>ReSis (Recycle Assistant)</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Cari Olahan..."
        value={searchTerm}
        onChangeText={handleSearch}
      />
      <TableHeader />
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <View>
        <Text style={styles.footer}>"Sampah bukanlah masalah, Tetapi sebuah peluang"</Text>
        <Text style={{textAlign: 'center'}}>@ReSis</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  searchInput: {
    height: 40,
    width: '80%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    marginLeft: 0.1 * width,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    padding: 10,
  },
  headerCell: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    padding: 10,
  },
  cell: {
    flex: 1,
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
  }
});

export default ListSampah;
