import { StyleSheet, Text, Image, View } from 'react-native';

import React from 'react';



export default function Hello({phrase1, avatar,phrase2}) {
    
        
        return<View>
        <View >
        <Text>{phrase1}</Text>
            <Image source={avatar} style={{width:60, height:100}}/>
            <Text>{phrase2}</Text>
            
           </View>
     
        
    </View>

}

const styles = StyleSheet.create({
    homeApp:{
      flex:1,
      flexDirection:"column"
    },
})  