<template>
  <div class="pai-video-cursos">
    <div>
      <div
        ref="vimeoPlayerContainer"
        class="video-container"
        style="background-color: #313131"
      ></div>
    </div>
    <div style="padding: 30px">
      <div class="curso-nome">
        <p>
          <span style="color: #143d59; font-weight: 600">curso:</span>
          DCTFWEB e PER DCOMPWEB: APURAÇÃO DOS ENCARGOS PREVIDENCIÁRIOS, COMPENSAÇÕES,
          RESTITUIÇÕES E REEMBOLSO 08/09/2022
        </p>
      </div>
      <div class="options-selecionaveis">
        <div
          :class="{ active: selectedContent === 'capitulos' }"
          @click="selectedContent = 'capitulos'"
        >
          <p class="options--video">Capítulos</p>
        </div>
        <div
          :class="{ active: selectedContent === 'perguntas' }"
          @click="selectedContent = 'perguntas'"
        >
          <p class="options--video">Perguntas</p>
        </div>
        <div
          :class="{ active: selectedContent === 'avaliarcurso' }"
          @click="selectedContent = 'avaliarcurso'"
        >
          <p class="options--video">Avaliar Curso</p>
        </div>
      </div>
    </div>

    <div style="background-color: #eee">
      <div style="padding: 30px">
        <div v-if="selectedContent === 'capitulos'" class="conteudo-capitulos">
          <h2 style="font-size: 18px; margin-bottom: 10px; color: #313131">
            Selecione o módulo que deseja.
          </h2>
          <select
            v-model="selectedModule"
            @change="getModuloSelecionado(selectedModule)"
            class="select-dropdown"
          >
            <option value="" disabled selected>Módulos:</option>
            <option v-for="module in modules" :key="module.modulo" :value="module.modulo">
              {{ module.modulo }}
            </option>
          </select>
          <div
            v-for="module in modulesFiltro"
            :key="module.uri"
            class="conteudo-capitulos-numer2"
          >
            <img
              src="../assets/play-icon-capitulos.svg"
              style="cursor: pointer"
              @click="playVideo(module.uri)"
            />
            <p style="margin-left: 10px; color: #313131; font-weight: 600">
              {{ module.nome }}
            </p>
            <p class="tempo-video">{{ formatarDuracao(module.duracao) }}</p>
          </div>
        </div>

        <div v-if="selectedContent === 'perguntas'" class="conteudo-perguntas">
          <div style="padding: 30px">
            <h1 style="font-size: 18px; color: #143d59">
              Envie sua dúvida para o instrutor do curso. <br />
              <span style="font-weight: 400"
                >Sua pergunta será respondida via e-mail</span
              >
            </h1>
            <div class="form-container">
              <form action="enviar.php" method="POST" class="contact-form">
                <div
                  style="
                    position: relative;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 9px;
                  "
                >
                  <img
                    src="../assets/user-form.svg"
                    style="width: 25px; position: absolute; bottom: 7px; left: 7px"
                  />
                  <label for="nome" class="form-label" style="margin-top: 20px"
                    >Nome</label
                  >
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    class="form-input"
                    required
                    placeholder="Digite Seu Nome"
                  />
                </div>
                <div
                  style="
                    position: relative;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 9px;
                  "
                >
                  <img
                    src="../assets/Email.svg"
                    style="width: 25px; position: absolute; bottom: 7px; left: 7px"
                  />
                  <label for="email" class="form-label">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="form-input"
                    required
                    placeholder="Digite Seu E-mail"
                  />
                </div>
                <label for="mensagem" class="form-label">Digite sua dúvida..</label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  style="height: 99px"
                  rows="4"
                  class="form-input-textarea"
                  required
                  placeholder="Digite Sua Mensagem"
                ></textarea>
                <button type="submit" class="form-submit-button">Enviar</button>
              </form>
            </div>
          </div>
        </div>

        <div v-if="selectedContent === 'avaliarcurso'" class="conteudo-avaliarcurso">
          <div style="padding: 30px">
            <div class="form-container">
              <form action="enviar.php" method="POST" class="contact-form">
                <div
                  style="
                    position: relative;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 9px;
                  "
                >
                  <img
                    src="../assets/user-form.svg"
                    style="width: 25px; position: absolute; bottom: 7px; left: 7px"
                  />
                  <label for="nome" class="form-label" style="margin-top: 20px"
                    >Nome</label
                  >
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    class="form-input"
                    required
                    placeholder="Digite Seu Nome"
                  />
                </div>
                <div
                  style="
                    position: relative;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 9px;
                  "
                >
                  <img
                    src="../assets/Email.svg"
                    style="width: 25px; position: absolute; bottom: 7px; left: 7px"
                  />
                  <label for="email" class="form-label">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="form-input"
                    required
                    placeholder="Digite Seu E-mail"
                  />
                </div>
                <p style="font-size: 14px"><strong> Avalie sua experiência.</strong></p>
                <star-rating
                  @update:rating="rating = $event"
                  text-class="custom-text"
                  :rtl="false"
                  :active-color="'#E59819'"
                  :show-rating="false"
                  :inline="true"
                  :star-size="20"
                  :rating="rating"
                ></star-rating>
                <label for="mensagem" class="form-label"
                  >Caso queira, deixe um comentário sobre o curso.</label
                >
                <textarea
                  id="mensagem"
                  name="mensagem"
                  style="height: 99px"
                  rows="4"
                  class="form-input-textarea"
                  required
                  placeholder="Digite Sua Mensagem"
                ></textarea>
                <button type="submit" class="form-submit-button">Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VimeoPlayer from "@vimeo/player";
import StarRating from "vue-star-rating";
import axios from "axios";

export default {
  components: {
    StarRating,
  },
  data() {
    return {
      selectedModuleVideo: null,
      selectModulo: "",
      selectedContent: "capitulos",
      capituloOrdenado: "",
      tempoDeVideo: "",
      rating: "0",
      selectedModule: "",
      modules: [],
      modulesFiltro: [],
      vimeoPlayer: null,
      videos: [],
      selectedVideo: "",
    };
  },
  methods: {
    async playVideo(uri) {
      const videoId = uri.split("/").pop();

      if (this.vimeoPlayer) {
        await this.vimeoPlayer.destroy();
      }

      this.vimeoPlayer = new VimeoPlayer(this.$refs.vimeoPlayerContainer, {
        id: videoId,
        autoplay: true,
        playsinline: true,
      });

      this.vimeoPlayer.on("canPlay", async () => {
        console.log(`Player is ready. Playing video with ID: ${videoId}`);
        await this.vimeoPlayer.play();
      });
    },

    async loadVimeoPlayer(videoId) {
      if (this.vimeoPlayer) {
        await this.vimeoPlayer.destroy();
      }

      this.vimeoPlayer = new VimeoPlayer(this.$refs.vimeoPlayerContainer, {
        id: videoId,
        autoplay: true,
      });

      this.vimeoPlayer.on("canPlay", async () => {
        console.log(`Player is ready. Playing video with ID: ${videoId}`);
        await this.vimeoPlayer.play();
      });
    },

    getModuloSelecionado(selectedModule) {
      const selectedModuleData = this.modules.find(
        (module) => module.modulo === selectedModule
      );
      if (selectedModuleData) {
        this.modulesFiltro = selectedModuleData.videos;
      } else {
        this.modulesFiltro = [];
      }
    },

    setModule(module) {
      this.selectedModule = module;
      this.capituloOrdenado = module.nome;
      this.tempoDeVideo = this.formatarDuracao(module.duracao);
    },

    formatarDuracao(duracao) {
      const minutos = Math.floor(duracao / 60);
      const segundos = duracao % 60;
      return `${minutos}m ${segundos}s`;
    },
    async pegarModulo() {
      this.loadSelectedVideo();
    },
    async loadVideos() {
      try {
        const response = await axios.get(
          "https://www.cursoslefisc.com.br/api/vimeo/videos/3201"
        );
        console.log("API Response:", response.data);
        this.modules = response.data;
        this.$emit("enviarModuloSelecionado", this.selectedModule);
        this.videos = this.getVideosByModule(this.selectedModule);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    },

    async loadSelectedVideo() {
      if (this.selectedVideo) {
        const videoId = this.selectedVideo.split("/").pop();
        await this.loadVimeoPlayer(videoId);
      }
    },

    getVideosByModule(module) {
      const selectedModule = this.modules.find((m) => m.modulo === module);
      return selectedModule ? selectedModule.videos : [];
    },
  },

  async mounted() {
    await this.loadVideos();
    this.$emit("enviarModulosPai", this.modules);
  },
  beforeUnmount() {
    if (this.vimeoPlayer) {
      this.vimeoPlayer.unload();
    }
  },
};
</script>
<style>
iframe {
  width: 1206px;
  height: 640px;
}
.video-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.select-dropdown {
  border-radius: 10px;
  width: 200px;
  height: 40px;
  text-align: center;
  position: relative;
  display: inline-block;
}

.select-dropdown select {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.select-dropdown::after {
  content: "\25BE";
  font-size: 14px;
  position: absolute;
  bottom: 50%;
  right: 10px;
  transform: translateY(50%);
  pointer-events: none;
}

.tempo-video {
  margin-left: auto;
}

.conteudo-capitulos-numer2 {
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 2px solid #c0c0c0;
  padding: 10px;
}

.options-selecionaveis {
  display: flex;
  margin-top: 20px;
}

.options-selecionaveis div {
  margin-right: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  border-bottom: 2px solid #143d59;
  cursor: pointer;
}

.options-selecionaveis div.active {
  border-bottom: 4px solid #143d59;
}

.options--video {
  font-size: 19px;
  cursor: pointer;
  font-weight: 300;
}

.options-selecionaveis div.active .options--video {
  font-weight: 600;
}

.curso-nome {
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 30px;
  border: 2px solid #143d59;
  background: #eee;
  padding: 10px;
  box-sizing: border-box;
}
.curso-nome p {
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  margin: 0;
}

.vimeo-player-container {
  width: 100%;
  height: 0;
  padding-bottom: 80%;
  position: relative;
}

.vimeo-player-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
