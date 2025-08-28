import AsyncStorage from '@react-native-async-storage/async-storage';
import { Pokemon } from '../../App';

const POKEMON_STORAGE_KEY = '@pokedex_pokemon';

export const savePokemon = async (pokemon: Pokemon): Promise<void> => {
  try {
    const existingPokemon = await getPokemon();
    const updatedPokemon = [...existingPokemon, pokemon];
    await AsyncStorage.setItem(POKEMON_STORAGE_KEY, JSON.stringify(updatedPokemon));
  } catch (error) {
    console.error('Error saving pokemon:', error);
    throw error;
  }
};

export const getPokemon = async (): Promise<Pokemon[]> => {
  try {
    const pokemonData = await AsyncStorage.getItem(POKEMON_STORAGE_KEY);
    return pokemonData ? JSON.parse(pokemonData) : [];
  } catch (error) {
    console.error('Error getting pokemon:', error);
    return [];
  }
};

export const deletePokemon = async (pokemonId: string): Promise<void> => {
  try {
    const existingPokemon = await getPokemon();
    const updatedPokemon = existingPokemon.filter(p => p.id !== pokemonId);
    await AsyncStorage.setItem(POKEMON_STORAGE_KEY, JSON.stringify(updatedPokemon));
  } catch (error) {
    console.error('Error deleting pokemon:', error);
    throw error;
  }
};
