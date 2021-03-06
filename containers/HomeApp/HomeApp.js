
import React from 'react';
import {ImageBackground, Text, View ,Image} from 'react-native';
import styles from './HomeApp.styles';
import { Button } from 'react-native-elements';
import AnimHaut from '../../components/AnimHaut.js';



export default function HomeApp({navigation}) {


  return (
    <View style={styles.homeApp}>
 <ImageBackground source={require('../../assets/images/screen/foret.jpg')} style={styles.image}>
 <AnimHaut >
 <View style={styles.homeText}>
 <Text style={styles.text}> NaturQuest        
         </Text>
         <Button title="ENTRER" buttonStyle={{backgroundColor: '#34856E', padding:10}}  onPress={()=>navigation.navigate('Home')} />
         
        
   </View>        
   </AnimHaut>
   </ImageBackground>
    </View>
  
     

   


     

  );
}