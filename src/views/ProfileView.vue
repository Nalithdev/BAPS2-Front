<template>
    <div class="profile">
        <h1><span>Mon Profil</span><MenuIcon fillColor="#4F5661"/></h1>
        <div class="account">
            <img src="/uploads/user1.jpg" alt="User Profile Picture">
            <div class="right">
                <input type="text" class="name" name="pseudo" placeholder="Exemple">
                <input type="text" class="mail" name="email" placeholder="exemple@mail.com">
                <div class="points">
                    <div class="circle"></div>
                    <p>1000 pts</p>
                </div>
            </div>
        </div>
        <div class="favorites">
            <h2 class="favorites"><span>Favoris</span><FilterVariantIcon fillColor="#4F5661"/></h2>
            <ShopMiniature v-for="i in 5" :key="i" :id="i + 1"/>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import ShopMiniature from '@/components/ShopMiniatureComponent.vue';
import MenuIcon from 'vue-material-design-icons/Menu.vue';
import FilterVariantIcon from 'vue-material-design-icons/FilterVariant.vue';

@Options({ components: { ShopMiniature, MenuIcon, FilterVariantIcon } })
export default class Profile extends Vue {}
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
