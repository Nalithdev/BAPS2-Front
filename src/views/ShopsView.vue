<template>
  <div>
    <Searchbar/>
    <div class="filters">
      <ShopKind v-for="i in $store.state.shopKinds.length - 1" :key="i" :id="i"
      @enable="enableFilter(i)" @disable="disableFilter(i)"/>
    </div>
    <div class="shops">
      <ShopMiniature v-for="shop in shops" :key="shop.id" :id="shop.id"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import Searchbar from '@/components/SearchbarComponent.vue';
import ShopMiniature from '@/components/ShopMiniatureComponent.vue';
import ShopKind from '@/components/ShopKindComponent.vue';

@Options({
  components: { Searchbar, ShopMiniature, ShopKind },
})
export default class Shops extends Vue {
  mounted() {
    const url = 'https://main-bvxea6i-rlacwuuwytvt2.fr-4.platformsh.site/api/shops';
    const shops = new FormData();
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
        const shop = [];
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
