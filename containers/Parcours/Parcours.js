
import React,{ useEffect , useState}  from 'react';
import { Text, View, Image } from 'react-native';
import styles from './Parcours.styles';
import { Button } from 'react-native-elements';
import Courses1 from '../../components/Courses1.js';
import Courses2 from '../../components/Courses2.js';



 
export default function Parcours() {
  const[parcours, setParcours] = useState(undefined);
  const handlePressCourse1 = ()=>{
   setParcours("parcours_1")
  }  
  const handlePressCourse2 = ()=>{
    setParcours("parcours_2")
   } 

  return (
<View style={{flex:1, justifyContent:'center', alignItems:'center' }}>

<View style={{flex:1, justifyContent:'center', alignItems:'center' }}>
      {parcours === "parcours_1" && <Courses1/>}
      <Text> Parcours 1</Text>
      <Text> Durée </Text>
      <Text> Distance</Text>
      
          <Image />
      <Button buttonStyle={{backgroundColor: '#34856E',width:150}} containerStyle={{margin:10}} title="Découvrir" onPress={handlePressCourse1}/>
    </View>

    <View style={{flex:1, justifyContent:'center', alignItems:'center' }}>
    {parcours === "parcours_2" && <Courses2/>}
      <Text> Parcours 2</Text>
      <Text> Durée </Text>
      <Text> Distance</Text>
      
          <Image />
      <Button buttonStyle={{backgroundColor: '#34856E',width:150}} containerStyle={{margin:10}} title="Découvrir" onPress={handlePressCourse2}/>
    </View>


  
 
</View>
   );
  }