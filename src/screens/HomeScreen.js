import React from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  FlatList,
  Text,
  ScrollView,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';

const { width: windowWidth } = Dimensions.get('window');

export function HomeScreen() {
  const { isLoading, moviesToday } = useMovies();

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator color="#00f" size={100} />
      </View>
    );
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ height: 420, marginTop: 20 }}>
          <Carousel
            data={moviesToday}
            renderItem={({ item }) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
          />
        </View>
        <View style={{ height: 240 }}>
          <Text style={styles.title}>Popular</Text>
          <FlatList
            data={moviesToday}
            renderItem={({ item }) => (
              <MoviePoster movie={item} width={140} height={200} />
            )}
            keyExtractor={item => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: 20,
    color: '#000',
  },
});
