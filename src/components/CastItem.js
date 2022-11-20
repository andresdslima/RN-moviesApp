import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export function CastItem({ person }) {
  const uri = `https://image.tmdb.org/t/p/w500${person.profile_path}`;

  return (
    <View style={styles.container}>
      {person.profile_path && (
        <Image
          source={{ uri }}
          style={{ width: 50, height: 50, borderRadius: 10 }}
        />
      )}
      <View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: '#000',
            marginLeft: 10,
          }}>
          {person.name}
        </Text>
        <Text
          style={{ fontSize: 16, opacity: 0.7, color: '#000', marginLeft: 10 }}>
          {person.character}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 65,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 10,
    elevation: 9,
    marginRight: 20,
    padding: 10,
  },
});
