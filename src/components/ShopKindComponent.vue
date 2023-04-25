<template>
  <div class="shop-kind" @click="handleClick" ref="div">
    <p class="name">{{ shopKind.name }}</p>
  </div>
</template>

<script lang="ts">
import { Vue, prop } from 'vue-class-component';

class Props {
    id: number = prop({ required: true });
}

export default class ShopKind extends Vue.with(Props) {
  get shopKind() {
    return this.$store.state.shopKinds[this.id - 1];
  }

  handleClick() {
    const div = (this.$refs.div as HTMLDivElement);
    div.classList.toggle('active');
    this.$emit(div.classList.contains('active') ? 'enable' : 'disable');
  }
}
</script>

<style scoped>
  .shop-kind {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 10px;
    padding: 5px 10px;
    border: 1px solid #0517B9;
    border-radius: 20px;
    cursor: pointer;
  }

  .name {
    color: #0517B9;
  }

  .shop-kind.active {
    background-color: #0517B9;
  }

  .active .name {
    color: white;
  }
</style>
