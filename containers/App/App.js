import { StatusBar } from 'expo-status-bar';
import React,{ useEffect , useState}  from 'react';

import { Text, View } from 'react-native';
import styles from './App.styles';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeApp from '../HomeApp';
import Home from '../Home';
import Adulte from '../Adulte';
import Enfant from '../Enfant';

import Parcours from '../Parcours';
import ParcoursEnfant from '../ParcoursEnfant';
import Reconnaissance from '../Reconnaissance';
import ReconnaissanceAdulte from '../ReconnaissanceAdulte';

import LogoTitle from '../../constants/LogoTitle.js';



const Stack = createStackNavigator();

const App = () => {
  

  return (
    <NavigationContainer style={styles.app} >
      <Stack.Navigator  screenOptions={{
         
          headerStyle: {
            backgroundColor: '#34856E',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitle: props => <LogoTitle {...props} />
          
        }}>
        <Stack.Screen name="HomeApp" component={HomeApp}/>
          
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Adulte" component={Adulte} />
        <Stack.Screen name="Enfant" component={Enfant} />
        <Stack.Screen name="Parcours" component={Parcours} />
        <Stack.Screen name="ParcoursEnfant" component={ParcoursEnfant} />
        <Stack.Screen name="Reconnaissance" component={Reconnaissance} />
        <Stack.Screen name="ReconnaissanceAdulte" component={ReconnaissanceAdulte} />

       
        </Stack.Navigator>

       
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default App;
