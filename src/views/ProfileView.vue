<template>
  <div class="profile">
    <h1><span>Mon Profil</span>
      <MenuIcon fillColor="#4F5661"/>
    </h1>
    <div class="account">
      <img src="/uploads/user1.jpg" alt="User Profile Picture">
      <div class="right">
        <form>
          <input type="text" class="name" name="lastname" placeholder="nom">
          <input type="text" class="name" name="firstname" placeholder="prenom">
          <input type="text" class="mail" name="email" placeholder="exemple@mail.com">
          <button type="submit">Modifier le profile</button>
        </form>
        <div class="points">
          <div class="circle"></div>
          <p><span id="point-amount">0</span> pts</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import ShopMiniature from '@/components/ShopMiniatureComponent.vue';
import MenuIcon from 'vue-material-design-icons/Menu.vue';
import FilterVariantIcon from 'vue-material-design-icons/FilterVariant.vue';

@Options({

  components: {
    MenuIcon,
    FilterVariantIcon,
  },
})
export default class Profile extends Vue {
  showParameters = false;

  toggleParameters() {
    this.showParameters = !this.showParameters;
  }

  mounted() {
    // Fetching points
    fetch(`https://main-bvxea6i-rlacwuuwytvt2.fr-4.platformsh.site/api/point/${this.$store.state.i}/add `, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Token: this.$store.state.token,
      },
      body: JSON.stringify({
        points: 0,
      }),
    }).then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          const points = document.querySelector('#point-amount');
          if (!points) return;
          points.innerHTML = data.points;
        }
      });
    // Handling modifications
    const url = 'https://main-bvxea6i-rlacwuuwytvt2.fr-4.platformsh.site/api/user/modify';
    const form: HTMLFormElement | null = document.querySelector('form');
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const body = {
        lastname: formData.get('lastname'),
        firstname: formData.get('firstname'),
        email: formData.get('email'),
      };
      fetch(
        url,
        {
          method: 'POST',
          body: JSON.stringify(body),
        },
      )
        .then((r) => r.json())
        .then((data) => {
          // savoir si ça a marché
          if (data.success === false) {
            console.log(data);
          } else {
            console.log(data);
            this.$router.push('/feed');
          }
        });
    });
  }
}
</script>
<style>
h1 {
  font-weight: 500;
  font-size: 24px;
  color: #FC4810;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px;
  margin-top: 0;
}

h2.favorites {
  font-weight: 500;
  font-size: 20px;
  color: #FE7B52;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px;
}

.profile {
    margin-bottom: 30px; /* Ajustez cette valeur en fonction de l'espace souhaité */
}

.account img {
  width: 110px;
  height: 110px;
  object-fit: cover;
  border-radius: 100%;
  margin-top: -20px;
}

.account {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin: 0 30px;
  margin-top: 30px;
}

.account .right {

  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  font-size: 16px;
  color: #4F5661;

    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    font-size: 16px;
    color: #4F5661;

}

.points {
  display: flex;
  align-items: center;
  gap: 5px;
}

.circle {
  width: 35px;
  height: 35px;
  border-radius: 100%;
  background: #EEF1F4;
}

input {
  border: none;
  border-bottom: #DED9D8 1px solid;
  padding-bottom: 3px;
  border-radius: 2px;
  outline: none;
}
</style>
