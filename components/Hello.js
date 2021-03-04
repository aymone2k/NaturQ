import { StyleSheet, Text, Image, View } from 'react-native';

import React, {useEffect, useState} from 'react';
import Speak from './Speak';


export default function Hello({phrase1, avatar}) {


    
        
        return<View style={styles.hello}>
      
        <Image source={avatar} style={{width:60, height:100}}/>
        <Speak  >{phrase1}</Speak>
                       
        
    </View>

}

const styles = StyleSheet.create({
    hello:{
      flex:1,
      
    },
    
})  