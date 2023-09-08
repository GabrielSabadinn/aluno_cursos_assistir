<template>
  <div>
    <navComponente @exibirLogin="mostrarLogin = $event"></navComponente>
    <div class="backTrans" :style="{ display: mostrarLogin ? 'flex' : 'none' }">
      <div class="painel" style="max-width: 445px">
        <div style="display: flex; justify-content: flex-end">
          <img
            src="https://www.cursoslefisc.com.br/novocurso/img/X.svg"
            style="cursor: pointer"
            @click="tirarLogin"
          />
        </div>
        <div class="opcoes">
          <p
            :class="{ active: entrar === 2 }"
            @click="entrar = 2"
            style="margin-right: 20px"
          >
            Cadastre-se
          </p>
          <p :class="{ active: entrar === 1 }" @click="entrar = 1">Entrar</p>
        </div>
        <div style="display: flex; justify-content: center; margin-top: 14px">
          <button
            class="botoes-escolha-pessoa"
            :class="{ active: tipoCadastro === 'aluno' }"
            @click="escolherTipo('aluno')"
          >
            Sou Aluno
          </button>
          <button
            class="botoes-escolha-pessoa"
            :class="{ active: tipoCadastro === 'empresa' }"
            @click="escolherTipo('empresa')"
          >
            Sou Empresa
          </button>
        </div>
        <div v-if="entrar === 1" class="modalOp">
          <div>
            <input
              type="text"
              :placeholder="tipoCadastro === 'empresa' ? 'CNPJ' : 'E-mail ou CPF'"
              v-model="usuario.email"
            />
            <span>{{ txtErro.email }}</span>
            <input type="password" placeholder="Senha" v-model="usuario.senha" />
            <span>{{ txtErro.senha }}</span>
            <button
              @click="logar"
              style="
                margin-top: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
              "
            >
              Entrar
              <img
                v-if="loading"
                width="40"
                src="https://www.cursoslefisc.com.br/novocurso/img/spinner.svg"
              />
            </button>
            <span>{{ txtErro.geral }}</span>
          </div>
          <p>Esqueceu sua senha?</p>
        </div>
        <div v-else-if="entrar === 2" class="modalOp">
          <div>
            <div v-if="tipoCadastro === 'aluno'">
              <input type="text" placeholder="Nome" v-model="usuarioCadastro.nome" />
              <span>{{ txtErro.nome }}</span>
            </div>
            <div v-if="tipoCadastro === 'empresa'"></div>
            <input
              type="text"
              :placeholder="tipoCadastro === 'aluno' ? 'E-mail' : 'E-mail Empresarial'"
              v-model="usuarioCadastro.email"
            />
            <input
              type="text"
              :placeholder="tipoCadastro === 'empresa' ? 'CNPJ' : 'CPF'"
              v-model="usuarioCadastro.cnpj"
            />
            <input type="password" placeholder="Senha" v-model="usuarioCadastro.senha" />
            <span>{{ txtErro.senha }}</span>
            <input
              type="password"
              placeholder="Repetir senha"
              v-model="usuarioCadastro.senhaRepetida"
            />
            <span>{{ txtErro.senhaRepetida }}</span>
            <button
              @click="cadastrar"
              style="
                margin-top: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
              "
            >
              Cadastrar
              <img
                v-if="loading"
                width="40"
                src="https://www.cursoslefisc.com.br/novocurso/img/spinner.svg"
              />
            </button>
            <span>{{ txtErro.geral }}</span>
          </div>
        </div>
      </div>
    </div>
    <div style="min-height: 60px; width: 100%"></div>
    <router-view></router-view>
    <footerComponente></footerComponente>
  </div>
</template>

<script>
import navComponente from "./components/navComponente.vue";
import footerComponente from "./components/footerComponente.vue";
import axios from "axios";
import { mapMutations, mapActions } from "vuex";
import Cookies from "js-cookie";

export default {
  components: {
    footerComponente,
    navComponente,
  },
  data() {
    return {
      usuario: { email: "", senha: "" },
      usuarioCadastro: {
        email: "",
        senha: "",
        cpf: "",
        cnpj: "",
        senhaRepetida: "",
        nome: "",
      },
      mostrarLogin: false,
      entrar: 1,
      tipoCadastro: "aluno",
      loading: false,
      txtErro: {
        email: "",
        senha: "",
        geral: "",
        cpf: "",
        cnpj: "",
        nome: "",
        senhaRepetida: "",
      },
    };
  },
  async mounted() {
    let cursoCarrinho = localStorage.getItem("carrrinhoCurso");
    if (cursoCarrinho) {
      this.setCarrinho(JSON.parse(cursoCarrinho));
    }

    await Promise.all([this.fetchPerfilUser(), this.fetchDataCursos()]);
  },
  methods: {
    escolherTipo(tipo) {
      this.tipoCadastro = tipo;
      if (tipo === "empresa") {
        this.usuarioCadastro.nome = "";
        this.usuarioCadastro.email = "";
      }
      const userData = Cookies.get("userData");
      if (userData) {
        const userDataObj = JSON.parse(userData);
        this.usuario.email = userDataObj.email;
        this.usuario.senha = userDataObj.senha;
      }
    },
    ...mapActions(["fetchDataCursos", "fetchPerfilUser"]),
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
        if (this.usuarioCadastro.nome === "") {
          this.txtErro.nome = "Preencha o campo Nome";
        } else if (this.usuarioCadastro.email === "") {
          this.txtErro.email = "Preencha o campo E-mail";
        } else if (this.usuarioCadastro.cpf === "") {
          this.txtErro.cpf = "Preencha o campo CPF";
        } else if (this.usuarioCadastro.senha === "") {
          this.txtErro.senha = "Preencha o campo Senha";
        } else if (this.usuarioCadastro.senhaRepetida === "") {
          this.txtErro.senhaRepetida = "Preencha o campo Repetir Senha";
        } else {
          this.loading = true;
          //let formData = new FormData();
          // formData.append('email', this.usuarioCadastro.email);
          //formData.append('senha', this.usuarioCadastro.senha);
          // const resLogin = await axios.post('https://www.cursoslefisc.com.br/api/sandbox/authentication/login', formData);
          // const userData = resLogin.data;
          // Cookies.set("userData", JSON.stringify(userData), { expires: 7 });
        }
      } catch (e) {
        console.log(e);
      } finally {
        this.loading = false;
      }
    },
    async logar() {
      try {
        if (this.usuario.email === "") {
          this.txtErro.email = "Preencha o E-mail ou CPF";
        } else if (this.usuario.senha === "") {
          this.txtErro.senha = "Preencha a Senha";
        } else {
          this.loading = true;
          let formData = new FormData();
          formData.append("email", this.usuario.email);
          formData.append("senha", this.usuario.senha);
          const resLogin = await axios.post(
            "https://www.cursoslefisc.com.br/api/sandbox/authentication/login",
            formData
          );
          const userData = resLogin.data;
          Cookies.set("token_cursos", userData.acessToken, { expires: 7 });
          window.location.reload();
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
.botoes-escolha-pessoa {
  width: 120px;
  margin-right: 8px;
  border-radius: 4px;
  background-color: #fff;
  color: #ff822e;
  border: none;
  border: 1px solid #ff822e;
  height: 30px;
}

.botoes-escolha-pessoa:hover,
.botoes-escolha-pessoa.active {
  background-color: #ff822e;
  color: #fff;
  border: none;
  border: 1px solid #fff;
}
.botoes-escolha-pessoa {
  width: 120px;
  margin-right: 8px;
  border-radius: 4px;
  background-color: #fff;
  color: #ff822e;
  border: none;
  border: 1px solid #ff822e;
  height: 30px;
}
.botoes-escolha-pessoa:hover {
  background-color: #ff822e;
  color: #fff;
  border: none;
  border: 1px solid #fff;
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

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  outline: none;
}
</style>
