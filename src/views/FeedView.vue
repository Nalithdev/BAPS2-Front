<template>
    <div>
        <Searchbar/>
    </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import Searchbar from '@/components/SearchbarComponent.vue';

@Options({
  components: { Searchbar },
})
export default class FeedView extends Vue {}
</script>
