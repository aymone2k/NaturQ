
import React from 'react';
import { Text, View } from 'react-native';
import styles from './Adulte.styles';
import { Button } from 'react-native-elements';




export default function Adulte({navigation: {navigate}}) {
  return (
    <View style={styles.container}>
      
      <Button
          title="Reconnaissance"
          onPress={() =>navigate('Reconnaissance')
          }
        />
        <Button
          title="Parcours"
          onPress={() =>navigate('Parcours')
          }
        />
    </View>
  );

}