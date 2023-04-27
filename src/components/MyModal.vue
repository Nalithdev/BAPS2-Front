<template>
  <div v-if="internalIsOpen" class="modal">
    <div class="modal-content">
      <div class="close-icon" @click="closeModal">&#10005;</div>
      <div class="modal-container">
        <router-link to="/commerce-view" @click="closeModal"><p>Ajouter un commerce</p>
        </router-link>
        <p @click="closeModalAndModifyProfile">Modifier le Profil</p>
        <p class="Logout" @click="closeModalAndLogout">Déconnexion</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';

export default defineComponent({
  components: {
    RouterLink,
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    internalIsOpen(): boolean {
      return this.isOpen;
    },
  },
  methods: {
    closeModal(): void {
      this.$emit('update:isOpen', false);
    },
    closeModalAndModifyProfile(): void {
      this.closeModal();
    },
    closeModalAndLogout(): void {
      this.closeModal();
    },
  },
});
</script>
<style scoped>
/* Style pour le fond sombre de la modal */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

/* Style pour le contenu de la modal */
.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  position: relative;
}

/* Style pour l'icône de fermeture */
.close-icon {
  position: absolute;
  top: 3px;
  right: 5px;
  font-size: 18px;
  color: #FE7B52;
  cursor: pointer;
}
.modal-container p {
  color: black;
  padding: 3px;
  font-size: 15px;
  cursor: pointer;
}
.modal-container a {
  text-decoration: none;
  color: inherit;
}
.Logout {
  color: #FE7B52 !important;
  font-weight: 500;
  margin-top: 10px;
}
</style>
