<template>
    <form class="searchbar">
        <input type="text" name="query" placeholder="Recherche...">
        <TuneVerticalIcon :size="16"/>
    </form>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import TuneVerticalIcon from 'vue-material-design-icons/TuneVertical.vue';

@Options({
  components: { TuneVerticalIcon },
})
export default class Searchbar extends Vue {}
</script>

<style scoped>
.searchbar {
  background-color: #F1F1F1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  padding: 10px 20px;
  border-radius: 30px;
}

input {
  background: none;
  border: none;
  color: #3B434F;
  outline: none;
  font-size: 16px;
}
</style>
