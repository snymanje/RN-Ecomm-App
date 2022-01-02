import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-paper';

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
    icon,
    photo = [
      'https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    address = '100 some random street',
    isOpenNow = 4,
    isClosedTemporarilty,
  } = restaurant;

  return (
    <View>
      <Card elevation={5} style={styles.card}>
        <Card.Cover key={name} styles={styles.cover} source={{ uri: photo[0] }} />
        <Text style={styles.title}>{name}</Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
  },
  cover: {
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    padding: 8,
  },
});
