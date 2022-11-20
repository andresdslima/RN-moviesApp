import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { MoviePoster } from './MoviePoster';

export function HorizontalSlider({ title, movies }) {
  return (
    <View style={{ height: title ? 260 : 200, marginTop: title ? 0 : 10 }}>
      {title && <Text style={styles.title}>{title}</Text>}
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <MoviePoster movie={item} width={140} height={200} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: 20,
    marginVertical: 10,
    color: '#000',
  },
});
