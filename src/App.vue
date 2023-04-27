<template :style="cssVars">
  <div :style="cssVars" class="statusbar"></div>
  <router-view
    :class="{
      view: true,
      marginal: !['login', 'sign-up'].includes(page),
    }"
    :key="$route.fullPath"
  />
  <Navbar v-if="!['login', 'sign-up'].includes(page)" />
  <QrCodeComponent/>
</template>

<script lang="ts">
/* eslint-disable import/no-extraneous-dependencies */
import { Vue, Options } from 'vue-class-component';
/* eslint-disable import/no-extraneous-dependencies */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
/* eslint-disable import/no-extraneous-dependencies */
import { library } from '@fortawesome/fontawesome-svg-core';
/* eslint-disable import/no-extraneous-dependencies */
import {
  faQrcode,
  faCamera,
  faCameraRetro,
  faPlus,
}
  from '@fortawesome/free-solid-svg-icons';
/* eslint-disable import/no-extraneous-dependencies */
import Navbar from '@/components/NavbarComponent.vue';
/* eslint-disable import/no-extraneous-dependencies */
import QrCodeComponent from '@/components/QrCodeComponent.vue';

library.add(faQrcode, faCamera, faCameraRetro, faPlus);

@Options({
  components: { Navbar, QrCodeComponent, FontAwesomeIcon },
})
export default class App extends Vue {
  public statusBarHeight = 24;
  public showMenu = false;

  get page(): string {
    return (this.$route.name ?? this.$route.path.substring(1)).toString();
  }

  get cssVars(): object {
    return {
      '--status-bar-height': `${this.statusBarHeight}px`,
      '--overflow-y': ['login', 'sign-up'].includes(this.page)
        ? 'hidden'
        : 'scroll',
    };
  }

  openScannerAction() {
    // Mettez votre autre action ici
  }

  createPublication() {
    // Mettez votre autre action ici
    this.showMenu = false;
  }

  showUserQrCode() {
    // Mettez votre troisième action ici
    this.showMenu = false;
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
.floating-button {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 80px;
  right: 30px;
  font-size: 32px;
  line-height: 1;
  background-color: #0517B9;
  color: #ffffff;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 24px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.floating-button:hover {
  background-color: #FE7B52;
}
</style>
