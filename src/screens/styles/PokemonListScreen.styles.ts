import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b1220',
  },
  searchContainer: {
    padding: 16,
    backgroundColor: '#0e1628',
    marginBottom: 8,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#1c2944',
    borderRadius: 20,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#cfe8ff',
    backgroundColor: '#0b1426',
  },
  filterContainer: {
    backgroundColor: '#0e1628',
    paddingVertical: 8,
  },
  filterList: {
    paddingHorizontal: 16,
  },
  typeFilterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 4,
    borderRadius: 20,
    backgroundColor: '#0b1426',
    borderWidth: 1,
    borderColor: '#1c2944',
  },
  selectedTypeFilter: {
    backgroundColor: '#4aa6ff',
    borderColor: '#4aa6ff',
  },
  typeFilterText: {
    fontSize: 14,
    color: '#cfe8ff',
  },
  selectedTypeFilterText: {
    color: '#06101e',
    fontWeight: 'bold',
  },
  pokemonList: {
    flex: 1,
  },
  pokemonListContent: {
    padding: 8,
  },
  row: {
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  emptyText: {
    fontSize: 16,
    color: '#99b8d8',
    textAlign: 'center',
  },
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#4aa6ff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  fabText: {
    fontSize: 24,
    color: '#06101e',
    fontWeight: 'bold',
  },
});

export default styles;
