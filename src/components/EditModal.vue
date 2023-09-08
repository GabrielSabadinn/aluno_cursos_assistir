<template>
  <div>
    <div style="padding: 30px">
      <button class="edit-button" @click="openModal">Editar</button>
    </div>
    <div v-if="isModalOpen" class="user-modal">
      <div class="user-modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <h2 class="modal-heading">Dados Pessoais</h2>

        <div class="user-info-container">
          <div v-for="item in dataOptions" :key="item.key" class="user-info-item">
            <span class="info-label">{{ item.label }}:</span>
            <input
              v-if="item.key.startsWith('enderecoaluno')"
              v-model="localUserInfos.enderecoaluno[item.key.split('.')[1]]"
              @keydown.enter="saveEditedValue(item.key)"
              @keydown.esc="cancelEdit(item.key)"
              class="edit-input"
            />
            <input
              v-if="!item.key.startsWith('enderecoaluno')"
              v-model="localUserInfos[item.key]"
              @keydown.enter="saveEditedValue(item.key)"
              @keydown.esc="cancelEdit(item.key)"
              class="edit-input"
            />
          </div>
        </div>
        <button class="edit-button-small" @click="saveEditedValue()">Salvar</button>
        <button class="edit-button-small" @click="cancelEdit()">Cancelar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["userInfos"],
  data() {
    return {
      cpfVisible: "",
      isModalOpen: false,
      isEditing: {},
      localUserInfos: { ...this.userInfos },
      editedValues: { enderecoaluno: {} },
      dataOptions: [
        { key: "nomedoaluno", label: "Nome Completo" },
        { key: "celularaluno", label: "Celular" },
        { key: "cepaluno", label: "CEP" },
        { key: "enderecoaluno.logradouro", label: "Logradouro" },
        { key: "enderecoaluno.numero", label: "Número" },
        { key: "enderecoaluno.complemento", label: "Complemento" },
        { key: "enderecoaluno.bairro", label: "Bairro" },
        { key: "cpfaluno", label: "CPF" },
        { key: "nascimentoaluno", label: "Data de Nascimento" },
        { key: "emailaluno", label: "E-mail" },
      ],
    };
  },
  mounted() {
    console.log(this.localUserInfos);
  },

  methods: {
    openModal() {
      this.isModalOpen = true;
      this.isEditing = {};
    },
    closeModal() {
      this.isModalOpen = false;
      this.isEditing = {};
    },
    startEdit(key) {
      this.isEditing[key] = true;
      if (key.startsWith("enderecoaluno")) {
        const subKey = key.split(".")[1];
        this.editedValues.enderecoaluno[subKey] = this.localUserInfos.enderecoaluno[
          subKey
        ];
      } else {
        this.editedValues[key] = this.localUserInfos[key];
      }
    },

    saveEditedValue(key) {
      const editedValue = this.editedValues[key];

      if (key.startsWith("enderecoaluno")) {
        const subKey = key.split(".")[1];
        this.localUserInfos.enderecoaluno[subKey] = editedValue;
      } else {
        this.localUserInfos[key] = editedValue;
      }

      this.$emit("update-user-infos", { valor: editedValue, key });
      this.isEditing[key] = false;
    },
    cancelEdit(key) {
      this.isEditing[key] = false;
      this.editedValues[key] = this.localUserInfos[key];
      this.closeModal();
    },
  },
};
</script>

<style lang="css">
.edit-input {
  flex-grow: 1;
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #959595;
}
.user-modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.user-modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  border-radius: 5px;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.modal-heading {
  text-align: center;
}

.user-info-container {
  margin-top: 20px;
}

.user-info-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.info-label {
  flex-basis: 150px;
}

.info-value {
  flex-grow: 1;
}

.edit-input {
  flex-grow: 1;
  padding: 5px;
}
.edit-button:hover {
  background-color: #45a049;
}
.edit-button {
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.edit-button-small {
  background-color: #4caf50;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
}

.edit-button-small:hover {
  background-color: #45a049;
}

.edit-button-small:active {
  background-color: #3e8e41;
}
</style>
