import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const Map = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: props.lat, lng: props.lng }}
    >
        {props.isMarkerShown && <Marker position={{ lat: props.lat, lng: props.lng }} />}
        {console.log(props)}
    </GoogleMap>
))


export default Map;