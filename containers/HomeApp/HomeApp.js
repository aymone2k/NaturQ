
import React from 'react';
import {ImageBackground, Text, View ,Image} from 'react-native';
import styles from './HomeApp.styles';
import { Button } from 'react-native-elements';





export default function HomeApp({navigation}) {



  return (
    <View style={styles.homeApp}>
 <ImageBackground source={require('../../assets/images/screen/foret.jpg')} style={styles.image}>
 <View style={styles.homeText}>
 <Text style={styles.text}> NaturQuest        
         </Text>
         <Button title="ENTRER" buttonStyle={{backgroundColor: '#34856E',padding:"10px"}}  onPress={()=>navigation.navigate('Home')} />
         
        
   </View>        
 
   </ImageBackground>
    </View>
  
     

   


     

  );
}