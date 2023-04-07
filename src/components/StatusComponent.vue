<template>
    <RouterLink :to="`/shops/${id}`" class="link">
      <div class="status">
        <div class="header">
            <img :src="'/uploads/' + logo" :alt="name + ' Logo'" class="status-logo">
            <div>
                <h2>{{ name }}</h2>
                <h3>{{ kind }}</h3>
            </div>
        </div>
        <div class="status-content">
          <slot></slot>
        </div>
        <img v-if="image" :src="'/uploads/' + image" :alt="name + ' status'" class="status-image">
      </div>
    </RouterLink>
</template>

<script lang="ts" scoped>
import { Vue, prop, Options } from 'vue-class-component';
import { RouterLink } from 'vue-router';

export class Props {
  name: string = prop({ required: true });
  kind: string = prop({ required: true });
  logo: string = prop({ required: true });
  image?: string = prop({ required: false });
}

@Options({
  components: { RouterLink },
})
export default class Status extends Vue.with(Props) {
  public id = 1;
}
</script>

<style>
.link {
  text-decoration: inherit;
}

.status {
  margin: 20px;
}

.status-logo {
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 100%;
}

.header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  margin-bottom: 10px;
}

h2 {
  font-weight: 600;
  font-size: 20px;
  color: #FE7B52;
}

h3 {
  font-weight: 400;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.5);
}

.status-content {
  padding: 0 10px;
  font-size: 16px;
  color: #3B434F;
}

.status-image {
  width: 100%;
  margin-top: 20px;
  padding: 0 5px;
}
</style>
