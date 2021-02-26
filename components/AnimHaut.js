//anime pour pousser vers le haut
import React, {useEffect, useRef, useState} from 'react';
import { StyleSheet, Animated, Dimensions, Text, Image, TextInput, View , Easing} from 'react-native';



export default function AnimHaut(props) {


    const fadeAnim = useRef(new Animated.Value(0)).current 
    const Anim = useRef(new Animated.Value(Dimensions.get('window').height)).current 

    useEffect(() => {Animated.parallel([Animated.timing(fadeAnim, {toValue:1, duration: 3500, }), Animated.timing( Anim, { toValue: -50,  duration: 3500, easing: Easing.linear(), }) ]).start();}, [fadeAnim, Anim])
  
    return (
      <Animated.View style={{...props.style, opacity: fadeAnim, top: Anim}} >
        {props.children}
      </Animated.View>  );
  }
  
 
 