"use client"

import { Container as MapDiv, NaverMap, Marker, useNavermaps } from "react-naver-maps"

interface NaverMapComponentProps {
  lat: number
  lng: number
  title: string
}

export default function NaverMapComponent({ lat, lng, title }: NaverMapComponentProps) {
  const navermaps = useNavermaps()

  return (
    <MapDiv
      style={{
        width: "100%",
        height: "200px",
      }}
    >
      <NaverMap
        defaultCenter={new navermaps.LatLng(lat, lng)}
        defaultZoom={16}
        zoomControl={true}
        zoomControlOptions={{
          style: navermaps.ZoomControlStyle.SMALL,
          position: navermaps.Position.TOP_RIGHT,
        }}
        mapTypeControl={false}
        scaleControl={false}
        logoControl={false}
        mapDataControl={false}
      >
        <Marker position={new navermaps.LatLng(lat, lng)} title={title} />
      </NaverMap>
    </MapDiv>
  )
}
