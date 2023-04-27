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
    <div class="modal camera-modal" v-if="openScanner">
      <div class="camera-modal-content">
        <div id="video-container">
          <!-- eslint-disable-next-line vuejs-accessibility/media-has-caption -->
          <video ref="video" playsinline autoplay></video>
          <div class="scanner-animation"></div>
        </div>
        <div class="scanqrcode-modal-content">
          <button class="close-button" @click="openScanner = false">Fermer</button>
        </div>
      </div>
    </div>
    <div class="modal qrcode-modal" v-if="showQrCode">
      <div class="qrcode-modal-content">
        <div class="close-button" @click="showQrCode = false">&#10005;</div>
        <img id="qrcode" src="" alt="QR Code">
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable import/no-extraneous-dependencies */
import QrScanner from 'qr-scanner';
/* eslint-disable import/no-extraneous-dependencies */
import 'qr-scanner/qr-scanner-worker.min';
import QRCode from 'qrcode';
import store from '@/store';

export default {
  data() {
    return {
      openScanner: false,
      showMenu: false,
      qrScanner: null,
      showQrCode: false,
      qrCodeInstance: null,
    };
  },
  methods: {
    createPublication() {
      // #
    },
    showUserQrCode() {
      this.showQrCode = true;
      this.$nextTick(() => {
        const { token } = this.$store.state;
        const img = this.$el.querySelector('#qrcode');
        QRCode.toDataURL(token, { errorCorrectionLevel: 'H' }, (err, url) => {
          if (url) img.src = url;
        });
      });
    },
    openCamera() {
      this.openScanner = true;
      if (!this.qrScanner) {
        this.$nextTick(() => {
          const videoEl = document.getElementsByTagName('video')[0];
          if (videoEl) {
            this.qrScanner = new QrScanner(videoEl, (result) => {
              console.log(result);
              this.openScanner = false;
              this.qrScanner.stop();
              if (result && result.codeResult && result.codeResult.code) {
                // Do something with the result
              }

              const url = `https://main-bvxea6i-rlacwuuwytvt2.fr-4.platformsh.site/api/getuser/${result}`; // URL de l'API
              fetch(url, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Token: this.$store.state.token,
                },
              })
                .then((r) => r.json())
                .then((data) => {
                  console.log(data);
                });
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
  width: 75%;
  border-radius: 4px;
  position: relative;
}
.camera-modal-content {
  width: 75%;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  border: 5px solid #3cff00;
  width: 75%;
}
.qrcode-modal {
  display: flex;
  align-items: center;
  justify-content: center;
}
.qrcode-modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.qrcode-modal-content img {
  width: 100%;
  height: 100%;
  max-width: 250px;
  max-height: 250px;
  object-fit: contain;
  margin-bottom: 20px;
}
.qrcode-modal-content .close-button {
  margin-top: 20px;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 0;
  width: 25px;
  height: 25px;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
}
.qrcode-modal-content .close-button:before {
  content: "\00D7";
  font-size: 25px;
  font-weight: bold;
  color: #FF5A34;
}
.qrcode-modal-content img {
  width: 100%;
  height: 100%;
  max-width: 250px;
  max-height: 250px;
  object-fit: contain;
}
.qrcode-modal-content .close-button {
  margin-top: 20px;
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
  top: 10px;
  right: 10px;
  border: none;
  background: none;
  width: 25px;
  height: 25px;
  font-size: 0px;
  color: #FF5A34;
  cursor: pointer;
}

.close-button::before {
content: "×";
font-family: Arial, sans-serif;
font-size: 20px;
font-weight: bold;
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
