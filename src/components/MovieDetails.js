import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { CastItem } from './CastItem';

export function MovieDetails({ movieFull, cast }) {
  return (
    <>
      <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
        <View style={{ flexDirection: 'row' }}>
          <Icon name="star-outline" color="#ccc" size={16} />
          <Text style={{ color: '#ccc' }}>
            {' '}
            {movieFull.vote_average.toFixed(2)}{' '}
          </Text>
          <Text style={{ marginHorizontal: 5, color: '#ccc' }}>
            - {` ${movieFull.genres.map(genre => genre.name).join(', ')}`}
          </Text>
        </View>
        <Text
          style={{
            fontSize: 20,
            marginVertical: 10,
            fontWeight: 'bold',
            color: '#000',
          }}>
          Overview
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'justify',
            color: '#ccc',
            marginBottom: 10,
          }}>
          {movieFull.overview}
        </Text>
        {/* {currencyFormatter.format(movieFull.budget, {'USD})} */}
      </View>
      <View style={{ marginBottom: 50 }}>
        <Text
          style={{
            fontSize: 20,
            marginBottom: 10,
            fontWeight: 'bold',
            color: '#000',
            marginHorizontal: 20,
          }}>
          Cast
        </Text>
        <FlatList
          data={cast}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <CastItem person={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ marginHorizontal: 20, height: 70 }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
