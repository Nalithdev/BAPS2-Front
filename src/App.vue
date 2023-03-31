<template>
  <router-view :class="{ marginal: !['login', 'sign-up'].includes(page) }"/>
  <Navbar v-if="!['login', 'sign-up'].includes(page)"/>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import Navbar from '@/components/NavbarComponent.vue';

@Options({
  components: { Navbar },
})
export default class App extends Vue {
  get page(): string {
    return (this.$route.name ?? this.$route.path.substring(1)).toString();
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Euclid Circular', Verdana, Geneva, Tahoma, sans-serif;
}

html, body, #app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

@font-face {
  font-family: "Euclid Circular";
  src: local("Euclid Circular A"),
    url(./fonts/EuclidCircular/EuclidCircularRegular.ttf) format("truetype");
}

@font-face {
  font-family: "Euclid Circular";
  src: local("Euclid Circular A Bold"),
    url(./fonts/EuclidCircular/EuclidCircularBold.ttf) format("truetype");
  font-weight: 700;
}

.marginal {
  margin-top: 40px;
}
</style>
