//Anime pour faire bouger la fiche finale

//anime pour pousser vers le haut
import React, {useEffect, useRef, useState} from 'react';
import { StyleSheet, Animated, Text, Image, TextInput, View } from 'react-native';
import { Input, Button, Overlay } from 'react-native-elements';


export default function AnimBouge(props) {


    const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

    useEffect(() => { Animated.timing( fadeAnim, { toValue: 1,  duration: 10000, }).start();}, [fadeAnim])
  
    return (
      <Animated.View style={{...props.style, opacity: fadeAnim, }} >
        {props.children}
      </Animated.View>  );
  }
  
 
 
   