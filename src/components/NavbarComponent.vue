<template>
    <div class="navbar">
      <RouterLink to="/feed">
        <HomeIcon :class="{ active: isActive('feed') }" :size="30"/>
      </RouterLink>
      <RouterLink to="/shop">
        <CartIcon :class="{ active: isActive('shop') }" :size="30"/>
      </RouterLink>
      <RouterLink to="/account">
        <AccountIcon :class="{ active: isActive('account') }" :size="30"/>
      </RouterLink>
      <MapMarkerIcon :size="30"/>
    </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import HomeIcon from 'vue-material-design-icons/Home.vue';
import CartIcon from 'vue-material-design-icons/Cart.vue';
import AccountIcon from 'vue-material-design-icons/Account.vue';
import MapMarkerIcon from 'vue-material-design-icons/MapMarker.vue';

@Options({
  components: {
    HomeIcon,
    CartIcon,
    AccountIcon,
    MapMarkerIcon,
  },
})
export default class Navbar extends Vue {
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
