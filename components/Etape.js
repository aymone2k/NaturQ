import React,{ useEffect , useState}  from 'react';
import{View, StyleSheet, Button, Text, ActivityIndicator } from 'react-native';

import axios from 'axios';


export default function Etape(props){
    const[etape, setEtape] = useState(undefined);

     useEffect(function(){
        axios.get("http://localhost:8000/question/" + props.id)  
        .then(function(reponse){ 
            setEtape (reponse.data); 
        })
     }, [props.id]);

   

     if (etape === undefined){
         return (<View style={StyleSheet.container}>
             <ActivityIndicator size="large" color="#00ff00" />
            </View>
         )}
    return (<View style={StyleSheet.container}>
        
            <Text>{etape.title}</Text>

            {etape.nextProposals.map(function(nextProposalsData){
                return <Button  buttonStyle={{backgroundColor: '#34856E',padding:"20px"}}  title={nextProposalsData.content}onPress={function(){
                props.setId(nextProposalsData.nextStep.id)
            }}/>
        })}
       
       </View>

     );}