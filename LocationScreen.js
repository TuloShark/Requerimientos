import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { useContext } from 'react';
import { ComedorContext } from './ComedorScreen';
import { useEffect } from 'react';

export default function App() {
  
  const { comedorActual } = useContext(ComedorContext);

  const comedoresCoords = {
    ITCR: {
      latitude: 9.853976232774478,
      longitude: -83.90713197285292,
      latitudeDelta: 0.0022,
      longitudeDelta: 0.0021,
    },
    LaDeportiva: {
      latitude: 9.85743336712369,
      longitude: -83.91084518657371,
      latitudeDelta: 0.0022,
      longitudeDelta: 0.0021,
    },
    SodaDelLago: {
      latitude: 9.854270132063096,
      longitude: -83.9103313301376,
      latitudeDelta: 0.0022,
      longitudeDelta: 0.0021,
    },
  };
  
  const [mapRegion, setMapRegion] = useState(comedoresCoords.ITCR);

  useEffect(() => {
    if (comedorActual && comedoresCoords[comedorActual]) {
      setMapRegion(comedoresCoords[comedorActual]);
    }
  }, [comedorActual]);

  return (
    <View style={styles.container}>
      <MapView style={styles.map}
        region={mapRegion}
      >
        <Marker coordinate={mapRegion} title='Marker' />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  map: {
    width: '100%',
    height: '100%',
  },
});