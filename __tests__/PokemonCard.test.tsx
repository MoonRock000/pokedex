import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import PokemonCard from '../src/components/PokemonCard';
import { Pokemon } from '../App';

describe('PokemonCard', () => {
  const sample: Pokemon = {
    id: '0001',
    name: 'Bulbasaur',
    image: 'https://example.com/bulba.png',
    types: ['Grass', 'Poison'],
    description: 'Seed Pokémon',
    createdAt: Date.now(),
  };

  it('renders name and id', async () => {
    let tree: ReactTestRenderer.ReactTestRenderer;
    await ReactTestRenderer.act(async () => {
      tree = ReactTestRenderer.create(
        <PokemonCard pokemon={sample} onPress={() => {}} onLongPress={() => {}} />
      );
    });
    const texts = (tree as ReactTestRenderer.ReactTestRenderer).root.findAllByType(require('react-native').Text);
    const hasName = texts.some(t => t.props.children === 'Bulbasaur');
    const hasId = texts.some(t => String(t.props.children).includes('0001'));
    expect(hasName && hasId).toBe(true);
  });

  it('calls onPress when pressed', async () => {
    const onPress = jest.fn();
    let tree: ReactTestRenderer.ReactTestRenderer;
    await ReactTestRenderer.act(async () => {
      tree = ReactTestRenderer.create(
        <PokemonCard pokemon={sample} onPress={onPress} onLongPress={() => {}} />
      );
    });
    const touchable = (tree as ReactTestRenderer.ReactTestRenderer).root.findByProps({ onPress });
    touchable.props.onPress();
    expect(onPress).toHaveBeenCalled();
  });
});
