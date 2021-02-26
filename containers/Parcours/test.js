import React, { Component } from 'react';
import { Text, View } from 'react-native';
import GoogleMapReact from 'google-map-react';
import MyGreatPlace from './my_great_place.jsx';

 
const AnyReactComponent = ({ text }) => <View>{text}</View>;
 
class SimpleMap extends Component {
    static propTypes = {
        center: PropTypes.array,
        zoom: PropTypes.number,
        greatPlaceCoords: PropTypes.any
      };
    
      static defaultProps = {
        center: [59.938043, 30.337157],
        zoom: 9,
        greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
      };

      shouldComponentUpdate = shouldPureComponentUpdate;

      constructor(props) {
        super(props);
      } 
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <View style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
        bootstrapURLKeys={{ key:AIzaSyB50mETCdDw-BvMAiwtjCSIr96Bz_MtyyU }}
          
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
<MyGreatPlace lat={59.955413} lng={30.337844} text={'A'} /* Kreyser Avrora */ />
        <MyGreatPlace {...this.props.greatPlaceCoords} text={'B'} /* road circle */ />

        </GoogleMapReact>
      </View>
    );
  }
}
 
export default SimpleMap;