<template>
<v-app>
  <v-app-bar app class="transparent-navbar" :elevation="0">
    <v-container class="d-flex align-center">
      <v-app-bar-title class="abc"><v-btn class="abc" to="/">HelloWord</v-btn></v-app-bar-title>
      <v-btn class="abc" prepend-icon="mdi-home-clock-outline" to="/">Home</v-btn>
      <v-btn class="abc" prepend-icon="mdi-alarm-snooze" to="/list">Issues</v-btn>
      <v-btn class="abc" prepend-icon="mdi-clock-time-eight-outline " to="/settings">Setting</v-btn>
    </v-container>
  </v-app-bar>
  <v-main id="container">
    <router-view v-slot="{ Component }">
      <keep-alive include="Home">
        <component :is="Component"></component>
      </keep-alive>
    </router-view>
  </v-main>
</v-app>
</template>

<script setup>
</script>

<style scoped>
body {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

#container {
  background-image: url(./assets/123.gif);
  background-position: center;
  width: 100%;
  height: 100%;
  background-color: white;
  color: black;
}

.transparent-navbar {
  background-color: transparent !important;
  box-shadow: none !important;
  color: #000 !important;
  }
  .abc{
    font-weight: bold;
  }
</style>
