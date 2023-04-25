<template>
  <div class="navbar">
    <RouterLink to="/feed">
      <HomeIcon :class="{ active: isActive('feed') }" :size="30"/>
    </RouterLink>
    <RouterLink to="/shops">
      <CartIcon :class="{ active: isActive('shops') }" :size="30"/>
    </RouterLink>
    <RouterLink to="/profile">
      <AccountIcon id="profile-btn" :class="{ active: isActive('profile') }" :size="30"/>
    </RouterLink>
    <MapMarkerIcon :size="30"/>

    <MyModal :isOpen="isModalOpen" @update:isOpen="isModalOpen = $event" />

  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import HomeIcon from 'vue-material-design-icons/Home.vue';
import CartIcon from 'vue-material-design-icons/Cart.vue';
import AccountIcon from 'vue-material-design-icons/Account.vue';
import MapMarkerIcon from 'vue-material-design-icons/MapMarker.vue';
import MyModal from './MyModal.vue';

@Options({
  components: {
    HomeIcon,
    CartIcon,
    AccountIcon,
    MapMarkerIcon,
    MyModal,
  },
})
export default class Navbar extends Vue {
  pressTimer: ReturnType<typeof setTimeout> | null = null;

  isModalOpen = false;

  mounted() {
    const profileBtn = document.getElementById('profile-btn');
    console.log(profileBtn);
    if (profileBtn) {
      profileBtn.addEventListener('mousedown', this.handlePressStart);
      profileBtn.addEventListener('mouseup', this.handlePressEnd);
      profileBtn.addEventListener('mouseleave', this.handlePressEnd);
      profileBtn.addEventListener('touchstart', this.handlePressStart);
      profileBtn.addEventListener('touchend', this.handlePressEnd);
    }
  }

  beforeDestroy() {
    const profileBtn = document.getElementById('profile-btn');
    if (profileBtn) {
      profileBtn.removeEventListener('mousedown', this.handlePressStart);
      profileBtn.removeEventListener('mouseup', this.handlePressEnd);
      profileBtn.removeEventListener('mouseleave', this.handlePressEnd);
      profileBtn.removeEventListener('touchstart', this.handlePressStart);
      profileBtn.removeEventListener('touchend', this.handlePressEnd);
    }
  }

  showModal() {
    console.log('Afficher le modal');
    this.isModalOpen = true;
  }

  handlePressStart() {
    this.pressTimer = setTimeout(this.showModal, 2000);
  }

  handlePressEnd() {
    if (this.pressTimer !== null) {
      clearTimeout(this.pressTimer);
    }
  }

  get page(): string {
    return (this.$route.name ?? this.$route.path.substring(1)).toString();
  }

  public isActive(page: string): boolean {
    return this.page === page;
  }
}
</script>

<style scoped>
.navbar {
position: fixed;
bottom: 0;
left: 0;
right: 0;
background-color: red;
z-index: 100;
display: flex;
align-items: center;
justify-content: space-evenly;
background-color: #F9F9F9;
}

.material-design-icon {
color: black;
padding-top: 20px;
padding-bottom: 15px;
padding-right: 20px;
padding-left: 20px;
}

.material-design-icon.active {
color: #FB3D03;
}
</style>
