import { createStore } from 'vuex';

export default createStore({
  state: {

    token: null,

    i: null,

    shopKinds: [
      {
        id: 1,
        name: 'Boulangerie',
        icon: 'baguette',
      },
      {
        id: 2,
        name: 'Santé',
        icon: 'heart-pulse',
      },
      {
        id: 3,
        name: 'Restauration',
        icon: 'silverware-fork-knife',
      },
      {
        id: 4,
        name: 'Fleuriste',
        icon: 'flower-poppy',
      },
      {
        id: 5,
        name: 'Boucherie',
        icon: 'food-drumstick',
      },
      {
        id: 6,
        name: 'Épicerie',
        icon: 'store',
      },
      {
        id: 7,
        name: 'Électronique',
        icon: 'electronic',
      },
      {
        name: 'Epicerie',
        id: 6,
      },
      {
        name: 'Fleuriste',
        id: 7,
      },
      {
        name: 'Electronique',
        id: 8,
      },
      {
        name: 'Sante',
        id: 9,
      },
    ],

    shops: [
      {
        id: 1,
        name: 'Age de Bronze',
        kindId: 1,
        adress: '46 Avenue La Chaise',
        image: 'shop1.png',
        stars: 4,
        banner: 'banner1.png',
      },
      {
        id: 2,
        name: 'Borel',
        kindId: 5,
        adress: '34 Rue de la Bourgade',
        image: 'shop2.png',
        stars: 3,
        banner: 'banner1.png',
      },
      {
        id: 3,
        name: 'Jeff de Bruges',
        kindId: 6,
        adress: '13 Rue Pagnole',
        image: 'shop3.png',
        stars: 5,
        banner: 'banner1.png',
      },
      {
        id: 4,
        name: 'Celina',
        kindId: 4,
        adress: '20 Rue Pagnole',
        image: 'shop4.png',
        stars: 2,
        banner: 'banner1.png',
      },
      {
        id: 5,
        name: 'Krys',
        kindId: 4,
        adress: '14 Rue de la Bourgade',
        image: 'shop5.png',
        stars: 3,
        banner: 'banner1.png',
      },
      {
        id: 6,
        name: 'Antony Moradon',
        kindId: 7,
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
