import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import TypeBadge from './TypeBadge';
import { Pokemon } from '../../App';

const { width } = Dimensions.get('window');

interface Props {
  pokemon: Pokemon;
  onPress: () => void;
  onLongPress: () => void;
}

const PokemonCard: React.FC<Props> = ({ pokemon, onPress, onLongPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} onLongPress={onLongPress}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: pokemon.image }} style={styles.image} />
      </View>
      <Text style={styles.id}>#{pokemon.id}</Text>
      <Text style={styles.name}>{pokemon.name}</Text>
      <View style={styles.typesRow}>
        {pokemon.types.map((t, i) => (
          <TypeBadge key={`${pokemon.id}-${t}-${i}`} type={t} size="sm" />
        ))}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#0e1628',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    width: (width - 48) / 2,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1c2944',
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#0b1426',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  id: {
    fontSize: 12,
    color: '#99b8d8',
    marginBottom: 4,
    fontWeight: '500',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#cfe8ff',
    textAlign: 'center',
  },
  typesRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

export default PokemonCard;
