
import React from 'react';
import { Text, View } from 'react-native';
import styles from './Home.styles';
import { Button } from 'react-native-elements';


export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      
      <Button title="Je suis un Adulte" onPress={()=>navigation.navigate('Adulte')} />
      <Button title="Je suis un Enfant" onPress={()=>navigation.navigate('Enfant')} />


    </View>


     

  );
}