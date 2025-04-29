import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// importa suas telas
import CadastroTutorScreen from './cadastrotutor';
import CadastroPetScreen from './cadastrarnovopet';
import InicioScreen from './inicio'; // 👈 essa é a nova

// define as rotas disponíveis no app
export type RootStackParamList = {
  Inicio: undefined;
  CadastroTutor: undefined;
  CadastroPet: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen 
          name="Inicio" 
          component={InicioScreen} 
          options={{ headerShown: false }} // oculta o topo da tela
        />
        <Stack.Screen 
          name="CadastroTutor" 
          component={CadastroTutorScreen} 
          options={{ title: 'Cadastro de Tutor' }} 
        />
        <Stack.Screen 
          name="CadastroPet" 
          component={CadastroPetScreen} 
          options={{ title: 'Cadastro de Pet' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
