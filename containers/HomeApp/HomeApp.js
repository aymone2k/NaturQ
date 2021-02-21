
import React from 'react';
import {ImageBackground, Text, View } from 'react-native';
import styles from './HomeApp.styles';
import { Button } from 'react-native-elements';





export default function HomeApp({navigation}) {



  return (
  
      <ImageBackground source={require('../../assets/images/screen/tree.jpg')} style={styles.image}>
     
    
    
     
      <Button title="enter" onPress={()=>navigation.navigate('Home')} />
      </ImageBackground>

   


     

  );
}