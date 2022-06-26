import React from 'react';
import styles from './styles.module.css';
import {
  MapContainer,
  TileLayer,
  Marker,
  ZoomControl,
  GeoJSON,
} from 'react-leaflet';

export default function Maps(props) {
  const {
    data,
    geoJson,
    handleClick
  } = props;

  const countryStyle = {
    fillOpacity: 0.7,
    color: 'black',
    weight: 2
  };

  const onEachProvince = (province, layer) => {
		let high = 66.74699796;
		let low = 43.54711969;
    const totalBudaya = province.properties.totalBudaya;

		if (totalBudaya >= high) {
			layer.options.fillColor = "#238823";
		} else if (totalBudaya <= low) {
			layer.options.fillColor = "#D2222D";
		} else {
			layer.options.fillColor = "#FFBF00";
		}
  };

  return (
    <div className={styles.root}>
      <MapContainer center={[-0.789275, 117.921326]} zoom={5} zoomControl={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data && data.map((i, idx) => (
          <Marker
            key={idx}
            position={[i.latitude, i.longitude]}
            eventHandlers={{
              click: () => {
                handleClick(i.id, i.nama_provinsi)
              },
            }}
          />
        ))}
        <GeoJSON
          style={countryStyle}
          data={geoJson}
          onEachFeature={onEachProvince}
        />
        <ZoomControl position='topright' />
      </MapContainer>
    </div>
  )
}
