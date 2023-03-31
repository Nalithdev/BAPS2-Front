<template>
    <div>
        <Searchbar/>
        <div class="feed">
            <Status v-for="i in 10" :key="i" name="A la bonne Franco"
                kind="Boulangerie" logo="logo1.png" image="status1.png">
                <p>
                    Dans la boulangerie "A la bonne Franco", nous proposons des spécialités
                    Espagnoles tout à fait goûteuses! Nous sommes profondément écologiques
                    dans nos créations culinaires.<br>
                    <br>
                    Tout nos produits sont garantits sans glutens ni produits d'origine animale.
                </p>
            </Status>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import Searchbar from '@/components/SearchbarComponent.vue';
import Status from '@/components/StatusComponent.vue';

@Options({
  components: { Searchbar, Status },
})
export default class FeedView extends Vue {}
</script>

<style>
.feed {
    height: max-content;
    overflow-y: scroll;
}
</style>
