import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function TelaInicio() {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.logo}>PetCare+</Text>
      </View>

      <Text style={styles.bemVindo}>Bem-Vindo!</Text>

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cadastroBtn}>
        <Text style={styles.cadastroText}>Cadastro</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.sobre}>
        <Ionicons name="information-circle-outline" size={20} color="#000" />
        <Text style={styles.sobreText}>Sobre o aplicativo</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // muito importante para ScrollView funcionar direito
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40,
    paddingBottom: 20,
  },
  topContainer: {
    width: 250,
    height: 250,
    backgroundColor: '#00008B',
    borderRadius: 30, // deixar o quadrado mais "fofinho"
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
    paddingBottom: 30,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  bemVindo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  loginBtn: {
    backgroundColor: '#00008B',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#000',
    elevation: 2,
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  cadastroBtn: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#000',
    elevation: 2,
  },
  cadastroText: {
    color: '#000',
    fontWeight: 'bold',
  },
  sobre: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sobreText: {
    marginLeft: 5,
    fontSize: 14,
  },
});
