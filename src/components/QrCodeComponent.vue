<template>
  <div>
    <div class="floating-button" @click="showMenu = !showMenu">
      <span>+</span>
    </div>
    <div class="dropdown-menu" v-if="showMenu">
      <div class="floating-option" @click="openCamera">
        <i class="fa fa-camera"></i>
      </div>
      <div class="floating-option" @click="createPublication">
        <i class="fa fa-comments"></i>
      </div>
      <div class="floating-option" @click="showUserQrCode">
        <i class="fa fa-qrcode"></i>
      </div>
    </div>
    <div class="modal" v-if="openScanner">
      <div class="modal-content">
        <div id="video-container">
          <!-- eslint-disable-next-line vuejs-accessibility/media-has-caption -->
          <video ref="video" playsinline autoplay></video>
        </div>
        <button class="close-button" @click="openScanner = false">Fermer</button>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable import/no-extraneous-dependencies */
import QrScanner from 'qr-scanner';
/* eslint-disable import/no-extraneous-dependencies */
import 'qr-scanner/qr-scanner-worker.min';

export default {
  data() {
    return {
      openScanner: false,
      showMenu: false,
      qrScanner: null,
    };
  },
  methods: {
    createPublication() {
      // #
    },
    showUserQrCode() {
      // #
    },
    openCamera() {
      this.openScanner = true;
      if (!this.qrScanner) {
        this.$nextTick(() => {
          if (this.$refs.video) {
            this.qrScanner = new QrScanner(this.$refs.video, (result) => {
              console.log(result);
              this.openScanner = false;
              this.qrScanner.stop();
              if (result && result.codeResult && result.codeResult.code) {
                // Do something with the result
              }
            });
            this.qrScanner.start();
          }
        });
      } else {
        this.qrScanner.start();
      }
    },
  },
  beforeUnmount() {
    if (this.qrScanner) {
      this.qrScanner.stop();
    }
  },
};
</script>
<style scoped>
.floating-button {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 60px;
  height: 60px;
  background-color: #0517B9;
  border-radius: 50%;
  color: #FFF;
  text-align: center;
  font-size: 24px;
  line-height: 60px;
  box-shadow: 2px 2px 3px #999;
  transition: all 0.3s ease-in-out;
  z-index: 9999;
}
.dropdown-menu {
  position: absolute;
  right: 30px;
  bottom: 100px;
  display: flex;
  flex-direction: column-reverse;
}
.floating-option {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0517B9;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  color: #ffffff;
  cursor: pointer;
  margin-bottom: 10px;
  z-index: 99;
}
.floating-option:hover {
  background-color: #FE7B52;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
}
.modal-content {
  background-color: white;
  padding: 20px;
  width: 75%;
  border-radius: 4px;
  position: relative;
}
#video-container {
    width: 100%;
    height: auto;
  }

  #video-container video {
    width: 100%;
    height: auto;
  }
  .close-button {
  position: absolute;
  top: 30px;
  right: 40px;
  background-color: #FFF;
  border: 2px solid #FF5A34;
  border-radius: 10%;
  width: 80px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: #FF5A34;
  cursor: pointer;
}
</style>
