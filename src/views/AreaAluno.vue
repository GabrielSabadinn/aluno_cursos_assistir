<template>
  <div>
    <div class="profile-container">
      <div class="profile-header">
        <img class="user-icon" src="../assets/user-icon-principal.svg" />
        <div class="user-details">
          <h1 class="user-greeting">
            Olá,<span class="user-name">{{ userInfos.nomedoaluno }}</span>
          </h1>
          <p class="user-email">{{ userInfos.emailaluno }}</p>
        </div>
      </div>

      <div style="border: 1px solid #143d59"></div>

      <div style="padding: 15px 30px">
        <h1 class="section-heading">Dados Pessoais</h1>

        <div v-for="(item, index) in dataOptions" :key="item.key">
          <div class="info-block clickable">
            <span class="info-label">{{ item.label }}</span>

            <div class="info-value-container">
              <p class="info-value">
                {{
                  item.key === "cpfaluno" && !cpfVisible
                    ? "***********"
                    : item.key.startsWith("enderecoaluno")
                    ? userInfos.enderecoaluno[item.key.split(".")[1]]
                    : userInfos[item.key]
                }}
              </p>
            </div>

            <img
              v-if="item.key === 'cpfaluno'"
              class="eye-icon"
              :src="
                cpfVisible
                  ? require('../assets/olho-fechar.svg')
                  : require('../assets/olho-abrir.svg')
              "
              @click="toggleCpfVisibility"
            />
          </div>
          <div class="gray-line" v-if="index !== dataOptions.length - 1"></div>
          <div class="divider" v-if="index !== dataOptions.length - 1"></div>
        </div>
      </div>
      <EditModal
        :visible="isModalOpen"
        @close="closeModal"
        :userInfos="userInfos"
        @update-user-infos="updateUserInfos"
       
      >
        <p>Edit {{ currentEditLabel }}:</p>
      </EditModal>
    </div>
  </div>
</template>

<script>
import EditModal from "@/components/EditModal.vue";
import axios from "axios";

export default {
  components: {
    EditModal,
  },
  data() {
    return {
      cpfVisible: false,
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
      isModalOpen: false,
      currentEditLabel: "",
      userInfos: {
        nomedoaluno: "",
        celularaluno: "",
        cepaluno: "",
        enderecoaluno: {
          logradouro: "",
          numero: "",
          complemento: "",
          bairro: "",
        },
        cpfaluno: "",
        nascimentoaluno: "",
        emailaluno: "",
      },
    };
  },
  async created() {
    await this.fetchDataFromAPI();
  },
  methods: {
    pegarInfoFilho(obj){
        console.log(obj)
    },
    async fetchDataFromAPI() {
      try {
        const response = await axios.get(
          "https://www.cursoslefisc.com.br/api/sandbox/aluno/perfil"
        );
        const userData = response.data;

        this.userInfos.nomedoaluno = userData.nome;
        this.userInfos.celularaluno =
          userData.telefones[0]?.ddd + " " + userData.telefones[0]?.numero;
        this.userInfos.cepaluno = userData.endereco?.cep;
        this.userInfos.enderecoaluno.logradouro = userData.endereco?.logradouro;
        this.userInfos.enderecoaluno.numero = userData.endereco?.numero;
        this.userInfos.enderecoaluno.complemento = userData.endereco?.complemento;
        this.userInfos.enderecoaluno.bairro = userData.endereco?.bairro;
        this.userInfos.cpfaluno = userData.cpf;
        this.userInfos.emailaluno = userData.email;
        let datasplit = userData.dataNascimento.toString().split("-");
        let dataFormatado =
          datasplit[2].substring(0, 2) + "/" + datasplit[1] + "/" + datasplit[0];
        this.userInfos.nascimentoaluno = dataFormatado;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    toggleCpfVisibility() {
      this.cpfVisible = !this.cpfVisible;
    },
    openEditDialog(key) {
      this.isModalOpen = true;
      this.currentEditLabel = this.dataOptions.find((item) => item.key === key)?.label;
    },
    updateUserInfos(updatedUserInfos) {
      console.log(updatedUserInfos)
      this.userInfos[updatedUserInfos.key] = updatedUserInfos.valor;
    },
    closeModal() {
      this.isModalOpen = false;
      this.currentEditLabel = "";
    },
  },
};
</script>
<style lang="css">
.gray-line {
  width: 100%;
  height: 1px;
  background-color: #d9d9d9;
  margin-top: 10px;
}
.profile-container {
  padding: 20px;
  background-color: #eeeeee;
}
.profile-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.user-icon {
  width: 60px;
  margin-right: 10px;
}
.user-details {
  display: flex;
  flex-direction: column;
}
.user-greeting {
  font-size: 24px;
  display: flex;
  align-items: center;
}
.user-name {
  font-weight: 400;
  margin-left: 6px;
}
.user-email {
  font-size: 12px;
}
.divider {
  max-width: 650px;
  margin: 10px 0;
}

.info-block {
  display: flex;
  align-items: center;
  margin: 10px 0;
}
.info-label {
  color: #143d59;
  margin-right: 10px;
}
.info-value-container {
  display: flex;
  align-items: center;
}
.info-value {
  color: #143d59;
  font-weight: 700;
  margin-right: 5px;
}
.user-info {
  font-size: 12px;
  color: #666666;
}
.eye-icon {
  cursor: pointer;
  margin-left: 10px;
  width: 20px;
}
.clickable {
  cursor: pointer;
}
.arrow-icon {
  margin-left: 10px;
  transition: transform 0.3s ease-in-out;
}
.clickable:hover .arrow-icon {
  transform: translateX(10px);
}
</style>
