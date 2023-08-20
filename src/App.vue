<template>
  <div>
    <navComponente @exibirLogin="mostrarLogin = $event"></navComponente>
    <div class="backTrans" :style="{'display': mostrarLogin ? 'flex' : 'none'}">
      <div class="painel" style="max-width: 445px;">
        <div style="display: flex;justify-content: flex-end;">
          <img src="https://www.cursoslefisc.com.br/novocurso/img/X.svg" style="cursor: pointer;" @click="tirarLogin">
        </div>
        <div class="opcoes">
          <p :class="{active: entrar === 2}" @click="entrar = 2" style="margin-right: 20px;">Cadastre-se</p>
          <p :class="{active: entrar === 1}" @click="entrar = 1">Entrar</p>
        </div>
        <div style="display:flex; justify-content: center; margin-top: 14px;">
          <button class="botoes-escolha-pessoa" :class="{ active: tipoCadastro === 'aluno' }" @click="escolherTipo('aluno')">Sou Aluno</button>
          <button class="botoes-escolha-pessoa" :class="{ active: tipoCadastro === 'empresa' }" @click="escolherTipo('empresa')">Sou Empresa</button>
        </div>
        <div v-if="entrar === 1" class="modalOp">
          <div>
            <input type="text" :placeholder="tipoCadastro === 'empresa' ? 'CNPJ' : 'E-mail ou CPF'" v-model="usuario.email">
            <span>{{ txtErro.email }}</span>
            <input type="password" placeholder="Senha" v-model="usuario.senha">
            <span>{{ txtErro.senha }}</span>
            <button @click="logar" style="margin-top: 20px; display: flex; align-items: center; justify-content: center;">
              Entrar <img v-if="loading" width="40" src="https://www.cursoslefisc.com.br/novocurso/img/spinner.svg">
            </button>
            <span>{{ txtErro.geral }}</span>
          </div>
          <p>Esqueceu sua senha?</p>
        </div>
        <div v-else-if="entrar === 2" class="modalOp">
          <div>
            <div v-if="tipoCadastro === 'aluno'">
              <input type="text" placeholder="Nome" v-model="usuarioCadastro.nome">
              <span>{{ txtErro.nome }}</span>
            </div>
            <div v-if="tipoCadastro === 'empresa'">
             
            </div>
            <input type="text" :placeholder="tipoCadastro === 'aluno' ? 'E-mail' : 'E-mail Empresarial'" v-model="usuarioCadastro.email">
            <input type="text" :placeholder="tipoCadastro === 'empresa' ? 'CNPJ' : 'CPF'" v-model="usuarioCadastro.cnpj">
            <input type="password" placeholder="Senha" v-model="usuarioCadastro.senha">
            <span>{{ txtErro.senha }}</span>
            <input type="password" placeholder="Repetir senha" v-model="usuarioCadastro.senhaRepetida">
            <span>{{ txtErro.senhaRepetida }}</span>
            <button @click="cadastrar" style="margin-top: 20px; display: flex; align-items: center; justify-content: center;">
              Cadastrar <img v-if="loading" width="40" src="https://www.cursoslefisc.com.br/novocurso/img/spinner.svg">
            </button>
            <span>{{ txtErro.geral }}</span>
          </div>
        </div>
        
      </div>
    </div>
    <div style="min-height: 60px; width: 100%;"></div>
    <router-view></router-view>
    <footerComponente></footerComponente>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions, mapMutations } from "vuex";
import navComponente from "./components/navComponente.vue";
import footerComponente from "./components/footerComponente.vue";

export default {
  components: {
    footerComponente,
    navComponente,
  },

  data() {
    return {
      usuario: { email: "", senha: "" },
      usuarioCadastro: { email: "", senha: "", cpf: "", senhaRepetida: "", nome: "" },
      mostrarLogin: false,
      entrar: 1,
      loading: false,
      txtErro: { email: "", senha: "", geral: "", cpf: "", nome: "", senhaRepetida: "" },
    };
  },
  mounted() {
    let cursoCarrinho = localStorage.getItem("carrrinhoCurso");
    if (cursoCarrinho) {
      this.setCarrinho(JSON.parse(cursoCarrinho));
    }
    this.fetchDataCursos();
  },
  methods: {
    ...mapActions(["fetchDataCursos"]),
    ...mapMutations(["setCarrinho"]),
    async tirarLogin() {
      this.mostrarLogin = false;
      document.querySelector("body").style.overflow = "auto";
    },
    async cadastrar() {
      this.txtErro = {
        email: "",
        senha: "",
        geral: "",
        cpf: "",
        nome: "",
        senhaRepetida: "",
      };
      try {
        if (this.usuarioCadastro.nome == "") {
          this.txtErro.nome = "Preencha o campo Nome";
        } else if (this.usuarioCadastro.email == "") {
          this.txtErro.email = "Preencha o campo E-mail";
        } else if (this.usuarioCadastro.cpf == "") {
          this.txtErro.cpf = "Preencha o campo CPF";
        } else if (this.usuarioCadastro.senha == "") {
          this.txtErro.senha = "Preencha o campo Senha";
        } else if (this.usuarioCadastro.senhaRepetida == "") {
          this.txtErro.senhaRepetida = "Preencha o campo Repetir Senha";
        } else {
          this.loading = true;
          let formDate = new FormData();
          formDate.append("email", this.usuario.email);
          formDate.append("senha", this.usuario.senha);
          const resLogin = await axios.post(
            "https://api.cursoslefisc.com.br/sandbox/authentication/login",
            formDate
          );
          console.log(resLogin);
        }
      } catch (e) {
        console.log(e);
      } finally {
        this.loading = false;
      }
    },
    async logar() {
      try {
        if (this.usuario.email == "") {
          this.txtErro.email = "Preencha o E-mail ou CPF";
        } else if (this.usuario.senha == "") {
          this.txtErro.senha = "Preencha o E-mail ou CPF";
        } else {
          console.log(this.usuario);
          this.loading = true;
          let formDate = new FormData();
          formDate.append("email", this.usuario.email);
          formDate.append("senha", this.usuario.senha);
          const resLogin = await axios.post(
            "https://api.cursoslefisc.com.br/sandbox/authentication/login",
            formDate
          );
          console.log(resLogin);
        }
      } catch (e) {
        console.log(e);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  outline: none;
}
.divImg {
  background: url(https://www.lefisc.com.br/aliquotasIcms/imagens/21542.jpg);

  background-size: cover;
  background-blend-mode: multiply;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 5px;
}
.modalOp div {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  width: 100%;
  align-items: flex-start;
  margin: auto 0;
}
.modalOp div span {
  color: red;
  font-size: 12px;
}
.modalOp {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.modalOp button {
  margin-top: 20px;
  width: 100%;
  max-width: 300px;
  background: #ff822e;
  border: none;
  color: #fff;
  border-radius: 5px;
  height: 35px;
  cursor: pointer;
}
.modalOp p {
  margin-top: 20px;
  color: #2277ff;
  font-size: 12px;
}
.modalOp input {
  max-width: 300px;
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  border: 1px solid #313131;
  margin-top: 20px;
}
.opcoes {
  display: flex;
  align-items: center;
  justify-content: center;
}
.opcoes p {
  cursor: pointer;
}
.opcoes .active {
  font-weight: bold;
  border-bottom: 3px solid #143d59;
}
.backTrans {
  position: absolute;
  width: 100%;
  height: 100%;
  right: 0px;
  top: 0px;
  z-index: 2;
  background: rgb(23 23 23 / 50%);
  display: flex;
  align-items: center;
  justify-content: center;
}
.backTrans .painel {
  background: #fff;
  border-radius: 10px;
  background: #fff;
  max-width: 900px;
  max-height: 94%;
  overflow: auto;
  width: 100%;
  position: fixed;
  padding: 20px;
}
.swiper-button-prev,
.swiper-button-next {
  --swiper-navigation-size: 44px;
  --swiper-navigation-top-offset: 50%;
  --swiper-navigation-sides-offset: 10px;
  --swiper-navigation-color: red;
}
</style>
