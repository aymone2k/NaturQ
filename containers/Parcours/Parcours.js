
import React,{ useEffect , useState}  from 'react';
import { Text, View } from 'react-native';
import styles from './Parcours.styles';
import { Button } from 'react-native-elements';
import Etape from '../../components/Etape.js';
import Fiche from '../../components/Fiche.js';



export default function Parcours() {

  const[idResult,setIdResult]=useState()
  const[idEtape, setIdEtape] = useState(1)

  return (
    <View style={styles.container}>
          {idEtape !== undefined &&
        <Etape 
          id={idEtape}
          setId={setIdEtape}
          />
      }
      {idResult !== undefined &&
          <Fiche
            id={idResult}
            setId={setIdResult}
          />
      }
      
    
    </View> 
  );
}