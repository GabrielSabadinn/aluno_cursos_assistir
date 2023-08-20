<template>
  <div>
    <div style="padding: 20px; background-color: #eeeeee">
      <div class="div-menu">
        <h1 style="display: flex; font-size: 30px; align-items: center">
          <img style="width: 60px; margin-right: 10px" src="../assets/chapie-icon.svg" />
          Meus Cursos
        </h1>
      </div>
      <div style="border: 1px solid #143d59"></div>
      <div style="margin-top: 20px; display: flex; gap: 20px">
        <button class="botao-cursso">
          <img src="../assets/play-icon-cursos.svg" style="margin-right: 5px" />
          Ao Vivo
        </button>
        <button class="botao-cursso">
          <img src="../assets/video-camera.svg" style="margin-right: 5px" />
          Gravado
        </button>
      </div>
      <div>
        <cardCursosComponente></cardCursosComponente>
      </div>
    </div>
  </div>
</template>

<script>
import cardCursosComponente from "../components/cardCursosComponente.vue";
export default {
  components: {
    cardCursosComponente,
  },
};
</script>

<style scoped>
.botao-cursso {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: #143d59;
  color: #fff;
  font-weight: 600;
  border-radius: 25px;
  width: 120px;
  height: 40px;
}
</style>
