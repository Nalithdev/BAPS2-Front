<template>
  <div class="page">
    <img src="@/assets/top-wave.svg" alt="An orange wave" class="top">
    <img class="logo" alt="Fid'Anthony logo" src="@/assets/logo.png">
    <h1>Bon retour <span>parmis nous </span>!</h1>
    <form action="">
      <input type="mail" name="email" placeholder="example@gmail.com">
      <input type="password" name="password" placeholder="Mot de passe">
      <label for="rememberMe">
        <input type="checkbox" name="rememberMe" id="rememberMe">
        Me garder connecté
      </label>
      <button type="submit">Connexion</button>
    </form>
    <p>
      Pas de compte ?
      <router-link to="/">Inscrivez vous</router-link>
    </p>
    <img src="@/assets/bottom-wave.svg" alt="An orange wave" class="bottom">
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class LogIn extends Vue {
  mounted() {
    const form: HTMLFormElement | null = document.querySelector('form');
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);

      fetch(
        'https://main-bvxea6i-rlacwuuwytvt2.fr-4.platformsh.site/api/login',
        {
          method: 'POST',
          body: JSON.stringify({
            email: formData.get('email'),
            password: formData.get('password'),
          }),
        },
      )
        .then((r) => r.json())
        .then((data) => {
          // savoir si ça a marché
          if (data.success === false) {
            console.log(data);
          } else {
            this.$store.state.token = data.token.tokenId;
            console.log(data);
            console.log(this.$store.state.token);
            this.$router.push('/feed');
          }
        });
    });
  }
}
</script>

<style scoped>
img.top {
  position: absolute;
  top: 0;
  right: 0;
}

img.bottom {
  position: absolute;
  bottom: 0;
  left: 50%;
  height: 100px;
  transform: translateX(-50%) scaleX(1.5);
}

img.logo {
  margin-bottom: 20px;
}

.page {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;
  height: 100%;
  padding: 80px 0;
}

h1 {
  color: #3B434F;
  font-size: 24px;
  margin-bottom: 10px;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

span {
  position: relative;
  z-index: 1;
}

span::before {
  content: "";
  position: absolute;
  top: 10px;
  bottom: 2px;
  right: -3px;
  left: 2px;
  z-index: -1;
  transform: translate(-5px, 5px);
  background-color: #FF866A;
}

input {
  outline: none;
  border: none;
  padding: 2px 2px;
  border-bottom: 1px solid #2823214d;
  font-size: 16px;
}

a {
  color: #FF5A34;
}

button {
  background: none;
  position: relative;
  border: none;
  color: #FB3D03;
  width: 100%;
  padding: 10px 0;
  cursor: pointer;
  border-radius: 20px;
  z-index: 1;
  font-weight: 700;
  font-size: 16px;
}

button::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 20px;
  background: linear-gradient(to right, #fb3d03, #05306e);
  padding: 2px;
  mask: linear-gradient(#fff 0 0) content-box,
  linear-gradient(#fff 0 0);
  mask-composite: exclude;
}

label {
  width: 100%;
  color: #3B434F;
  font-size: 12px;
}

input[type="checkbox"] {
  margin-right: 2px;
}
</style>
