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
import Enfant2 from '../Enfant2/Enfant2.js';
import Parcours from '../Parcours';
import Reconnaissance from '../Reconnaissance';
import Etape from '../../components/Etape';
import Fiche from '../../components/Fiche';
import Name from '../../components/Name.js'
import NameSaisi from '../../components/NameSaisi';
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
        <Stack.Screen name="Enfant2" component={Enfant2} />
        <Stack.Screen name="Parcours" component={Parcours} />
        <Stack.Screen name="Reconnaissance" component={Reconnaissance} />

       
        </Stack.Navigator>

       
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default App;
