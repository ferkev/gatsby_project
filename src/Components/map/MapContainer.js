import React from 'react';
import GoogleMapReact  from 'google-map-react';
import PropsType from 'prop-types';

const Marker = ({text}) => {
  return (
    <div style={{ background: "red", borderRadius: "100", color: "red"}}>
      <img src={text} alt="map_icon" />
    </div>
  )
}

Marker.PropsType = {
  text: PropsType.string.isRequired,
}


const Map = () => {

  return (
    <div style={{ height: '250px', width: '80%', marginLeft: "auto", marginRight: "auto"} }>
      <GoogleMapReact
         bootstrapURLKeys={{
          key: `${process.env.API_GOOGLE_MAP}`
        }}
        defaultCenter = {{lat: 48.8534, lng: 2.3488}}
        defaultZoom = {11}
      >
        <Marker
          lat={48.8534}
          lng={2.3488}
          text= 'https://developers.google.com/maps/documentation/javascript/examples/full/images/library_maps.png'
        />
      </GoogleMapReact>
    </div>
  )
}

export default Map;