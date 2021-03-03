import React,{ useEffect , useState}  from 'react';
import{View, Text, ActivityIndicator } from 'react-native';
import { Button } from 'react-native-elements';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';



export default function Courses(props){
    const[courses, setCourses] = useState(undefined);
  

     useEffect(function(){
        axios.get("http://localhost:8000/course/" + props.id)  
        .then(function(reponse){ 
            setCourses (reponse.data); 
        })
     }, [props.id]);

   

     if (courses === undefined){
         return (<View >
             <ActivityIndicator size="large" color="#00ff00" />
            </View>
         )}
    return (<View >
        
            <Text>{courses.title}</Text>
            <View style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
        bootstrapURLKeys={{ key:AIzaSyB50mETCdDw-BvMAiwtjCSIr96Bz_MtyyU }}
          
          defaultCenter={map.center}
          defaultZoom={map.zoom}
        >
         
        </GoogleMapReact>
      </View>
            {courses.name.map(function(nameData){
                return(<View><Text>{nameData.setId}</Text> 
                 <AnyReactComponent lat={latitude.id} lng={longitude.id} />
                 </View>
                    
                   

                )
               
               
        })}
       
       </View>

     );}