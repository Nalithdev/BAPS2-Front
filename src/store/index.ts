import { createStore } from 'vuex';

export default createStore({
  state: {
    token: null,
    server_url: 'https://main-bvxea6i-rlacwuuwytvt2.fr-4.platformsh.site',
    shops: [
      {
        id: 1,
        name: 'Age de Bronze',
        kind: 'Artisanat',
        adress: '46 Avenue La Chaise',
        image: 'shop1.png',
        stars: 4,
        banner: 'banner1.png',
      },
      {
        id: 2,
        name: 'Borel',
        kind: 'Boucherie',
        adress: '34 Rue de la Bourgade',
        image: 'shop2.png',
        stars: 3,
        banner: 'banner1.png',
      },
      {
        id: 3,
        name: 'Jeff de Bruges',
        kind: 'Chocolaterie',
        adress: '13 Rue Pagnole',
        image: 'shop3.png',
        stars: 5,
        banner: 'banner1.png',
      },
      {
        id: 4,
        name: 'Celina',
        kind: 'Fripes',
        adress: '20 Rue Pagnole',
        image: 'shop4.png',
        stars: 2,
        banner: 'banner1.png',
      },
      {
        id: 5,
        name: 'Krys',
        kind: 'Opticien',
        adress: '14 Rue de la Bourgade',
        image: 'shop5.png',
        stars: 3,
        banner: 'banner1.png',
      },
      {
        id: 6,
        name: 'Antony Moradon',
        kind: 'Fripes',
        adress: '12 Rue César',
        image: 'shop6.png',
        stars: 4,
        banner: 'banner1.png',
      },
    ],
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
