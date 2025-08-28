import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, Pokemon } from '../../App';
import { getPokemon, deletePokemon } from '../utils/storage';
import { POKEMON_TYPES } from '../utils/pokemonTypes';
import CustomAlert from '../components/CustomAlert';
import PokemonCard from '../components/PokemonCard';
import styles from './styles/PokemonListScreen.styles';

type PokemonListScreenNavigationProp = StackNavigationProp<RootStackParamList, 'PokemonList'>;

interface Props {
  navigation: PokemonListScreenNavigationProp;
}

const PokemonListScreen: React.FC<Props> = ({ navigation }) => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [filteredPokemon, setFilteredPokemon] = useState<Pokemon[]>([]);
  const [selectedType, setSelectedType] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [pokemonToDelete, setPokemonToDelete] = useState<Pokemon | null>(null);

  const loadPokemon = async () => {
    const savedPokemon = await getPokemon();
    setPokemon(savedPokemon);
    setFilteredPokemon(savedPokemon);
  };

  useFocusEffect(
    React.useCallback(() => {
      loadPokemon();
    }, [])
  );

  useEffect(() => {
    let filtered = pokemon;

    if (selectedType !== 'All') {
      filtered = filtered.filter(p => p.types.includes(selectedType));
    }

    if (searchQuery.trim()) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredPokemon(filtered);
  }, [pokemon, selectedType, searchQuery]);

  const handleDeletePokemon = (poke: Pokemon) => {
    setPokemonToDelete(poke);
    setShowDeleteAlert(true);
  };

  const confirmDelete = async () => {
    if (pokemonToDelete) {
      try {
        await deletePokemon(pokemonToDelete.id);
        await loadPokemon();
        setShowDeleteAlert(false);
        setPokemonToDelete(null);
      } catch (error) {}
    }
  };

  const cancelDelete = () => {
    setShowDeleteAlert(false);
    setPokemonToDelete(null);
  };

  const renderPokemonItem = ({ item }: { item: Pokemon }) => (
    <PokemonCard
      pokemon={item}
      onPress={() => navigation.navigate('PokemonDetail', { pokemon: item })}
      onLongPress={() => handleDeletePokemon(item)}
    />
  );

  const renderTypeFilter = ({ item }: { item: string }) => (
    <TouchableOpacity
      style={[
        styles.typeFilterButton,
        selectedType === item && styles.selectedTypeFilter,
      ]}
      onPress={() => setSelectedType(item)}
    >
      <Text
        style={[
          styles.typeFilterText,
          selectedType === item && styles.selectedTypeFilterText,
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Pokémon..."
          placeholderTextColor="#7ea3c7"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <View style={styles.filterContainer}>
        <FlatList
          data={['All', ...POKEMON_TYPES]}
          renderItem={renderTypeFilter}
          keyExtractor={(item) => item}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.filterList}
        />
      </View>

      <FlatList
        data={filteredPokemon}
        renderItem={renderPokemonItem}
        keyExtractor={(item) => item.id}
        style={styles.pokemonList}
        contentContainerStyle={styles.pokemonListContent}
        numColumns={2}
        columnWrapperStyle={styles.row}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              {pokemon.length === 0
                ? 'No Pokémon found. Add your first Pokémon!'
                : 'No Pokémon match your filters.'}
            </Text>
          </View>
        }
      />

      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('AddPokemon')}
      >
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>

      <CustomAlert
        visible={showDeleteAlert}
        title="Delete Pokémon"
        message={`Are you sure you want to delete ${pokemonToDelete?.name}?`}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
        confirmText="Delete"
        cancelText="Cancel"
        type="warning"
      />
    </View>
  );
};

export default PokemonListScreen;
