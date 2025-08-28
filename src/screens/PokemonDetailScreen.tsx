import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import { deletePokemon } from '../utils/storage';
import { TYPE_COLORS } from '../utils/pokemonTypes';
import CustomAlert from '../components/CustomAlert';
import styles from './styles/PokemonDetailScreen.styles';

type PokemonDetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'PokemonDetail'>;
type PokemonDetailScreenRouteProp = RouteProp<RootStackParamList, 'PokemonDetail'>;

interface Props {
  navigation: PokemonDetailScreenNavigationProp;
  route: PokemonDetailScreenRouteProp;
}

const PokemonDetailScreen: React.FC<Props> = ({ navigation, route }) => {
  const { pokemon } = route.params;
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  const imageScale = useRef(new Animated.Value(0.8)).current;
  const imageOpacity = useRef(new Animated.Value(0)).current;
  const imageRotation = useRef(new Animated.Value(0)).current;
  const nameSlide = useRef(new Animated.Value(-50)).current;
  const nameOpacity = useRef(new Animated.Value(0)).current;
  const sectionSlide = useRef(new Animated.Value(50)).current;
  const sectionOpacity = useRef(new Animated.Value(0)).current;
  const buttonScale = useRef(new Animated.Value(0)).current;
  const typeBadgeScale = useRef(new Animated.Value(0)).current;
  const glowOpacity = useRef(new Animated.Value(0)).current;

  const handleDelete = () => {
    setShowDeleteAlert(true);
  };

  const confirmDelete = async () => {
    try {
      await deletePokemon(pokemon.id);
      setShowDeleteAlert(false);
      setTimeout(() => {
        navigation.goBack();
      }, 100);
    } catch (error) {}
  };

  const cancelDelete = () => {
    setShowDeleteAlert(false);
  };

  useEffect(() => {
    const startAnimations = () => {
      Animated.sequence([
        Animated.timing(imageScale, {
          toValue: 1.1,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.spring(imageScale, {
          toValue: 1,
          tension: 50,
          friction: 7,
          useNativeDriver: true,
        }),
      ]).start();

      Animated.timing(imageOpacity, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }).start();

      Animated.loop(
        Animated.sequence([
          Animated.timing(imageRotation, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true,
          }),
          Animated.timing(imageRotation, {
            toValue: 0,
            duration: 3000,
            useNativeDriver: true,
          }),
        ])
      ).start();

      Animated.loop(
        Animated.sequence([
          Animated.timing(glowOpacity, {
            toValue: 0.25,
            duration: 2000,
            useNativeDriver: true,
          }),
          Animated.timing(glowOpacity, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: true,
          }),
        ])
      ).start();

      Animated.parallel([
        Animated.timing(nameSlide, {
          toValue: 0,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(nameOpacity, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
      ]).start();

      Animated.stagger(200, [
        Animated.parallel([
          Animated.timing(sectionSlide, {
            toValue: 0,
            duration: 600,
            useNativeDriver: true,
          }),
          Animated.timing(sectionOpacity, {
            toValue: 1,
            duration: 600,
            useNativeDriver: true,
          }),
        ]),
      ]).start();

      Animated.spring(buttonScale, {
        toValue: 1,
        tension: 50,
        friction: 7,
        useNativeDriver: true,
      }).start();

      Animated.spring(typeBadgeScale, {
        toValue: 1,
        tension: 100,
        friction: 8,
        useNativeDriver: true,
      }).start();
    };

    const timer = setTimeout(startAnimations, 100);
    return () => clearTimeout(timer);
  }, [imageScale, imageOpacity, imageRotation, nameSlide, nameOpacity, sectionSlide, sectionOpacity, buttonScale, typeBadgeScale, glowOpacity]);

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Animated.View 
            style={[
              styles.imageContainer,
              {
                transform: [
                  { scale: imageScale },
                  {
                    rotate: imageRotation.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['0deg', '5deg'],
                    }),
                  },
                ],
                opacity: imageOpacity,
              },
            ]}
          >
            <Animated.View
              style={[
                styles.glowEffect,
                {
                  opacity: glowOpacity,
                },
              ]}
            />
            <Image source={{ uri: pokemon.image }} style={styles.pokemonImage} />
          </Animated.View>

          <Animated.View 
            style={[
              styles.nameContainer,
              {
                transform: [{ translateY: nameSlide }],
                opacity: nameOpacity,
              },
            ]}
          >
            <Text style={styles.pokemonName}>{pokemon.name}</Text>
          </Animated.View>

          <Animated.View 
            style={[
              styles.section,
              {
                transform: [{ translateY: sectionSlide }],
                opacity: sectionOpacity,
              },
            ]}
          >
            <Text style={styles.sectionTitle}>Types</Text>
            <View style={styles.typesContainer}>
              {pokemon.types.map((type, index) => (
                <Animated.View
                  key={index}
                  style={[
                    styles.typeBadge, 
                    { 
                      backgroundColor: TYPE_COLORS[type],
                      transform: [{ scale: typeBadgeScale }],
                    }
                  ]}
                >
                  <Text style={styles.typeText}>{type}</Text>
                </Animated.View>
              ))}
            </View>
          </Animated.View>

          <Animated.View 
            style={[
              styles.section,
              {
                transform: [{ translateY: sectionSlide }],
                opacity: sectionOpacity,
              },
            ]}
          >
            <Text style={styles.sectionTitle}>Description</Text>
            <View style={styles.descriptionContainer}>
              <Text style={styles.descriptionText}>{pokemon.description}</Text>
            </View>
          </Animated.View>

          <Animated.View 
            style={[
              styles.section,
              {
                transform: [{ translateY: sectionSlide }],
                opacity: sectionOpacity,
              },
            ]}
          >
            <Text style={styles.sectionTitle}>Details</Text>
            <View style={styles.detailsContainer}>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>ID:</Text>
                <Text style={styles.detailValue}>{pokemon.id}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Added:</Text>
                <Text style={styles.detailValue}>{formatDate(pokemon.createdAt)}</Text>
              </View>
            </View>
          </Animated.View>

          <Animated.View
            style={{
              transform: [{ scale: buttonScale }],
            }}
          >
            <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
              <Text style={styles.deleteButtonText}>Delete Pokémon</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </ScrollView>

      <CustomAlert
        visible={showDeleteAlert}
        title="Delete Pokémon"
        message={`Are you sure you want to delete ${pokemon.name}?`}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
        confirmText="Delete"
        cancelText="Cancel"
        type="warning"
      />
    </>
  );
};

export default PokemonDetailScreen;
