import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import PokemonDetailScreen from '../src/screens/PokemonDetailScreen';
import { Pokemon } from '../App';

jest.mock('../src/components/CustomAlert', () => () => null);

jest.mock('../src/utils/storage', () => ({
  deletePokemon: jest.fn(async () => undefined),
}));

describe('PokemonDetailScreen', () => {
  const navigation: any = { goBack: jest.fn() };
  const pokemon: Pokemon = {
    id: '0001',
    name: 'Bulbasaur',
    image: 'https://example.com/bulba.png',
    types: ['Grass', 'Poison'],
    description: 'Seed Pokémon',
    createdAt: Date.now(),
  };
  const route: any = { params: { pokemon } };

  it('shows the pokemon name', async () => {
    let tree: ReactTestRenderer.ReactTestRenderer;
    await ReactTestRenderer.act(async () => {
      tree = ReactTestRenderer.create(
        <PokemonDetailScreen navigation={navigation} route={route} />
      );
      await Promise.resolve();
    });
    const texts = (tree as ReactTestRenderer.ReactTestRenderer).root.findAllByType(require('react-native').Text);
    expect(texts.some(t => t.props.children === 'Bulbasaur')).toBe(true);
  });
});
