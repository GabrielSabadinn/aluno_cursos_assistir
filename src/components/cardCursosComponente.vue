<template>
  <div style="display: flex; justify-content: space-between; flex-wrap: wrap">
    <div class="retangulo">
      <div style="padding: 20px">
        <div class="nome">
          <p>
            Compensação Cruzada (após a DCTFWEB) Como compensar débitos Fazendários x
            Créditos Previdenciários
          </p>
        </div>
        <div class="info">
          <div style="margin-top: 12px; display: flex; flex-direction: column">
            <div>
              <div
                style="
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  position: relative;
                "
              >
                <div style="display: flex; align-items: center; margin-bottom: 10px">
                  <p
                    style="
                      margin-right: 6px;
                      color: rgb(229, 152, 25);
                      font-weight: bold;
                      font-size: 16px;
                    "
                  >
                    {{ rating }}
                  </p>
                  <star-rating
                    @update:rating="rating = $event"
                    text-class="custom-text"
                    :rtl="false"
                    :active-color="'#E59819'"
                    :show-rating="false"
                    :inline="true"
                    :star-size="20"
                    :read-only="true"
                    :increment="0.5"
                    :rating="1.5"
                  ></star-rating>
                  <p style="font-size: 10px; margin-left: 5px">(Deixe sua avaliação)</p>
                </div>
              </div>
            </div>
            <div class="maisinfo-card">
              <span
                style="
                  margin-right: 6px;
                  color: #ff822e;
                  font-weight: bold;
                  font-size: 16px;
                "
                >Expira em: 29 de fevereiro</span
              >
              <span>Carga horária: <strong>4 horas/aula</strong></span>
              <span>Modalidade: <strong>EAD Gravado </strong> </span>
              <span>Instrutor: <strong>Maria Ilene Imlau Winter</strong></span>
              <div class="progress-bar-container">
                <div class="progress-text">{{ progressValue }}% assistido</div>
                <div class="progress-bar">
                  <div
                    class="progress-value"
                    :style="{ width: progressValue + '%' }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <button class="botao-preco">
            <img style="margin-right: 5px" src="../assets/play-icon-red.svg" />ASSISTIR
          </button>
        </div>
      </div>
    </div>
    <div class="retangulo">
      <div style="padding: 20px">
        <div class="nome">
          <p>
            Compensação Cruzada (após a DCTFWEB) Como compensar débitos Fazendários x
            Créditos Previdenciários
          </p>
        </div>
        <div class="info">
          <div style="margin-top: 12px; display: flex; flex-direction: column">
            <div>
              <div
                style="
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  position: relative;
                "
              >
                <div style="display: flex; align-items: center; margin-bottom: 10px">
                  <p
                    style="
                      margin-right: 6px;
                      color: rgb(229, 152, 25);
                      font-weight: bold;
                      font-size: 16px;
                    "
                  >
                    {{ rating }}
                  </p>
                  <star-rating
                    @update:rating="rating = $event"
                    text-class="custom-text"
                    :rtl="false"
                    :active-color="'#E59819'"
                    :show-rating="false"
                    :inline="true"
                    :star-size="20"
                    :read-only="true"
                    :increment="0.5"
                    :rating="1.5"
                  ></star-rating>
                  <p style="font-size: 10px; margin-left: 5px">(Deixe sua avaliação)</p>
                </div>
              </div>
            </div>
            <div class="maisinfo-card">
              <span
                style="
                  margin-right: 6px;
                  color: #ff822e;
                  font-weight: bold;
                  font-size: 16px;
                "
                >Expira em: 29 de fevereiro</span
              >
              <span>Carga horária: <strong>4 horas/aula</strong></span>
              <span>Modalidade: <strong>EAD Gravado </strong> </span>
              <span>Instrutor: <strong>Maria Ilene Imlau Winter</strong></span>
              <div class="progress-bar-container">
                <div class="progress-text">{{ progressValue }}% assistido</div>
                <div class="progress-bar">
                  <div
                    class="progress-value"
                    :style="{ width: progressValue + '%' }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <button class="botao--foigravado">
            <img style="margin-right: 5px" src="../assets/play-icon-cinza.svg" />29/02
          </button>
        </div>
      </div>
    </div>
    <div class="retangulo">
      <div style="padding: 20px">
        <div class="nome">
          <p>
            Compensação Cruzada (após a DCTFWEB) Como compensar débitos Fazendários x
            Créditos Previdenciários
          </p>
        </div>
        <div class="info">
          <div style="margin-top: 12px; display: flex; flex-direction: column">
            <div>
              <div
                style="
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  position: relative;
                "
              >
                <div style="display: flex; align-items: center; margin-bottom: 10px">
                  <p
                    style="
                      margin-right: 6px;
                      color: rgb(229, 152, 25);
                      font-weight: bold;
                      font-size: 16px;
                    "
                  >
                    {{ rating }}
                  </p>
                  <star-rating
                    @update:rating="rating = $event"
                    text-class="custom-text"
                    :rtl="false"
                    :active-color="'#E59819'"
                    :show-rating="false"
                    :inline="true"
                    :star-size="20"
                    :read-only="true"
                    :increment="0.5"
                    :rating="1.5"
                  ></star-rating>
                  <p style="font-size: 10px; margin-left: 5px">(Deixe sua avaliação)</p>
                </div>
              </div>
            </div>
            <div class="maisinfo-card">
              <span
                style="
                  margin-right: 6px;
                  color: #ff822e;
                  font-weight: bold;
                  font-size: 16px;
                "
                >Expira em: 29 de fevereiro</span
              >
              <span>Carga horária: <strong>4 horas/aula</strong></span>
              <span>Modalidade: <strong>EAD Gravado </strong> </span>
              <span>Instrutor: <strong>Maria Ilene Imlau Winter</strong></span>
              <div class="progress-bar-container">
                <div class="progress-text">{{ progressValue }}% assistido</div>
                <div class="progress-bar">
                  <div
                    class="progress-value"
                    :style="{ width: progressValue + '%' }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <button class="botao--foigravado">
            <img style="margin-right: 5px" src="../assets/play-icon-cinza.svg" />29/02
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
export default {
  components: {
    StarRating,
  },
  data() {
    return {
      rating: "1.5",
      progressValue: 50,
    };
  },
};
</script>

<style>
.botao--foigravado {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: #313131;
  color: #fff;
  font-weight: 600;
  border-radius: 25px;
  width: 120px;
  height: 33px;
  margin-top: 10px;
  cursor: pointer;
}
.progress-bar-container {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.progress-text {
  color: #ff822e;
  font-size: 14px;
  font-weight: 400;
  margin-right: 10px;
}

.progress-bar {
  flex: 1;
  height: 10px;
  background-color: #ddd;
  border-radius: 5px;
  overflow: hidden;
}

.progress-value {
  height: 100%;
  background-color: #ff822e;
}
.botao-preco:hover {
  background-color: #941a1c;
}
.custom-text {
  color: #e59819;
  font-weight: 700;
}

.botao-preco {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: #af3437;
  color: #fff;
  font-weight: 600;
  border-radius: 25px;
  width: 120px;
  height: 33px;
  margin-top: 10px;
  cursor: pointer;
}

.info {
  border-top: 1px solid #000;
  margin-top: 0px;
  font-size: 14px;

  color: #313131;
}

.info .maisinfo-card span {
  margin-bottom: 6px;
  display: block;
}

.nome {
  font-size: 18px;
  color: #143d59;
  border-radius: 8px;
  font-weight: bold;
  min-height: 80px;
}

.retangulo {
  width: 902px;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 8px;
  margin-bottom: 10px;
  border-bottom: 20px solid #e59819;
  margin-top: 20px;
  margin-right: 20px;
}

.titulo {
  text-decoration: underline;
  color: #fff;
  font-size: 24px;
  font-weight: 600;
}

.botoes-topo {
  margin-top: 25px;
  display: flex;
  cursor: pointer;
  justify-content: space-around;
  color: #fff;
  font-weight: 600;
  align-items: center;
  width: 100px;
  border: none;
  border: 1px solid #313131;
  background-color: #999999;
  border-radius: 6px;
  height: 30px;
  margin-bottom: 25px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
}

.botoes-topodiv {
  display: flex;
  flex-direction: row;
}

.proximo-cursos--pai {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1260px;
  margin: 0 auto;
  padding: 20px;
}
</style>
