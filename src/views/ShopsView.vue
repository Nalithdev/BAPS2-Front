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
  components: {
    Searchbar,
    ShopMiniature,
    ShopKind,
  },
})
export default class Shops extends Vue {
  shops: any;

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
      });
  }
}

/* shops: { id: number, kindId: number }[] = [];

beforeMount(): void {
  this.shops = this.$store.state.shops;
}

enableFilter(kindId: number) {
  const storeShops: [] = this.$store.state.shops;
  if (this.shops.length === storeShops.length) {
    this.shops = storeShops.filter((s: { kindId: number }) => s.kindId === kindId) as [];
  } else {
    this.shops.push(...storeShops.filter((s: { kindId: number }) => s.kindId === kindId));
  }
}

disableFilter(kindId: number) {
  this.shops = this.shops.filter((s: { kindId: number }) => s.kindId !== kindId) as [];
  if (this.shops.length === 0) {
    this.shops = this.$store.state.shops;
  }
}
}

function enableFilter(kindId: any, number: any) {
      throw new Error('Function not implemented.');
  } */
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
