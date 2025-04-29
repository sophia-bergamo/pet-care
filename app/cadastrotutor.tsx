import { Link } from 'expo-router';
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Pressable } from 'react-native';
import TelaInicio from './inicio';

export default function CadastroTutorScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header} />
      <Text style={styles.title}>Cadastro de Tutor</Text>

      <TextInput style={styles.input} placeholder="Nome Completo" placeholderTextColor="#888" />
      <TextInput style={styles.input} placeholder="E-mail" placeholderTextColor="#888" keyboardType="email-address" />
 
      <Text style={styles.label}>Senha</Text>
      <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#888" secureTextEntry />

      <View style={styles.passwordRules}>
        <Text>• Mínimo de 6 caracteres</Text>
        <Text>• Pelo menos 1 letra maiúscula</Text>
        <Text>• Pelo menos 1 letra minúscula</Text>
        <Text>• Pelo menos 1 número</Text>
        <Text>• Pelo menos 1 caractere especial</Text>
      </View>

      <TextInput style={styles.input} placeholder="Confirmar Senha" placeholderTextColor="#888" secureTextEntry />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Criar Conta</Text>
      </TouchableOpacity>

      <Link href={'/inicio'}>
       <Pressable>
         <Text style={styles.link}>Voltar à página inicial</Text>
       </Pressable>
      </Link>


      <View style={styles.footer} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    height: 50,
    backgroundColor: '#00008B',
    alignSelf: 'stretch',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: '#00008B',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  label: {
    alignSelf: 'flex-start',
    color: '#00008B',
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    width: '100%',
    backgroundColor: '#eee',
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
    elevation: 2,
  },
  passwordRules: {
    alignSelf: 'flex-start',
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#00008B',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 6,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  link: {
    color: '#00008B',
    marginTop: 15,
    textDecorationLine: 'underline',
  },
  footer: {
    height: 50,
    backgroundColor: '#00008B',
    alignSelf: 'stretch',
    marginTop: 40,
  },
});
