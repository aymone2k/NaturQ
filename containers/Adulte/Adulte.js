
import React from 'react';
import { Text, View } from 'react-native';
import styles from './Adulte.styles';
import { Button } from 'react-native-elements';




export default function Adulte({navigation: {navigate}}) {
  return (
    <View style={styles.adulte}>
      
      
      <Button  buttonStyle={{backgroundColor: '#34856E',padding:20, margin:30}} 
          title="Reconnaissance"
          onPress={() =>navigate('Reconnaissance')
          }
        />
        <Button  buttonStyle={{backgroundColor: '#34856E', padding:20}} 
          title="Parcours"
          onPress={() =>navigate('Parcours')
          }
        />
    </View>
  );

}