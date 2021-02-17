import React, {Component, useState} from 'react';
import { StyleSheet, Text, Image, TextInput, View, Button, TouchableWithoutFeedback } from 'react-native';
import { Input } from 'react-native-elements';



export default function Name( {nom} ) {

    const[name, handleChangeState] = useState("");

    
  
    const handlePressName = function(){
        
         nom = name
        console.log(nom)
    }
    
        
        return<View>
             
        <View >
        <Input placeholder= {"Saisie ton prénom ici"} onChangeText={handleChangeState} value={name} />
        <Button onPress={handlePressName}/>
         
           </View>
            
        
        
        
        
        
      
        
    </View>

}