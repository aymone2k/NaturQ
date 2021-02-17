
import React from 'react';
import { Text, View } from 'react-native';
import styles from './Reconnaissance.styles';
import { Button } from 'react-native-elements';
import Etape from '../../components/Etape.js';
import Fiche from '../../components/Fiche.js';
 
export default function Reconnaissance({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Enfant</Text>
      <Etape/>
      <Button
          title="Back to home"
          onPress={() =>navigation.navigate('Home')
          }
        />
    </View> 
  );
}