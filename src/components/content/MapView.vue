<template>
  <div id="app">
    <l-map id="map" ref="map"
      :zoom='8'
      :minZoom='5'
      :maxZoom='18'
      :center='[36.176267, 126.976912]'
    >
      <l-tile-layer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <l-marker
        :lat-lng='[36.176267, 126.976912]'
        :icon='defaultIcon'
      />

    </l-map>
  </div>
</template>

<script>
import L from 'leaflet'
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet/dist/leaflet-src.js'
import baseIcon from '@/assets/green05_5.png'

export default {
  name: 'MapView',
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  data: () => ({
    defaultIcon: L.icon({
      iconUrl: baseIcon,
      iconSize: [38, 40],
      iconAnchor: [22, 94],
    })
  }),
}
</script>

<style scoped>
#app {
  width: 100%;
  height: 100%;
}
</style>