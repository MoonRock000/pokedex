import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b1220',
  },
  content: {
    padding: 16,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
    position: 'relative',
  },
  glowEffect: {
    position: 'absolute',
    width: 270,
    height: 270,
    borderRadius: 135,
    backgroundColor: '#4aa6ff',
    opacity: 0.3,
    zIndex: -1,
  },
  pokemonImage: {
    width: 250,
    height: 250,
    borderRadius: 125,
    borderWidth: 4,
    borderColor: '#4aa6ff',
  },
  nameContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  pokemonName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#cfe8ff',
    textTransform: 'capitalize',
  },
  section: {
    marginBottom: 24,
    backgroundColor: '#0e1628',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#1c2944',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#cfe8ff',
  },
  typesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  typeBadge: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  typeText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  descriptionContainer: {
    backgroundColor: '#0b1426',
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: '#1c2944',
  },
  descriptionText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#cfe8ff',
  },
  detailsContainer: {
    backgroundColor: '#0b1426',
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: '#1c2944',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#99b8d8',
  },
  detailValue: {
    fontSize: 16,
    color: '#cfe8ff',
  },
  deleteButton: {
    backgroundColor: '#4aa6ff',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 32,
    alignSelf: 'center',
    paddingHorizontal: 24,
  },
  deleteButtonText: {
    color: '#06101e',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
