import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { launchCamera, launchImageLibrary, ImagePickerResponse, MediaType } from 'react-native-image-picker';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
import { savePokemon } from '../utils/storage';
import { POKEMON_TYPES, TYPE_COLORS } from '../utils/pokemonTypes';
import CustomAlert from '../components/CustomAlert';
import styles from './styles/AddPokemonScreen.styles';

type AddPokemonScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AddPokemon'>;

interface Props {
  navigation: AddPokemonScreenNavigationProp;
}

const AddPokemonScreen: React.FC<Props> = ({ navigation }) => {
  const scrollViewRef = useRef<ScrollView>(null);
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertConfig, setAlertConfig] = useState({
    title: '',
    message: '',
    type: 'info' as 'success' | 'error' | 'warning' | 'info',
  });

  const showCustomAlert = (title: string, message: string, type: 'success' | 'error' | 'warning' | 'info') => {
    setAlertConfig({ title, message, type });
    setShowAlert(true);
  };

  const handleImagePicker = (type: 'camera' | 'gallery') => {
    const options = {
      mediaType: 'photo' as MediaType,
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    const launchFunction = type === 'camera' ? launchCamera : launchImageLibrary;

    launchFunction(options, (response: ImagePickerResponse) => {
      if (response.didCancel) {
        return;
      }

      if (response.errorCode) {
        showCustomAlert('Error', 'Failed to pick image', 'error');
        return;
      }

      if (response.assets && response.assets[0]?.uri) {
        setImage(response.assets[0].uri);
      }
    });
  };

  const toggleType = (type: string) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter(t => t !== type));
    } else if (selectedTypes.length < 2) {
      setSelectedTypes([...selectedTypes, type]);
    } else {
      showCustomAlert('Limit Reached', 'You can only select up to 2 types', 'warning');
    }
  };

  const handleSave = async () => {
    if (!name.trim()) {
      showCustomAlert('Error', 'Please enter a Pokémon name', 'error');
      return;
    }

    if (!image) {
      showCustomAlert('Error', 'Please add a photo', 'error');
      return;
    }

    if (selectedTypes.length === 0) {
      showCustomAlert('Error', 'Please select at least one type', 'error');
      return;
    }

    if (!description.trim()) {
      showCustomAlert('Error', 'Please enter a description', 'error');
      return;
    }

    setIsLoading(true);

    try {
      const newPokemon = {
        id: Date.now().toString(),
        name: name.trim(),
        image,
        types: selectedTypes,
        description: description.trim(),
        createdAt: Date.now(),
      };

      await savePokemon(newPokemon);
      showCustomAlert('Success', 'Pokémon saved successfully!', 'success');
    } catch (error) {
      showCustomAlert('Error', 'Failed to save Pokémon', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAlertConfirm = () => {
    setShowAlert(false);
    if (alertConfig.type === 'success') {
      navigation.goBack();
    }
  };

  const handleDescriptionFocus = () => {
    // Scroll to bottom when description input is focused
    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 300);
  };

  return (
    <>
      <KeyboardAvoidingView 
        style={styles.container} 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        <ScrollView 
          ref={scrollViewRef}
          style={styles.scrollView} 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.content}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Pokémon Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Pokémon name..."
              placeholderTextColor="#7ea3c7"
              value={name}
              onChangeText={setName}
              maxLength={50}
            />
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Photo</Text>
            {image ? (
              <View style={styles.imageContainer}>
                <Image source={{ uri: image }} style={styles.previewImage} />
                <TouchableOpacity
                  style={styles.changeImageButton}
                  onPress={() => setImage('')}
                >
                  <Text style={styles.changeImageText}>Change Photo</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.imageButtonsContainer}>
                <TouchableOpacity
                  style={styles.imageButton}
                  onPress={() => handleImagePicker('camera')}
                >
                  <Text style={styles.imageButtonText}>📷 Take Photo</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.imageButton}
                  onPress={() => handleImagePicker('gallery')}
                >
                  <Text style={styles.imageButtonText}>🖼️ Choose from Gallery</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Types (Select 1-2)</Text>
            <View style={styles.typesGrid}>
              {POKEMON_TYPES.map((type) => (
                <TouchableOpacity
                  key={type}
                  style={[
                    styles.typeButton,
                    selectedTypes.includes(type) && {
                      backgroundColor: TYPE_COLORS[type],
                    },
                  ]}
                  onPress={() => toggleType(type)}
                >
                  <Text
                    style={[
                      styles.typeButtonText,
                      selectedTypes.includes(type) && styles.selectedTypeButtonText,
                    ]}
                  >
                    {type}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Description</Text>
            <TextInput
              style={styles.textArea}
              placeholder="Enter fun facts about this Pokémon..."
              placeholderTextColor="#7ea3c7"
              value={description}
              onChangeText={setDescription}
              onFocus={handleDescriptionFocus}
              multiline
              numberOfLines={4}
              maxLength={500}
            />
          </View>

          <TouchableOpacity
            style={[styles.saveButton, isLoading && styles.saveButtonDisabled]}
            onPress={handleSave}
            disabled={isLoading}
          >
            {isLoading ? (
              <ActivityIndicator color="#06101e" />
            ) : (
              <Text style={styles.saveButtonText}>Save Pokémon</Text>
            )}
          </TouchableOpacity>
        </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <CustomAlert
        visible={showAlert}
        title={alertConfig.title}
        message={alertConfig.message}
        onConfirm={handleAlertConfirm}
        confirmText="OK"
        type={alertConfig.type}
      />
    </>
  );
};

export default AddPokemonScreen;
