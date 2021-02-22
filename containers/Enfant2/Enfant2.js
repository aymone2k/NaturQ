
import React, {useState} from 'react';
import { Text, View, Image } from 'react-native';
import styles from '../Enfant2/Enfant2.styles';
import { Button } from 'react-native-elements';
import Hello from '../../components/Hello.js';
import Kocxy from '../../constants/Kocxy.js';
import Name from '../../components/Name.js'
import NameSaisi from '../../components/NameSaisi';





export default function Enfant2({navigation: {navigate}}) {
  console.log(<Hello/>)
   
  return (
    <View>
  <Hello
 avatar={Kocxy[2].avatar}
 phrase2={Kocxy[2].phrase2}
  phrase1={Kocxy[2].phrase1}
 
/>

  
       
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