
import React,{ useEffect , useState}  from 'react';
import { Text, View, Image } from 'react-native';
import styles from './ParcoursEnfant.styles.js';
import { Button } from 'react-native-elements';
import Courses1 from '../../components/Courses1.js';
import Courses2 from '../../components/Courses2.js';
import Hello from '../../components/Hello.js';
import Kocxy from '../../constants/Kocxy.js';




export default function ParcoursEnfant({navigation: {navigate}}) {
 

  return (
<View style={{flex:1, justifyContent:'center', alignItems:'center' }}>
<Hello avatar={Kocxy[4].avatar} phrase1={Kocxy[4].phrase1} />
<View style={{flex:1, justifyContent:'center', alignItems:'center' }}>
      
      <Text> Parcours 1</Text>
      <Text> Durée </Text>
      <Text> Distance</Text>
      
          <Image />
      <Button buttonStyle={{backgroundColor: '#34856E',width:150}} containerStyle={{margin:10}} title="Découvrir" onPress={()=>navigate('Courses1')}/>
    </View>

    <View style={{flex:1, justifyContent:'center', alignItems:'center' }}>
  
      <Text> Parcours 2</Text>
      <Text> Durée </Text>
      <Text> Distance</Text>
      
          <Image />
      <Button buttonStyle={{backgroundColor: '#34856E',width:150}} containerStyle={{margin:10}} title="Découvrir" onPress={()=>navigate('Courses2')}/>
    </View>


  
 
</View>
   );
  }