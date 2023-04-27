<template>
  <div>
    <Searchbar/>
    <div class="feed">
      <Status v-for="i in 10" :key="i" name="A la bonne Franco"
              kind="Boulangerie" logo="shop1.png" image="status1.png">
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
  <QrCodeComponent/>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import Searchbar from '@/components/SearchbarComponent.vue';
import Status from '@/components/StatusComponent.vue';
import QrCodeComponent from '@/components/QrCodeComponent.vue';

@Options({
  components: {
    QrCodeComponent,
    Searchbar,
    Status,
  },
})
export default class Feed extends Vue {
  mounted() {
    const url = 'https://main-bvxea6i-rlacwuuwytvt2.fr-4.platformsh.site/api/message';
    const feed = new FormData();
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
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Token: this.$store.state.token,
      },
      body: JSON.stringify({
        title: feed.get('title'),
        description: feed.get('description'),
        cdate: Date.now(),

      }),
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
      });
  }
}

</script>
