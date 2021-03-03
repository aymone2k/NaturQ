import React,{useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, Button, Animated, Dimensions } from 'react-native';


  

export default function Speak(props) {

  const[positionToDisplay, setPositionToDisplay] = useState(0);

useEffect(() => {
     
  let position = positionToDisplay;

  const interval =  setInterval(() => {
      position++;
      setPositionToDisplay(position)
    }, 100); return()=> clearInterval(interval);}, [])

  return (
   
    <View>
      <Text>
        {props.children.slice(0, positionToDisplay || 0)}
      </Text>
    </View>
   
  );
  
  }
  
