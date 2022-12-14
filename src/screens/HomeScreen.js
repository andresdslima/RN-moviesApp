import React, { useEffect } from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  ScrollView,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { HorizontalSlider } from '../components/HorizontalSlider';
import SplashScreen from 'react-native-splash-screen';

const { width: windowWidth } = Dimensions.get('window');

export function HomeScreen() {
  const { isLoading, nowPlaying, popular, topRated, upcoming } = useMovies();

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator color="#00f" size={100} />
      </View>
    );
  }

  // useEffect(() => {
  //   SplashScreen.hide();
  // }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ height: 400, marginTop: 20, width: windowWidth }}>
          <Carousel
            data={nowPlaying}
            renderItem={({ item }) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={windowWidth / 1.25}
            inactiveSlideOpacity={0.9}
          />
        </View>

        <HorizontalSlider title="Popular" movies={popular} />
        <HorizontalSlider title="Top rated" movies={topRated} />
        <HorizontalSlider title="Upcoming" movies={upcoming} />
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
});
