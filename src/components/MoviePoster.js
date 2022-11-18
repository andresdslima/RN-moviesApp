import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export function MoviePoster({ movie, height = 400, width = 300 }) {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <View style={{ width, height }}>
      <View style={styles.imageContainer}>
        <Image source={{ uri }} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 10,
    marginHorizontal: 7.5,
    flex: 1,
  },
  image: {
    flex: 1,
    borderRadius: 18,
  },
});
