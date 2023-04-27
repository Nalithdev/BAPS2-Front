<template>
  <div class="shop">
    <div class="head">
      <ChevronLeftIcon @click="$router.go(-1)" fillColor="#fff" size="30"/>
      <img :src="`/uploads/${shop.banner}`" :alt="shop.name" class="background">
      <div class="gradient"></div>
      <h1>{{ shop.name }}
        <div class="stars" :style="cssVars"></div>
      </h1>
      <h4>{{ shop.adress }}</h4>
      <ArrowRightTopBoldIcon class="arrow" fillColor="#fff"/>
    </div>
    <div class="body">
      <div>
        <h3>Produits</h3>
        <div class="products">
          <div :class="{
            product: true,
            booked: product.booked,
          }" v-for="(product, i) in products" :key="i">
            <img :src="`/uploads/${product.image}`" alt="Product" class="background">
            <div class="gradient"></div>
            <span>{{ product.booked ? 'Réservé' : 'Réserver' }}</span>
          </div>
        </div>
      </div>
      <div>
        <h3>Description de l'établissement</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Odit earum nostrum ullam, delectus ipsum nam vitae optio
          accusantium ipsam quod ad sint cupiditate eveniet autem
          nesciunt quidem praesentium dolorum pariatur!
        </p>
      </div>
      <div class="proximity">
        <h3>Activités à proximité</h3>
        <div class="shops">
          <ShopMiniature v-for="i in 5" :key="i" :id="i + 1"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import ChevronLeftIcon from 'vue-material-design-icons/ChevronLeft.vue';
import ArrowRightTopBoldIcon from 'vue-material-design-icons/ArrowRightTopBold.vue';
import { RouterLink } from 'vue-router';
import ShopMiniature from '@/components/ShopMiniatureComponent.vue';

@Options({
  components: {
    ChevronLeftIcon,
    ArrowRightTopBoldIcon,
    RouterLink,
    ShopMiniature,
  },
})
export default class Shop extends Vue {
  get shop() {
    return this.$store.state.shops[this.$route.params.id as unknown as number - 1];
  }

  public products = Array.from({ length: 3 }, (__, i) => ({
    booked: i % 3 === 2,
    image: 'product1.png',
  }));

  get cssVars() {
    return {
      '--stars': this.shop.stars,
    };
  }
}
</script>

<style scoped>
.shop {
  animation: push .3s ease-out 1 forwards;
}

@keyframes push {
  from {
    margin-top: 100vh;
  }

  to {
    margin-top: 0;
  }
}

.head {
  overflow: hidden;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  position: relative;
  z-index: 1;
  padding-left: 20px;
  padding-top: 10px;
}

.head .background, .head .gradient {
  position: absolute;
  inset: 0;
  z-index: -1;
  transform: scaleX(1.1);
}

.head .gradient {
  background-image: linear-gradient(to bottom, #fff0 0%, #ffff 90%);
}

.head h1 {
  margin-top: 130px;
  font-weight: 600;
  font-size: 24px;
  color: #3B434F;
}

.head h4 {
  font-size: 12px;
  color: #FE7B52;
  font-weight: 500;
}

.arrow {
  padding: 7px 10px;
  border-radius: 50%;
  background: #FE7B52;
  float: right;
  margin-right: 20px;
}

.body {
  margin: 0 20px;
}

.body h3 {
  font-weight: 500;
  font-size: 16px;
  color: #FE7B52;
  margin-top: 30px;
  margin-bottom: 15px;
}

.products {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.product {
  width: 100px;
  height: 120px;
  position: relative;
  z-index: 1;
}

.product span {
  position: absolute;
  bottom: 5px;
  right: 0;
  left: 0;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  color: white;
}

.product .background {
  width: 100%;
  height: 80%;
  object-fit: cover;
}

.product .background, .product .gradient {
  position: absolute;
  inset: 0;
  z-index: -1;
  border-radius: 10px;
}

.product .gradient {
  background-image: linear-gradient(to bottom, #606D8000 30%, #606D80 70%);
}

.product.booked .gradient {
  background-image: linear-gradient(to bottom, #FF470F88 0%, #FF470F88 70%, #FF470F 70%);
}

.stars {
  font-size: 20px;
  line-height: 1;
  font-family: sans-serif;
  display: inline-block;
  --limit: calc(var(--stars) * 20%);
}

.stars::before {
  letter-spacing: 3px;
  content: '★★★★★';
  -webkit-text-fill-color: transparent;
  background: linear-gradient(90deg, #fb1 var(--limit), #fff var(--limit));
  background-clip: text;
}

.shops {
  margin: 0 -20px 20px -20px;
}
</style>
