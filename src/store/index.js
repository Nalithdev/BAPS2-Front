import { createStore } from 'vuex';

export default createStore({
  state: {
    token: null,
    shopKinds: [
      {
        name: 'Artisanat',
        id: 1,
      },
      {
        name: 'Boucherie',
        id: 2,
      },
      {
        name: 'Chocolaterie',
        id: 3,
      },
      {
        name: 'Fripes',
        id: 4,
      },
      {
        name: 'Opticien',
        id: 5,
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
        kindId: 2,
        adress: '34 Rue de la Bourgade',
        image: 'shop2.png',
        stars: 3,
        banner: 'banner1.png',
      },
      {
        id: 3,
        name: 'Jeff de Bruges',
        kindId: 3,
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
        kindId: 5,
        adress: '14 Rue de la Bourgade',
        image: 'shop5.png',
        stars: 3,
        banner: 'banner1.png',
      },
      {
        id: 6,
        name: 'Antony Moradon',
        kindId: 4,
        adress: '12 Rue César',
        image: 'shop6.png',
        stars: 4,
        banner: 'banner1.png',
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
// # sourceMappingURL=index.js.map
