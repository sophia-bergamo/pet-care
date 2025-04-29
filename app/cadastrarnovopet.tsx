import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import { RadioButton } from 'react-native-paper';

export default function CadastroPet() {
  const [nome, setNome] = useState('');
  const [especie, setEspecie] = useState('Cachorro');
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState('Macho');
  const [foto, setFoto] = useState<string | null>(null);

  const escolherImagem = async () => {
    const permissao = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissao.granted === false) {
      Alert.alert("Permissão negada", "Você precisa permitir acesso à galeria.");
      return;
    }

    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!resultado.canceled) {
      setFoto(resultado.assets[0].uri);
    }
  };

  const salvarPet = () => {
    Alert.alert("Pet Salvo", `Nome: ${nome}\nEspécie: ${especie}\nIdade: ${idade}\nSexo: ${sexo}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>🐶 Cadastrar Novo Pet</Text>

        <Text style={styles.label}>Nome do Pet</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Luna"
          placeholderTextColor="#8c8c8c"
          value={nome}
          onChangeText={setNome}
        />

        <Text style={styles.label}>Espécie</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={especie}
            onValueChange={(itemValue) => setEspecie(itemValue)}
          >
            <Picker.Item label="Cachorro" value="Cachorro" />
            <Picker.Item label="Gato" value="Gato" />
            <Picker.Item label="Outro" value="Outro" />
          </Picker>
        </View>

        <Text style={styles.label}>Idade</Text>
        <TextInput
          style={styles.input}
          placeholder="Idade"
          placeholderTextColor="#8c8c8c"
          keyboardType="numeric"
          value={idade}
          onChangeText={setIdade}
        />

        <Text style={styles.label}>Sexo</Text>
        <View style={styles.radioContainer}>
          <RadioButton
            value="Macho"
            status={sexo === 'Macho' ? 'checked' : 'unchecked'}
            onPress={() => setSexo('Macho')}
          />
          <Text style={styles.radioText}>Macho</Text>

          <RadioButton
            value="Fêmea"
            status={sexo === 'Fêmea' ? 'checked' : 'unchecked'}
            onPress={() => setSexo('Fêmea')}
          />
          <Text style={styles.radioText}>Fêmea</Text>
        </View>

        <TouchableOpacity style={styles.fotoButton} onPress={escolherImagem}>
          <Text style={{ color: '#333' }}>Adicionar foto do Pet</Text>
        </TouchableOpacity>
        {foto && <Image source={{ uri: foto }} style={styles.previewImg} />}

        <TouchableOpacity style={styles.saveButton} onPress={salvarPet}>
          <Text style={styles.saveText}>Salvar Pet</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#00008B',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    color: '#00008B',
    marginTop: 10,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#f2f2f2',
    borderRadius: 6,
    padding: 10,
  },
  pickerContainer: {
    backgroundColor: '#f2f2f2',
    borderRadius: 6,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 15,
  },
  radioText: {
    marginRight: 20,
    fontSize: 16,
  },
  fotoButton: {
    backgroundColor: '#e6e6e6',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 15,
  },
  previewImg: {
    width: 100,
    height: 100,
    borderRadius: 6,
    marginBottom: 15,
    alignSelf: 'center',
  },
  saveButton: {
    backgroundColor: '#00008B',
    padding: 15,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 30, // adicionei uma folguinha extra no final
  },
  saveText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
