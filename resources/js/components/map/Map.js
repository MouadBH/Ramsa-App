import React, { Component } from 'react';
import { InfoWindow, withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

export var Map = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={props.zoom}
        defaultCenter={{ lat: props.lat, lng: props.lng }}
        onClick={props.handleMapClick}
    >
        {props.isMarkerShown && <Marker position={{ lat: props.lat, lng: props.lng }} />}
        {console.log(props)}
    </GoogleMap>
))

export const MapMuliMarker = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={props.zoom}
        defaultCenter={props.center}
    >
        {props.isMarkerShown && props.markers }
    </GoogleMap>
))


export const MapPutMarker = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: props.lat, lng: props.lng }}
        onClick={props.handleMapClick}
    >
        {props.isMarkerShown && <Marker position={ props.marker.position } />}
    </GoogleMap>
))

