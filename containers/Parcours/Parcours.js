
import React from 'react';
import { Text, View } from 'react-native';
import styles from './Parcours.styles';
import { Button } from 'react-native-elements';

export default function Parcours({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Parcours</Text>
      <Fiche/>
      <Button
          title="Back to home"
          onPress={() =>navigation.navigate('Home')
          }
        />
    </View>
  );
}