<template>
  <div class="page">
    <img src="@/assets/top-wave.svg" alt="An orange wave" class="top">
    <img class="logo" alt="Fid'Anthony logo" src="@/assets/logo.png">
    <h1>Découvrez <span>Fid'Anthony </span>!</h1>
    <form action="">
      <input type="text" name="email" placeholder="example@gmail.com">
      <input type="text" name="prenom" placeholder="Prenom">
      <input type="text" name="nom" placeholder="Nom">
      <input type="password" name="password" placeholder="Mot de passe">
      <input type="password" name="password-confirm" placeholder="Confirmer mot de passe">
      <input type="text" name="siren" placeholder="N° de SIREN" v-if="merchant" >
      <label for="merchant">
        <input type="checkbox" name="merchant" id="merchant" v-model="merchant">
        Je suis commerçant
      </label>
      <button type="submit">S'inscrire</button>
    </form>
    <p>
      Déjà un compte ? <router-link to="login">Connectez vous</router-link>
    </p>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class SignUp extends Vue {
  merchant = false;
  mounted() {
    const form = document.querySelector('form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        fetch('https://main-bvxea6i-rlacwuuwytvt2.fr-4.platformsh.site/api/register', {
          method: 'POST',
          body: JSON.stringify({
            email: formData.get('email'),
            password: formData.get('password'),
            firstname: formData.get('prenom'),
            lastname: formData.get('nom'),
            action: this.$el.querySelector('#merchant').checked ? 'shop' : 'user',
            siren: formData.get('siren'),
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.success) {
              this.$router.push('/login');
            } else {
              alert(data.message);
            }
          });
      });
    }
  }
}
</script>

<style scoped>

img.top {
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
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
  z-index: 1;
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
  mask:
     linear-gradient(#fff 0 0) content-box,
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
