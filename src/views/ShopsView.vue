<template>
    <div>
        <Searchbar/>
        <div class="shops">
            <ShopMiniature v-for="i in 5" :key="i" :id="i + 1" />
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import Searchbar from '@/components/SearchbarComponent.vue';
import ShopMiniature from '@/components/ShopMiniatureComponent.vue';

@Options({
  components: { Searchbar, ShopMiniature },
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
      });
  }
}

</script>

<style>
.shops {
    margin-top: 20px;
}
</style>
