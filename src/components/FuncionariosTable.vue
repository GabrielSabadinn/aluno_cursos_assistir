<template>
  <div>
    <div class="custom-table">
      <div class="table-header">
        <div class="header-cell">
          <img
            src="../assets/grupo_icon_reunido.svg"
            style="margin-left: 30px; margin-right: 12px"
          />
          Funcionários Cadastrados
        </div>
        <button class="add-button" @click="openModal">
          <img src="../assets/icon_adicionar.svg" style="margin-right: 12px" />
          Cadastrar Funcionário
        </button>
      </div>
      <div class="table-body">
        <div v-for="(funcionario, index) in funcionarios" :key="index" class="table-row">
          <div class="cell">
            <div class="cell-content">
              <div class="funcionario-info">
                <p class="funcionario-nome-cpf">
                  {{ funcionario.nome }}
                  <span style="margin-left: 30px"> (CPF: {{ funcionario.cpf }})</span>
                </p>
              </div>
            </div>
            <div class="buttons">
              <button class="history-button" @click="verHistorico(funcionario)">
                <img
                  src="../assets/pdf_icon.svg"
                  style="width: 20px; margin-right: 5px; vertical-align: middle"
                />
                <span style="vertical-align: middle">Ver Histórico</span>
              </button>
              <button class="delete-button" @click="excluirFuncionario(index)">
                <img
                  src="../assets/liexeira-icon-funcionarios.svg"
                  style="width: 20px; margin-right: 5px; vertical-align: middle"
                />
                <span style="vertical-align: middle">Excluir</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal para cadastro de funcionário -->
    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <h2 class="modal-title">Cadastrar Novo Funcionário</h2>
        <p class="modal-text">
          Insira o email do funcionário para que ele faça parte do seu<strong>
            TIME
          </strong>
          :
        </p>
        <input
          v-model="newFuncionarioEmail"
          type="email"
          class="modal-input"
          placeholder="Email do funcionário"
        />
        <div class="modal-buttons">
          <button class="cadastrar-button" @click="cadastrarFuncionario">
            Cadastrar
          </button>
          <button class="cancelar-button" @click="closeModal">Cancelar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      newFuncionarioEmail: "",
    };
  },
  props: {
    funcionarios: Array,
  },
  methods: {
    openModal() {
      this.showModal = true;
      this.newFuncionarioEmail = ""; // Limpar o campo de email ao abrir o modal
    },
    closeModal() {
      this.showModal = false;
    },
    cadastrarFuncionario() {
      if (this.newFuncionarioEmail) {
        this.$emit("add-funcionario", this.newFuncionarioEmail);
        this.closeModal();
      } else {
        alert("Por favor, insira o email do funcionário.");
      }
    },
    verHistorico(funcionario) {
      this.$emit("ver-historico", funcionario);
    },
    excluirFuncionario(index) {
      this.$emit("excluir-funcionario", index);
    },
    // Outros métodos que você já tinha
  },
};
</script>
<style lang="css">
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
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

/* Estilos para o campo de email no modal */
.modal-input {
  padding: 6px 12px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  width: 100%;
}

/* Estilos para os botões no modal */
.modal-buttons {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.modal-buttons button {
  margin: 0 10px;
}

.cadastrar-button:hover {
  background-color: #1c741f;
}
.cancelar-button:hover {
  background-color: #85221b;
}
.cadastrar-button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
}

.cancelar-button {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
}
.funcionario-info {
  display: flex;
  flex-direction: column;
}

.funcionario-nome-cpf {
  font-weight: bold;
  font-size: 14px;
}

.funcionario-cpf {
  color: #888;
  font-size: 12px;
}
.funcionario-info {
  display: flex;
  flex-direction: column;
}

.funcionario-nome {
  font-weight: bold;
}

.funcionario-cpf {
  color: #888;
  font-size: 12px;
}
.add-button {
  background-color: #ff9f00;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 14px;
  width: 210px;
  height: 35px;
  font-weight: 600;
  align-items: center;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
  margin-right: 30px;
}

.custom-table {
  width: 100%;
}

.table-header {
  display: flex;
  background-color: #2f536c;
  color: white;
  justify-content: space-between;
  align-items: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.header-cell {
  display: flex;
  align-items: center;
  height: 60px;
}

.table-body {
  background-color: #d9d9d9;
}

.table-row {
  background-color: #d9d9d9;
  display: flex;
  padding: 12px;
}

.cell {
  padding: 12px;
  background-color: #567a93;
  flex: 1;
  border-radius: 10px;
  color: #fff;
  font-weight: 600;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cell-content {
  display: flex;
  align-items: center;
}

.buttons {
  display: flex;
  align-items: center;
}

.history-button {
  background-color: #fff;
  border-radius: 12px;
  align-items: center;
  font-weight: 500;
  color: #2f536c;
  border: none;
  padding: 4px 8px;
  font-size: 12px;
  cursor: pointer;
  margin-right: 4px;
  width: 140px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  text-align: center;
}

.delete-button {
  background-color: #cf142b;
  border-radius: 12px;
  align-items: center;
  font-weight: 500;
  color: #fff;
  border: none;
  padding: 4px 8px;
  font-size: 12px;
  cursor: pointer;
  margin-left: 4px;
  width: 100px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  text-align: center;
}
</style>
