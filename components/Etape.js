import React,{ useEffect , useState}  from 'react';
import{View, StyleSheet, Button, Text } from 'react-native';

import axios from 'axios';


export default function Etape(props){

    const [etape, setEtape] = useState();
    useEffect(function(){
        axios.get('http://localhost:8000/step/1/' + props.id).then(function(reponse){
            setEtape(reponse.data);
        })
    },[props.id]);
    if(etape === undefined){
        return(<View>
            <Text>En Chargement ...</Text>
        </View>)
    } 
    return(
        <View>
            <Text>
                {etape.name_step}
            </Text>
            {etape.question.map(function(questionData){
                return <Button title={questionData.name_question} onPress={function(){props.setId(questionData.nextStep.id)}}/>
            })}
            {
                etape.question.map(function(questionData){
                    return <Text>{question.picture}</Text>
                })
            }
        </View>
    );
}