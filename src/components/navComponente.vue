<template>
  <div style="position: fixed; z-index: 9999; width: 100%; background-color: #143d59">
    <div class="navbar">
      <img
        src="../assets/burger.svg"
        alt=""
        width="30"
        @click="clickHambur = !clickHambur"
        class="ham"
      />

      <img src="../assets/logonav.svg" />
      <ul class="ul1" :style="{ left: clickHambur ? '0px' : '-100%' }">
        <router-link to="/" style="text-decoration: none; color: inherit">
          <li class="li1">HOME</li>
        </router-link>

        <li class="li cursos" style="margin-left: 40px">
          <router-link
            to="/lefiscCursos/cursoTotal"
            style="text-decoration: none; color: inherit"
          >
            CURSOS
          </router-link>
          <img class="rotate-arrow" src="../assets/flexaceta.svg" />
          <div class="ul">
            <div class="area-curso">
              <router-link to="/lefiscCursos/cursoTotal">
                <img
                  style="margin-top: 10px; margin-bottom: 5px; cursor: pointer"
                  src="../assets/confira_nossa_agenda.svg"
              /></router-link>
              <ul class="cursos-por-area">
                <li class="li" style="text-decoration: underline 3px; color: #143d59">
                  Cursos <strong>Por Área</strong>
                </li>
                <li class="li">Cursos <strong>Trabalhistas</strong></li>
                <li class="li">Cursos <strong>Federais</strong></li>
                <li class="li">Cursos <strong>Fiscais</strong></li>
              </ul>
              <ul class="cursos-por-area">
                <li class="li" style="text-decoration: underline 3px; color: #143d59">
                  Cursos <strong>Por Modalidade</strong>
                </li>
                <li class="li">Cursos <strong>In-Company</strong></li>
                <li class="li">Cursos <strong>Presencias</strong></li>
                <li class="li">Cursos <strong>EAD</strong></li>
              </ul>
              <ul class="cursos-por-area">
                <li class="li" style="text-decoration: underline 3px; color: #143d59">
                  Cursos <strong>Para Empresas</strong>
                </li>
                <li class="li">Cursos <strong>In-Company</strong></li>
              </ul>
            </div>
          </div>
        </li>

        <div class="cursos-por-area-responsivo">
          <ul class="cursos-por-area">
            <li class="li" style="text-decoration: underline 3px; color: #143d59">
              Cursos <strong>Por Área</strong>
            </li>
            <li class="li">Cursos <strong>Trabalhistas</strong></li>
            <li class="li">Cursos <strong>Federais</strong></li>
            <li class="li">Cursos <strong>Fiscais</strong></li>
          </ul>
          <ul class="cursos-por-area">
            <li class="li" style="text-decoration: underline 3px; color: #143d59">
              Cursos <strong>Por Modalidade</strong>
            </li>
            <li class="li">Cursos <strong>In-Company</strong></li>
            <li class="li">Cursos <strong>Presencias</strong></li>
            <li class="li">Cursos <strong>EAD</strong></li>
          </ul>
          <ul class="cursos-por-area">
            <li class="li" style="text-decoration: underline 3px; color: #143d59">
              Cursos <strong>Para Empresas</strong>
            </li>
            <li class="li">Cursos <strong>In-Company</strong></li>
            <li class="li">Monte seu combo com <strong>desconto</strong></li>
          </ul>
        </div>
        <a
          href="https://www.youtube.com/@CanalLEFISC/videos"
          style="text-decoration: none; color: inherit"
        >
          <li class="li1" style="margin-left: 40px">LIVE E EVENTOS</li>
        </a>
        <a
          href="https://www.lefisc.com.br/consOnline/"
          style="text-decoration: none; color: inherit"
        >
          <li class="li1" style="margin-left: 40px">CONSULTORIA LEFISC</li>
        </a>
      </ul>

      <div style="display: flex; position: relative">
        <div class="carrinho">
          <img
            class="imagem-carrinho"
            src="../assets/carrinho-compras-icon.svg"
            style="margin-right: 20px; width: 28px"
          />
          <div
            class="carrinho-quantidade"
            id="carrinhoQuantidade"
            v-if="getCursosCarrinho.length != 0"
          >
            <span>{{ getCursosCarrinho.length }}</span>
          </div>
          <div class="cart-info">
            <div style="max-height: 160px; overflow: auto">
              <div v-for="(product, index) in getCursosCarrinho" :key="index">
                <div
                  class="product"
                  style="border-bottom: 1px solid #b9b9b9; padding: 10px 15px 10px 15px"
                >
                  <div
                    class="divImg"
                    :style="{
                      'background-color':
                        product.categoria.id == 3
                          ? '#AF3437E0'
                          : product.categoria.id == 4
                          ? '#E59819E5'
                          : '#007900',
                      width: '54px',
                      height: '54px',
                    }"
                  >
                    <img :src="product.imageUrl" alt="" class="product-image" />
                  </div>
                  <div style="margin-left: 10px">
                    <div style="font-size: 14px; font-weight: bold">
                      {{ product.nome }}
                    </div>
                    <div style="font-size: 12px">{{ product.categoria.nome }}</div>
                    <div style="font-size: 14px; font-weight: bold">
                      R$ {{ product.valor }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              v-if="getCursosCarrinho.length == 0"
              style="
                position: relative;
                box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
                  rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
                padding: 10px 15px 10px 15px;
              "
            >
              <p
                style="
                  font-weight: bold;
                  margin-top: 8px;
                  margin-bottom: 5px;
                  text-align: center;
                "
              >
                Nenhum curso no carrinho
              </p>
              <button
                style="
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  background-color: #143d59;
                  color: #fff;
                  width: 100%;
                  border: none;
                  padding: 10px;
                  border-radius: 5px;
                  font-weight: bold;
                  font-size: 16px;
                  cursor: pointer;
                "
                @click="irParaCursos"
              >
                Ir para os cursos
              </button>
            </div>
            <div
              v-if="getCursosCarrinho.length != 0"
              style="
                position: relative;
                box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
                  rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
                padding: 10px 15px 10px 15px;
              "
            >
              <p style="font-weight: bold; margin-top: 8px; margin-bottom: 5px">
                Total R$ 1.000
              </p>
              <button
                style="
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  background-color: #143d59;
                  color: #fff;
                  width: 100%;
                  border: none;
                  padding: 10px;
                  border-radius: 5px;
                  font-weight: bold;
                  font-size: 16px;
                  cursor: pointer;
                "
                @click="irParaCarinho"
              >
                Ir para o carrinho
              </button>
            </div>
          </div>
        </div>

        <button
          class="botao-areadoaluno"
          :style="[{ background: getUsuario ? '#fff' : '#FF9F00' }]"
        >
          <div
            style="display: flex; align-items: center"
            @click="boolArea"
            v-if="getUsuario"
          >
            <img
              src="../assets/pessoa_buton.svg"
              style="width: 20px; border-radius: 4px"
              alt="Ícone pessoa"
            />
            <span style="font-weight: 700; margin-left: 12px">Área do aluno </span>
          </div>
          <div
            class="fazerlogin"
            style="display: flex; align-items: center"
            @click="exibirLogin"
            v-if="!getUsuario"
          >
            <img
              src="../assets/icon-fazer-login.svg"
              style="width: 20px; border-radius: 4px"
              alt="Ícone pessoa"
            />
            <span style="font-weight: 700; margin-left: 12px">Fazer login </span>
          </div>
          <div class="area-login" v-show="boolAreaAluno">
            <div class="info-p">
              <div
                style="
                  background-color: #fff;
                  min-width: 70px;
                  height: 70px;
                  border-radius: 70px;
                  margin-right: 15px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                "
              >
                <img src="../assets/user.svg" width="50px" />
              </div>
              <div class="maisinfo-p">
                <p style="font-size: 16px; font-weight: bold">
                  João Pedro aetano caetano
                </p>
                <p style="font-weight: 400; font-size: 12px">João@lefisc.com</p>
                <p
                  style="
                    text-decoration: underline;
                    margin-top: 10px;
                    font-weight: 200;
                    font-size: 12px;
                  "
                >
                  Editar informações
                </p>
              </div>
            </div>
            <div class="area-login-link">
              <ul>
                <li v-for="(link, i) in linkLogin" :key="i">
                  <div style="background-color: #143d59">
                    <img :src="link.icon" />
                  </div>
                  <p
                    style="text-decoration: underline; font-size: 16px; margin-left: 5px"
                  >
                    {{ link.p }}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      mostrarLogin: true,
      quantidadeCursosNoCarrinho: 1,
      totalPreco: 250,
      cursosCarrinho:
        "FECONTABIL - CONTRIBUIÇÕES PREVIDENCIÁRIAS NA CONSTRUÇÃO CIVIL  - REGULARIZAÇÃO DE OBRAS – INCLUINDO O SERO – ATUALIZAÇÃO PARA 2023",
      carrinhoVazio: false,
      clickHambur: false,
      boolAreaAluno: false,
      linkLogin: [
        { icon: require("../assets/icon-meus-dados.svg"), p: "Meus Dados" },
        { icon: require("../assets/icon-meus-cursos.svg"), p: "Meus Cursos" },
        {
          icon: require("../assets/icon-historico-compras.svg"),
          p: "Histórico de Compras",
        },
        { icon: require("../assets/icon-mensagens.svg"), p: "Mensagens" },
        { icon: require("../assets/icon-sair.svg"), p: "Sair" },
      ],
    };
  },
  computed: {
    ...mapGetters(["getUsuario", "getCursosCarrinho"]),
    cursosCarrinhoLimitado() {
      const limiteCaracteres = 50;
      if (this.cursosCarrinho.length > limiteCaracteres) {
        return this.cursosCarrinho.slice(0, limiteCaracteres) + "...";
      }
      return this.cursosCarrinho;
    },
  },
  methods: {
    irParaCursos() {
      window.scrollTo(0, 0);
      this.$router.push({ name: "curso-total" });
    },
    irParaCarinho() {
      window.scrollTo(0, 0);
      this.$router.push({ name: "carrinho-compra" });
    },
    exibirLogin() {
      window.scrollTo(0, 0);
      document.querySelector("body").style.overflow = "hidden";
      this.$emit("exibirLogin", true);
    },
    boolArea() {
      this.boolAreaAluno = !this.boolAreaAluno;
    },
    watch: {
      quantidadeCursosNoCarrinho: function () {
        document.getElementById(
          "carrinhoQuantidade"
        ).textContent = this.quantidadeCursosNoCarrinho;
      },
    },
  },
};
</script>

<style scoped>
.fazerlogin {
  background-color: #ff9f00;
}
.fazerlogin span {
  color: #fff;
}
.carrinho-quantidade {
  position: absolute;
  top: -3px;
  right: 7px;
  background-color: #a435f0;
  color: white;
  font-size: 12px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.botao-comprar {
  border: none;
  background-color: #143d59;
  color: #fff;
  border-radius: 8px;
  font-weight: 600;
  width: 100%;
  height: 30px;
  font-size: 16px;
  margin-top: 8px;
  cursor: pointer;
}
.carrinho {
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.carrinho .imagem-carrinho {
  margin-right: 20px;
  width: 28px;
  transition: transform 0.2s ease-in-out;
}

.carrinho .imagem-carrinho:hover {
  transform: scale(1.2);
}

.cart-info {
  left: 0;
  display: flex;
  position: absolute;
  flex-direction: column;
  left: -240px;
  top: 30px;
  background-color: #fff;
  color: #313131;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.4s ease-in-out;
  width: 280px;
}

.carrinho:hover .cart-info {
  visibility: visible;
  opacity: 1;
}
.ham {
  display: none;
}
.cursos-por-area-responsivo {
  display: none;
}
@media (max-width: 1100px) {
  .fazerlogin {
    background-color: #143d59 !important;
  }
  .image-content {
    padding: 5px;
  }
  .ham {
    display: inline-block !important;
  }
  .total {
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
  #app > div > div:nth-child(1) > div > img:nth-child(2) {
    width: 140px;
  }
  .cursos-por-area-responsivo {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    flex-wrap: wrap;
  }
  .cursos-por-area-responsivo .cursos-por-area .li {
    color: #fff !important;
  }
  .cursos-por-area-responsivo .cursos-por-area .li {
    font-size: 12px;
  }
  .navbar img {
    margin-left: 0px !important;
  }
  .ul .area-curso {
    display: none;
  }
  .ul1 {
    transition: 0.5s all;
    position: absolute;
    flex-direction: column;
    width: 100%;
    top: 60px;
    left: -100%;
    background-color: #143d59;
    align-items: flex-start !important;
  }
  .ul1 .li {
    margin-left: 0px !important;
  }
  .ul1 .li1 {
    margin-left: 0px !important;
    min-height: 40px;
  }
  .botao-areadoaluno {
    margin-right: 0px !important;
    border: none !important ;
    background-color: #143d59 !important;
    width: 40px !important;
  }
  #app > div > div:nth-child(1) > div > button > div:nth-child(1) > img {
    width: 40px !important;
    margin-right: 0px !important;
  }
  .botao-areadoaluno div span {
    display: none;
  }
}
.area-login-link {
  padding: 15px;
}
.area-login-link ul li {
  display: flex;
  align-items: center;
  transition: 0s all;
  height: 40px;
}

.area-login-link ul li:hover {
  background: #143d59;
  color: #fff;
  border-radius: 5px;
  transition: 0.5s all;
}
.area-login-link ul li div {
  background-color: rgb(20, 61, 89);
  height: 30px;
  width: 30px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.area-login {
  position: absolute;
  top: 55px;
  right: 0px;
  width: 270px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #143d59;
  box-sizing: border-box;
}

.area-login .info-p {
  background-color: #143d59;
  min-height: 110px;
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  color: #fff;
  position: relative;
  top: 0;
  box-sizing: border-box;
  border-radius: 3px 3px 0px 0px;
  padding: 15px;
}
.area-login .info-p .maisinfo-p {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

/* */
.rotate-arrow.hover {
  transform: rotate(180deg);
}
.li.cursos {
  display: flex;
  align-items: center;
}
.rotate-arrow {
  transition: transform 0.2s ease-in-out;
  justify-content: center;
}
.cursos-por-area {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  cursor: pointer;
  color: #313131;
}

.cursos-por-area .li {
  line-height: 40px;
  display: block;
  text-decoration: underline;
}

.area-curso {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
/* hover tudo abaixo  */
.li {
  line-height: 40px;
  text-align: center;
  display: block;
  justify-content: space-between;
}
.ul .li {
  justify-content: center;
}
.li .ul {
  display: flex;
  opacity: 0;
  visibility: hidden;
  color: #143d59;
  width: 100%;
  position: absolute;
  top: 40px;
  left: 0;
  background-color: #fff;
  flex-direction: row;
  text-align: center;
  transition: opacity 0.3s ease-in-out, visibility 0s linear 0.3s;
}
.ul .li .ul .li {
  margin: 0px;
  padding: 0px;
  display: block;
  transition: max-height 0.5s ease-in-out;
}
.li:hover {
  transition: max-height 0.5s ease-in-out;
}

.li:hover .ul {
  opacity: 1;
  visibility: visible;
  transition: opacity 0.3s ease-in-out;
  z-index: 9999;
}
.ul {
  display: flex;
  color: #143d59;
  width: 100%;
  position: absolute;
  left: 0;
  flex-direction: row;
  text-align: center;
}
/* hover tudo acima  */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 0 auto;
  color: white;
  width: 100%;
  min-height: 60px;
  background-color: #143d59;
  font-weight: 600;
  z-index: 9999;
  max-width: 1260px;
}
.ul1 {
  display: flex;
  justify-content: center;
  align-items: center;

  list-style: none;
}
.li1 {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.botao-areadoaluno {
  cursor: pointer;
  width: 180px;
  height: 30px;
  border: #fff;
  border-radius: 4px;
  color: #143d59;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
}
</style>
