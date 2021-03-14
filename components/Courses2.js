import React,{ useEffect , useState}  from 'react';
import{View, Image, Text, ActivityIndicator } from 'react-native';

import axios from 'axios';
import { WebView } from 'react-native-webview';
import LogoTitle from './../constants/LogoTitle'



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
            <View style={{flex:1, justifyContent:'center', alignItems:'center' }}>
                <LogoTitle/>
            <ActivityIndicator size="large" color="#00ff00" />
           </View>
        )
    }
    
    return (
        <View>
             <Image style={{width:700, height:1000,  fex:1, resizeMode:'contain'}} source={require('../assets/images/screen/parcours1.jpg')} />
       
 
        </View>
        );}
    