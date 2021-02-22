import { StyleSheet, Text, Image, TextInput, View, Button, TouchableWithoutFeedback } from 'react-native';
import { Input } from 'react-native-elements';
import React, {useState} from 'react';
import Kocxy from '../constants/Kocxy.js';


export default function Hello({phrase1, avatar,phrase2}) {
    
        
        return<View>
        <View >
        <Text>{phrase1}</Text>
            <Image source={avatar} style={{width:60, height:100}}/>
            <Text>{phrase2}</Text>
            
           </View>
     
        
    </View>

}
