import React from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import withScriptjs from 'react-google-maps/lib/async/withScriptjs'

const AsyncGettingStartedExampleGoogleMap = withScriptjs(
  withGoogleMap(
    props => (
      <GoogleMap
        ref={props.onMapLoad}
        defaultZoom={3}
        defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
        onClick={props.onMapClick} >
        {props.markers.map(marker => (
          <Marker
            {...marker}
            onRightClick={() => props.onMarkerRightClick(marker)}
          />
        ))}
      </GoogleMap>
    )
  )
)

const markers = [{
  position: {
    lat: 25.0112183,
    lng: 121.52067570000001,
  },
  key: `Taiwan`,
  defaultAnimation: 2,
}]

render(
  <AsyncGettingStartedExampleGoogleMap
    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp"
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `100%` }} />}
    mapElement={<div style={{ height: `100%` }} />}
    markers={markers}
  />, document.getElementById('hamsa_map')
)
