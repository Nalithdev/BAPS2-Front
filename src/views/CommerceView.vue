<template>
  <div class="commerce">
      <h1><span>Mon Commerce</span><MenuIcon fillColor="#4F5661"/></h1>
      <button class="button-commerce-save">Enregistrer</button>
  </div>
  <div class="commerce-info-img">
      <input type="file" @change="previewImage" ref="imageInput">
      <img v-if="imageUrl" :src="imageUrl" alt="Image prévisualisée" />
  </div>
  <div class="commerce-info">
    <div class="commerce-info-important">
      <h3>Nom du Commerce</h3>
      <input type="text" class="name" placeholder="Exemple de Commerce">
      <h3>Adresse du Commerce</h3>
      <input type="text" class="adresse" placeholder="12 rue de l'exemple">
      <h3>Catégories</h3>
      <select>
        <option value="boulangerie">Boulangerie</option>
        <option value="fleuriste">Fleuriste</option>
        <option value="sante">Santé</option>
        <option value="restauration">Restauration</option>
        <option value="boucherie">Boucherie</option>
        <option value="epicerie">Epicerie</option>
        <option value="electronique">Electronique</option>
      </select>
      <h3>Description</h3>
      <textarea class="description" placeholder="Description du Commerce"></textarea>
      <h3>Produits</h3>
      <div class="products">
        <div class="products-header">
          <div class="products-add" @click="showModal = true">
            <span>+</span>
          </div>
          <div class="products-title">
            <h3>Produits</h3>
          </div>
        </div>
        <div class="modal" v-if="showModal">
          <div class="modal-content">
            <div class="form-group">
            <label for="product-image"><h3>Ajouter une Image</h3>
              <input type="file" id="product-image" /></label>
            </div>
            <div class="form-group">
              <h3>Nom du Produit</h3>
              <input type="text" id="product-name" placeholder="Nom du produit"/>
            </div>
            <div class="form-group">
              <h3>Description du Produit</h3>
              <textarea id="product-description" placeholder="Description du produit">
              </textarea>
            </div>
            <div class="form-group">
              <h3>Prix du Produit</h3>
              <input type="number" id="product-price" placeholder="Prix du produit" />
            </div>
            <button class="btn-save" @click="showModal = false">Enregistrer</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import Searchbar from '@/components/SearchbarComponent.vue';
import Status from '@/components/StatusComponent.vue';
import MenuIcon from 'vue-material-design-icons/Menu.vue';

@Options({
  components: { Searchbar, Status },
})
export default class Feed extends Vue {
  imageUrl: string | null = null;
  showModal = false;
  data() {
    return {
    };
  }
  previewImage(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files && fileInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageUrl = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}
</script>
<style>
  .commerce {
    display: flex;
    justify-content: space-between;
    padding-top: 30px;
  }
  .commerce-info{
    display: flex;
    padding: 18px;
    width: 100%;
    gap: 20px;
  }

  .commerce-info-important{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .commerce-info-important h3{
    font-weight: 500;
  }
  h1 {
    font-weight: 500;
    font-size: 26px;
    color: #FB3D03;
    display: flex;
    justify-content: space-between;
  }
  h2 {
    color: #0517B9;
    font-weight: 900;
    font-size: 18px;
    padding: 9px;
    padding-right: 18px;
    text-decoration: underline;
  }

  .button-commerce-save{
    background-color: #0517B9;
    color: #fff;
    border: none;
    margin: 10px;
    border-radius: 3px;
    padding: 10px 10px;
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .button-commerce-save:hover {
    background-color: #FB3D03;
  }
  .commerce-info-img {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
  }
  .commerce-info-img input[type="file"] {
    margin-bottom: 10px;
  }
  .commerce-info-img img {
    max-width: 100%;
    height: auto;
    border: 10px solid #ccc;
    border-radius: 3px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  .commerce-info-important input[type="text"] {
    width: 100%;
    box-sizing: border-box;
  }
  .commerce-info-important select {
  width: 100%;
  box-sizing: border-box;
  padding: 8px;
  border-radius: 3px;
  color: #333;
  font-weight: 500;
  font-size: 14px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="%23333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>');
  background-repeat: no-repeat;
  background-position: 95% center;
}
.commerce-info-important select, input:focus {
  outline: none;
  border-color: #FB3D03;
}
.commerce-info-important textarea.description {
  width: 100%;
  box-sizing: border-box;
  padding: 8px;
  border-radius: 3px;
  color: #333;
  font-weight: 500;
  font-size: 14px;
  resize: vertical;
}
.products {
  margin-top: 10px;
  width: 100px;
  height: 150px;
}
.products-title h3 {
  color: #fff;
  text-decoration: underline;
  font-weight: 500;
}
.products-header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #0517B9;
  color: #fff;
  padding: 10px;
  border-radius: 3px;
}
.products-title {
  font-weight: 900;
  font-size: 18px;
}
.products-add {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: #fff;
  border-radius: 50%;
  font-weight: 900;
  font-size: 20px;
  cursor: pointer;
  margin-bottom: 10px;
}
.products-add span {
  color: #0517B9;
}
.modal {
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.5);
display: flex;
justify-content: center;
align-items: center;
}

.modal-content {
background-color: #fff;
padding: 30px;
border-radius: 3px;
}

.modal h3 {
margin-top: 0;
margin-bottom: 20px;
}

.form-group {
margin-bottom: 20px;
}

.form-group label {
display: block;
margin-bottom: 10px;
}

input, textarea, select {
border: none;
border-bottom: 1px solid #ccc;
outline: none;
}

.form-group select {
width: 100%;
box-sizing: border-box;
padding: 8px;
border: 1px solid #ccc;
border-radius: 3px;
background-color: #f2f2f2;
color: #333;
font-weight: 500;
font-size: 14px;
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="%23333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>');
background-repeat: no-repeat;
background-position: 95% center;
}

.form-group select:focus,
.form-group input:focus,
.form-group textarea:focus {
outline: none;
border-color: #FB3D03;
}

.btn-save {
background-color: #0517B9;
color: #fff;
border: none;
border-radius: 3px;
padding: 10px 20px;
font-weight: 500;
font-size: 14px;
cursor: pointer;
transition: background-color 0.3s ease;
}

.btn-save:hover {
background-color: #FB3D03;
}
</style>
