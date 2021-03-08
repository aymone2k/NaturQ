import React,{ useEffect , useState}  from 'react';
import{View, Text, ActivityIndicator } from 'react-native';
import { Button } from 'react-native-elements';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';
import { WebView } from 'react-native-webview';
import LogoTitle from '../../constants/LogoTitle'



export default function Courses2(){
    const[courses, setCourses] = useState(undefined);
     
    useEffect(function() {
        axios.get('http://localhost:8000/course/2')
        .then(function(reponse) {
            setCourses(reponse.data);
        })
    }, []);
 
    if(courses === undefined) {
        return (
            <View >
                <LogoTitle/>
            <ActivityIndicator size="large" color="#00ff00" />
           </View>
        )
    }
    
    return (
        <WebView 
        originWhitelist = {['*']}
        source={{html:"<iFrame src='https://www.google.com/maps/d/viewer?mid=11fEhEZiv72kKKy7XbbQ3GIufEcTpWUa2&ll=44.76392447806252%2C-0.6240407234153911&z=17'/>"}}/>
        );}
    