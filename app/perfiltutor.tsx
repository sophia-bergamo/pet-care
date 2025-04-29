import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function TutorProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>PetCare+</Text>

    

      <Text style={styles.title}>Perfil do Tutor</Text>

      <Text style={styles.label}>Nome</Text>
      <Text style={styles.text}>xxxxxx</Text>

      <Text style={styles.label}>E-mail</Text>
      <Text style={styles.text}>xxxxx@xxxx</Text>

      <Text style={styles.label}>Telefone</Text>
      <Text style={styles.text}>xxxxx-xxxx</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Editar Perfil</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', paddingTop: 60 },
  header: { fontSize: 20, fontWeight: 'bold', backgroundColor: '#0b0a78', color: '#fff', width: '100%', textAlign: 'center', padding: 15 },
  profileImage: { width: 80, height: 80, margin: 20, borderRadius: 40, backgroundColor: '#ccc' },
  title: { fontSize: 18, fontWeight: '600', marginBottom: 20 },
  label: { fontSize: 16, color: '#0b0a78' },
  text: { fontSize: 16, marginBottom: 10 },
  button: { backgroundColor: '#0b0a78', padding: 10, borderRadius: 8, marginTop: 20 },
  buttonText: { color: '#fff', fontWeight: 'bold' }
});
