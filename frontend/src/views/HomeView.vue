<template>
  <div class="home">
    <h1>Ville Antony</h1>
    <div v-if="!isLoggedIn">
      <button @click="showLoginForm">Se connecter</button>
      <button @click="showMerchantLoginForm">Inscription Commerçant</button>
      <button @click="showRegisterForm">S'inscrire</button>
    </div>
    <div v-else>
      <button @click="logout">Se déconnecter</button>
      <p>Bonjour, {{ username }} !</p>
      <button @click="showMerchantDashboard">Tableau de bord Commerçant</button>
    </div>
    <div v-if="showLogin">
      <h2>Connexion Utilisateur</h2>
      <form @submit.prevent="login">
        <label for="username">Nom d'utilisateur</label>
        <input type="text" id="username" v-model="loginForm.username">
        <label for="password">Mot de passe</label>
        <input type="password" id="password" v-model="loginForm.password">
        <button type="submit">Se connecter</button>
      </form>
    </div>
    <div v-if="showMerchantAccess">
      <h2>Inscription Commerçant</h2>
      <form @submit.prevent="merchantLogin">
        <label for="username">Nom d'utilisateur Commerçant</label>
        <input type="text" id="username" v-model="merchantLoginForm.username">
        <label for="email">Email Commerçant</label>
        <input type="email" id="email" v-model="registerForm.email">
        <label for="password">Mot de passe Commerçant</label>
        <input type="password" id="password" v-model="merchantLoginForm.password">
        <button type="submit">Inscription</button>
      </form>
    </div>
    <div v-if="showRegister">
      <h2>Inscription Utilisateur</h2>
      <form @submit.prevent="register">
        <label for="username">Nom d'utilisateur</label>
        <input type="text" id="username" v-model="registerForm.username">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="registerForm.email">
        <label for="password">Mot de passe</label>
        <input type="password" id="password" v-model="registerForm.password">
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isLoggedIn: false,
      username: '',
      showLogin: false,
      showRegister: false,
      showMerchantAccess: false,
      loginForm: {
        username: '',
        password: '',
      },
      merchantLoginForm: {
        username: '',
        password: '',
      },
      registerForm: {
        username: '',
        email: '',
        password: '',
      },
    };
  },

  methods: {
    showLoginForm() {
      this.showLogin = true;
      this.showRegister = false;
      this.showMerchantAccess = false;
    },
    showMerchantLoginForm() {
      this.showLogin = false;
      this.showRegister = false;
      this.showMerchantAccess = true;
    },
    showRegisterForm() {
      this.showLogin = false;
      this.showRegister = true;
      this.showMerchantAccess = false;
    },
    login() {
      // ici, vous pouvez ajouter votre code de connexion pour les utilisateurs
      this.isLoggedIn = true;
      this.username = this.loginForm.username;
      this.showLogin = false;
      this.showRegister = false;
      this.showMerchantAccess = false;
      this.loginForm.username = '';
      this.loginForm.password = '';
    },
    merchantLogin() {
      // ici, vous pouvez ajouter votre code de connexion pour les commerçants
      this.isLoggedIn = true;
      this.username = this.merchantLoginForm.username;
      this.showLogin = false;
      this.showRegister = false;
      this.showMerchantAccess = false;
      this.merchantLoginForm.username = '';
      this.merchantLoginForm.password = '';
    },
    logout() {
      // ici, vous pouvez ajouter votre code de déconnexion
      this.isLoggedIn = false;
      this.username = '';
    },
    register() {
      // ici, vous pouvez ajouter votre code d'inscription pour les utilisateurs
      this.isLoggedIn = true;
      this.username = this.registerForm.username;
      this.showLogin = false;
      this.showRegister = false;
      this.showMerchantAccess = false;
      this.registerForm.username = '';
      this.registerForm.email = '';
      this.registerForm.password = '';
    },
  },
};
</script>

<style scoped>
.home {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  text-align: center;
  background-color: #f7f7f7;
   font-family: "Poppins", sans-serif;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
}

button {
   margin-top: 10px;
  margin-left: 10px; /* Ajout de la marge */
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: #4CAF50;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

button:hover {
  background-color: #3e8e41;
}
</style>
