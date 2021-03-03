
import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import styles from './Home.styles';
import { Button } from 'react-native-elements';
import LogoTitle from '../../constants/LogoTitle'

export default function Home({navigation}) {
  return (
    <View style={styles.home}>
      <ImageBackground source={require('../../assets/images/screen/tree.jpg')} style={styles.homeImage}>
      <LogoTitle style={{ margin:20}} />
      <View>
      <Button  buttonStyle={{backgroundColor: '#34856E', padding:20, marginBottom:30}} title="Je suis un Adulte" onPress={()=>navigation.navigate('Adulte')} />
      <Button  buttonStyle={{backgroundColor: '#34856E', padding:20}} title="Je suis un Enfant" onPress={()=>navigation.navigate('Enfant')} />

      </View>
      </ImageBackground>
      
      
      


    </View>


     

  );
}