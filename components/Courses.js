import React,{ useEffect , useState}  from 'react';
import{View, Text, ActivityIndicator } from 'react-native';
import { Button } from 'react-native-elements';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';
import { WebView } from 'react-native-webview';



export default function Courses(){
    
    return (
        < WebView  source = { {  uri : 'https://www.google.com/maps/d/viewer?mid=11fEhEZiv72kKKy7XbbQ3GIufEcTpWUa2&ll=44.76392447806252%2C-0.6240407234153911&z=17'  } } / > 
       
     

     );}