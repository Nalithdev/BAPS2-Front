<template>
  <div>
    <Searchbar/>
    <div class="filters">
    </div>
    <div class="shops">
      <ShopMiniature v-for="shop in getShops" :key="shop.id" :id="shop.id" :shop="shop"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import Searchbar from '@/components/SearchbarComponent.vue';
import ShopMiniature from '@/components/ShopMiniatureComponent.vue';

@Options({
  components: {
    ShopMiniature,
    Searchbar,
  },
})

export default class Shops extends Vue {
  shops = [];
  get getShops() {
    return this.shops;
  }
  mounted() {
    const url = 'https://main-bvxea6i-rlacwuuwytvt2.fr-4.platformsh.site/api/shops';
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Token: this.$store.state.token,
      },
    })
      .then((r) => r.json())
      .then((data) => {
        data.commerces.forEach((element: never) => {
          this.shops.push(element);
        });
      });
  }
}

</script>

<style>
.filters {
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 15px;
  margin: 10px 0;
  overflow-x: scroll;
  padding: 10px 20px;
}
</style>
