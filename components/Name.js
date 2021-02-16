import React, {Component, useState} from 'react';
import { StyleSheet, Text, Image, TextInput, View, Button, TouchableWithoutFeedback } from 'react-native';
import { Input } from 'react-native-elements';



export default function Hello() {
    const[value, onChangeText] = React.useState();

    const handleChangeState = function(){onChangeText({value})}
  
  
        
        return<View>
             
        <View >
        <TextInput editable placeholder= "Saisie ton prénom ici" onChangeText={handleChangeState} />
          
           </View>
            
        
        
        
        
        
      
        
    </View>

}