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
          <video ref="video" playsinline autoplay></video>``
          <div class="scanner-animation"></div>
        </div>
        <button class="close-button" @click="openScanner = false">
          <span class="close-icon">&times;</span>
        </button>
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
      /// const Token: string = this.$store.state.token;

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
                // #
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
  width: calc(100% - 40px);
  max-width: 400px;
  border-radius: 4px;
  position: relative;
}
#video-container {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 75%;
  border: 4px solid #00ff00;
  box-shadow: 0 0 10px 2px rgba(0, 255, 0, 0.5);
  border-radius: 4px;
  overflow: hidden;
}

#video-container video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.close-button {
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: #FF5A34;
  cursor: pointer;
  padding: 0;
}
.close-icon {
  font-size: 24px;
  font-weight: bold;
  line-height: 1;
}
.scanner-animation {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 2px solid #00ff00;
  animation: scanner-animation 2s linear infinite;
}

@keyframes scanner-animation {
  0% {
    transform: translateY(0%);
  }
  50% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0%);
  }
}
</style>
