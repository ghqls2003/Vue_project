<template>
  <v-app>
    <v-app-bar
      app
      color="lime lighten-4"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="@/assets/logo.png"
          transition="scale-transition"
          width="40"
        />
        <div class="greentxt" style="font-weight:bold; font-size:20px">by Ryong</div>
      </div>

      <v-spacer></v-spacer>
      <template v-slot:extension>
        <v-tabs align-with-title center-active centered>
          <v-tab>
            <router-link class="routes" to="/">홈</router-link>
          </v-tab>
          <v-tab>
            <router-link class="routes" to="/map">지도</router-link>
          </v-tab>
          <v-tab>
            <router-link class="routes" to="/calendar">달력</router-link>
          </v-tab>
          <v-tab>
            <router-link class="routes" to="/dataiterator">데이터 분석</router-link>
          </v-tab>
          <v-tab>
            <router-link class="routes" to="/gallery">갤러리</router-link>
          </v-tab>
          <v-tab>
            <router-link class="routes" to="/board">게시판</router-link>
          </v-tab>
        </v-tabs>
      </template>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2 greentxt">about</span>
        <v-icon class="greentxt">mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer
      app
      color="lime lighten-4"
      dark
    >
      <div class="greentxt">
        &copy; 2022. R_Dragon all right reserved.
      </div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data: () => ({
    //
  }),
};
</script>

<style scoped>
.routes {
  color: rgb(100, 134, 7);
  text-decoration: none;
  padding: 5px;
  margin: 5px 25px;
  font-size: 20px;
  font-weight: bold;
}
.greentxt {
  color: rgb(100, 134, 7);
}
</style>
