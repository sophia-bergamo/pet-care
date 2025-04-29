import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';

const pets = [
  { id: '1', nome: 'Rex', especie: 'Cachorro', raca: 'Labrador' },
  { id: '2', nome: 'Mimi', especie: 'Gato', raca: 'Persa' },
  { id: '3', nome: 'Louro', especie: 'Pássaro', raca: 'Calopsita' }
];

export default function PetProfileScreen() {
  const renderItem = ({ item }: any) => (
    <View style={styles.petCard}>
      <Text style={styles.title}>Perfil do Pet</Text>
      <Text style={styles.label}>Nome</Text>
      <Text style={styles.text}>{item.nome}</Text>

      <Text style={styles.label}>Espécie</Text>
      <Text style={styles.text}>{item.especie}</Text>

      <Text style={styles.label}>Raça</Text>
      <Text style={styles.text}>{item.raca}</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Editar Perfil</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>PetCare+</Text>
      <FlatList
        data={pets}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { fontSize: 20, fontWeight: 'bold', backgroundColor: '#0b0a78', color: '#fff', textAlign: 'center', padding: 15 },
  petCard: { alignItems: 'center', marginVertical: 20, padding: 10 },
  petImage: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#ccc', marginBottom: 10 },
  title: { fontSize: 18, fontWeight: '600', marginBottom: 10 },
  label: { fontSize: 16, color: '#0b0a78' },
  text: { fontSize: 16, marginBottom: 10 },
  button: { backgroundColor: '#0b0a78', padding: 10, borderRadius: 8, marginTop: 10 },
  buttonText: { color: '#fff', fontWeight: 'bold' }
});
