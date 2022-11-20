import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { MovieDetails } from '../components/MovieDetails';
import { useMovieDetails } from '../hooks/useMovieDetails';
import Icon from 'react-native-vector-icons/Ionicons';

const screenHeight = Dimensions.get('screen').height;

export function DetailScreen({ route, navigation }) {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const { isLoading, cast, movieFull } = useMovieDetails(movie.id);

  return (
    <ScrollView>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.pop()}>
        <Icon name="chevron-back-outline" color="#fff" size={50} />
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        <Image source={{ uri }} style={styles.image} />
      </View>
      <Text style={styles.title}>{movie.title}</Text>
      {isLoading ? (
        <ActivityIndicator size={35} color="#ccc" />
      ) : (
        <MovieDetails movieFull={movieFull} cast={cast} />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    overflow: 'hidden',
    width: '100%',
    height: screenHeight * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 10,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  image: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    color: '#000',
    marginHorizontal: 20,
    marginTop: 20,
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    zIndex: 999,
    left: 5,
    top: 25,
    elevation: 9,
  },
});
