
import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import styles from './Home.styles';
import { Button } from 'react-native-elements';


export default function Home({navigation}) {
  return (
    <View style={styles.home}>
      <ImageBackground source={require('../../assets/images/screen/tree.jpg')} style={styles.homeImage}>

      <View>
      <Button  buttonStyle={{backgroundColor: '#34856E',padding:"20px", marginBottom:"30px"}} title="Je suis un Adulte" onPress={()=>navigation.navigate('Adulte')} />
      <Button  buttonStyle={{backgroundColor: '#34856E',padding:"20px"}} title="Je suis un Enfant" onPress={()=>navigation.navigate('Enfant')} />

      </View>
      </ImageBackground>
      
      
      


    </View>


     

  );
}