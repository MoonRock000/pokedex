import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b1220',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    padding: 16,
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
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#cfe8ff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#1c2944',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#0b1426',
    color: '#cfe8ff',
  },
  imageButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageButton: {
    flex: 1,
    backgroundColor: '#0b1426',
    borderWidth: 1,
    borderColor: '#1c2944',
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  imageButtonText: {
    fontSize: 16,
    color: '#cfe8ff',
  },
  imageContainer: {
    alignItems: 'center',
  },
  previewImage: {
    width: 200,
    height: 200,
    borderRadius: 12,
    marginBottom: 12,
  },
  changeImageButton: {
    backgroundColor: '#4aa6ff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  changeImageText: {
    color: '#06101e',
    fontSize: 16,
    fontWeight: 'bold',
  },
  typesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  typeButton: {
    width: '48%',
    backgroundColor: '#0b1426',
    borderWidth: 1,
    borderColor: '#1c2944',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    alignItems: 'center',
  },
  typeButtonText: {
    fontSize: 14,
    color: '#cfe8ff',
    fontWeight: 'bold',
  },
  selectedTypeButtonText: {
    color: '#fff',
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#1c2944',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#0b1426',
    color: '#cfe8ff',
    textAlignVertical: 'top',
    minHeight: 100,
  },
  saveButton: {
    backgroundColor: '#4aa6ff',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 32,
    alignSelf: 'center',
    paddingHorizontal: 24,
  },
  saveButtonDisabled: {
    opacity: 0.6,
  },
  saveButtonText: {
    color: '#06101e',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
