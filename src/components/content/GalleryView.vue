<template>
  <div>
    <v-card>
      <v-tabs
        background-color="lime darken-1"
        color="rgb(100, 134, 7)"
        center-active
        dark
      >
        <v-tab>BMW</v-tab>
        <v-tab>APRILIA</v-tab>
        <v-tab>DUCATI</v-tab>
        <v-tab>YAMAHA</v-tab>
        <v-tab>SUZUKI</v-tab>
        <v-tab>KAWASAKI</v-tab>
        <v-tab>HONDA</v-tab>
        <v-tab>HARLEY DAVIDSON</v-tab>
        <v-tab>TRIUMPH</v-tab>
        <v-tab>VESPA</v-tab>
        <v-tab>KTM</v-tab>
        <v-tab>MV AGUSTA</v-tab>
      </v-tabs>
    </v-card>
    <v-carousel
      cycle
      height="600"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
      >
        <v-sheet
          :color="colors[i]"
          height="100%"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <div class="text-h2">
              {{ slide }} Slide
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
      }
    },
  }
</script>