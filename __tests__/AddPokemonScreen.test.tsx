import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import AddPokemonScreen from '../src/screens/AddPokemonScreen';

jest.mock('../src/components/CustomAlert', () => () => null);

jest.mock('react-native-image-picker', () => ({
  launchCamera: jest.fn(),
  launchImageLibrary: jest.fn(),
}));

jest.mock('../src/utils/storage', () => ({
  savePokemon: jest.fn(async () => undefined),
}));

describe('AddPokemonScreen', () => {
  const navigation: any = { goBack: jest.fn() };

  it('renders inputs and save button', async () => {
    let tree: ReactTestRenderer.ReactTestRenderer;
    await ReactTestRenderer.act(async () => {
      tree = ReactTestRenderer.create(<AddPokemonScreen navigation={navigation} />);
      await Promise.resolve();
    });
    const inputs = (tree as ReactTestRenderer.ReactTestRenderer).root.findAllByType(require('react-native').TextInput);
    const texts = (tree as ReactTestRenderer.ReactTestRenderer).root.findAllByType(require('react-native').Text);
    expect(inputs.length).toBeGreaterThan(0);
    expect(texts.some(t => t.props.children === 'Save Pokémon')).toBe(true);
  });
});
