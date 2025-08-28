import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import TypeBadge from '../src/components/TypeBadge';

describe('TypeBadge', () => {
  it('renders the provided type text', async () => {
    let tree: ReactTestRenderer.ReactTestRenderer;
    await ReactTestRenderer.act(async () => {
      tree = ReactTestRenderer.create(<TypeBadge type="Fire" />);
    });
    const texts = (tree as ReactTestRenderer.ReactTestRenderer).root.findAllByType(require('react-native').Text);
    expect(texts.some(t => t.props.children === 'Fire')).toBe(true);
  });
});
