import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TYPE_COLORS } from '../utils/pokemonTypes';

interface Props {
  type: string;
  size?: 'sm' | 'md';
}

const TypeBadge: React.FC<Props> = ({ type, size = 'md' }) => {
  return (
    <View
      style={[
        styles.badge,
        size === 'sm' ? styles.badgeSm : styles.badgeMd,
        { backgroundColor: TYPE_COLORS[type] || '#64748b' },
      ]}
    >
      <Text style={[styles.text, size === 'sm' ? styles.textSm : styles.textMd]}>
        {type}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    borderRadius: 10,
    marginHorizontal: 2,
    marginBottom: 4,
  },
  badgeSm: {
    paddingHorizontal: 6,
    paddingVertical: 3,
  },
  badgeMd: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
  textSm: {
    fontSize: 12,
  },
  textMd: {
    fontSize: 14,
  },
});

export default TypeBadge;
