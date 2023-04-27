<template>
    <RouterLink :to="`shops/${id}`" class="link">
      <div class="shop-miniature">
        <div class="right">
            <h2>{{ shop['name'] }}</h2>
            <div class="last-row">
              <p>{{ shop['address'] }}</p>
              <HeartOutlineIcon :size="20" fillColor="#3B434F"/>
            </div>
        </div>
      </div>
    </RouterLink>
</template>

<script lang="ts">
import { Vue, prop, Options } from 'vue-class-component';
import { RouterLink } from 'vue-router';
import HeartOutlineIcon from 'vue-material-design-icons/HeartOutline.vue';

export default {
  name: 'ShopMiniature',
  components: {
    RouterLink,
    HeartOutlineIcon,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    shop: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.link {
  text-decoration: inherit;
}

.shop-miniature {
  padding: 20px 30px 10px 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  width: 100%;
  box-shadow: 0px 0.7px 4px rgba(78, 78, 78, 0.15);
  border-radius: 0px 0px 10px 10px;
}

.shop-miniature img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 100%;
}

h2 {
  font-weight: 600;
  font-size: 20px;
  color: #3B434F;
}

h3 {
  font-weight: 400;
  font-size: 16px;
  color: #FF5A34;
}

p {
  font-weight: 300;
  font-size: 14px;
  color: #4C535E;
}

.right {
  width: 100%;
}

.last-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
</style>
