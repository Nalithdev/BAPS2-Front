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
export default class Shops extends Vue {}
</script>

<style>
.shops {
    margin-top: 20px;
}
</style>
