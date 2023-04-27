<template>
  <div class="shop-kind" @click="handleClick" ref="div">
    <component :is="icon" fillColor="#0517B9" :size="20"/>
    <p class="name">{{ shopKind.name }}</p>
  </div>
</template>

<script lang="ts">
import { Vue, prop } from 'vue-class-component';
import BaguetteIcon from 'vue-material-design-icons/Baguette.vue';
import HeartPulseIcon from 'vue-material-design-icons/HeartPulse.vue';
import SilverwareForkKnifeIcon from 'vue-material-design-icons/SilverwareForkKnife.vue';
import FlowerPoppyIcon from 'vue-material-design-icons/FlowerPoppy.vue';
import FoodDrumstickOutlineIcon from 'vue-material-design-icons/FoodDrumstickOutline.vue';
import StoreIcon from 'vue-material-design-icons/Store.vue';
import DevicesIcon from 'vue-material-design-icons/Devices.vue';
import { Component } from 'vue';

const iconComponents = {
  baguette: BaguetteIcon,
  'heart-pulse': HeartPulseIcon,
  'silverware-fork-knife': SilverwareForkKnifeIcon,
  'flower-poppy': FlowerPoppyIcon,
  'food-drumstick': FoodDrumstickOutlineIcon,
  store: StoreIcon,
  electronic: DevicesIcon,
} as { [key: string]: Component };

class Props {
    id: number = prop({ required: true });
}

export default class ShopKind extends Vue.with(Props) {
  get shopKind() {
    return this.$store.state.shopKinds[this.id - 1];
  }

  get icon() {
    return iconComponents[this.shopKind.icon];
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
    gap: 5px;
    padding: 5px 10px;
    border: 1px solid #0517B9;
    border-radius: 20px;
    cursor: pointer;
  }

  .name {
    color: #0517B9;
    margin-top: -2px;
  }

  .shop-kind.active {
    background-color: #0517B9;
  }

  .active .name {
    color: white;
  }
</style>
