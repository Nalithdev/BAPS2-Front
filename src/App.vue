<template :style="cssVars">
  <div :style="cssVars" class="statusbar"></div>
  <router-view :class="{
    view: true,
    marginal: !['login', 'sign-up'].includes(page)
  }" :key="$route.fullPath"/>
  <Navbar v-if="!['login', 'sign-up'].includes(page)"/>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import Navbar from '@/components/NavbarComponent.vue';

@Options({
  components: { Navbar },
})
export default class App extends Vue {
  public statusBarHeight = 24;

  get page(): string {
    return (this.$route.name ?? this.$route.path.substring(1)).toString();
  }

  get cssVars(): object {
    return {
      '--status-bar-height': `${this.statusBarHeight}px`,
      '--overflow-y': ['login', 'sign-up'].includes(this.page) ? 'hidden' : 'scroll',
    };
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
  overflow-y: var(--overflow-y);
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

.view {
  margin-top: var(--status-bar-height);
  background-color: #FFF;
  overflow: hidden;
  position: relative;
}

.marginal {
  padding-top: 20px;
  margin-top: 30px;
  padding-bottom: 70px;
}

.statusbar {
  position: fixed;
  display: block;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  background-color: #F9F9F9;
}
</style>
