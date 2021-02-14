import { StyleSheet, Text, Image, TextInput, View, Button, TouchableWithoutFeedback } from 'react-native';
import { Input } from 'react-native-elements';
import React, {useState} from 'react';



export default function Hello({phrase, avatar}) {
    
   
   
        
        return<View>
        <View >
            <Image source={avatar} style={{width:20, height:20}}/>
            <Text>{phrase}</Text>
            
           </View>
            
        
        
        
        
        
      
        
    </View>

}
