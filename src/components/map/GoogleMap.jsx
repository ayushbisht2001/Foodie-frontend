import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';

const   mapStyles = {
    width: '100%',
    height: '100%',
  };

class GoogleMap extends Component { 

 
render() { 
        return ( 
          <div
          className='position-relative'
          style = {{ width : "800px", height : "500px"}}
          >
            <Map
            google={this.props.google}
            zoom={18}
            style={mapStyles}
            initialCenter={{ lat: this.props.lat, lng: this.props.lng}}
          >
            <Marker position={{ lat: this.props.lat, lng: this.props.lng }} />
        </Map>
        </div>
         );
    }
}
 
  export default GoogleApiWrapper({
    apiKey: process.env.MAP_API
  })(GoogleMap);