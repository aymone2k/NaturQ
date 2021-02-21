import React, {Component, useState} from 'react';
import { StyleSheet, Text, Image, TextInput, View, Button, TouchableWithoutFeedback } from 'react-native';
import { Input } from 'react-native-elements';
import Hello from '../components/Hello.js';
import Kocxy from '../constants/Kocxy.js';


export default function Name() {

    const[name, setName] = useState("");

    const[nom, setNom] = useState([]);
  
    const handlePressName = function(){
        
          setNom([...nom, name]);
          setName('');
          
        }
    
        
        return(<View>
             
        <View >
        <Input placeholder= {"Saisie ton prénom ici"} onChangeText={text=> setName(text)} value={name} />
        <Button title="valider" onPress={handlePressName}/>
        
           </View>   
           <View>
  {nom.map((item)=>{return <View><Text> Bienvenue,{item}</Text>

<Hello
 avatar={Kocxy[1].avatar}
 phrase2={Kocxy[1].phrase2}
  phrase1={Kocxy[1].phrase1}
 
/>
</View>
})}
 
</View>
               
    </View>);

}