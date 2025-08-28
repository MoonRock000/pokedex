import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import PokemonListScreen from './src/screens/PokemonListScreen';
import AddPokemonScreen from './src/screens/AddPokemonScreen';
import PokemonDetailScreen from './src/screens/PokemonDetailScreen';

export type RootStackParamList = {
  PokemonList: undefined;
  AddPokemon: undefined;
  PokemonDetail: { pokemon: Pokemon };
};

export interface Pokemon {
  id: string;
  name: string;
  image: string;
  types: string[];
  description: string;
  createdAt: number;
}

const Stack = createStackNavigator<RootStackParamList>();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="PokemonList"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#0b1220',
            },
            headerTintColor: '#cfe8ff',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#cfe8ff',
              letterSpacing: 0.25,
            },
            headerTitleAlign: 'center',
            headerShadowVisible: true,
          }}
        >
          <Stack.Screen 
            name="PokemonList" 
            component={PokemonListScreen}
            options={{ title: 'Pokédex' }}
          />
          <Stack.Screen 
            name="AddPokemon" 
            component={AddPokemonScreen}
            options={{ title: 'Add New Pokémon' }}
          />
          <Stack.Screen 
            name="PokemonDetail" 
            component={PokemonDetailScreen}
            options={{ title: 'Pokémon Details' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
