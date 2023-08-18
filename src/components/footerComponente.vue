<template>
  <div style="padding: 50px; background-color: #313131">
    <footer class="pai">
      <div class="imagem">
        <img style="margin-bottom: 60px" src="../assets/logo_preto_lefisc.svg" />
      </div>
      <div class="opcoes">
        <div class="primeiro">
          <ul class="area-opcoes-details">
            <li class="li-grande">CURSOS</li>
            <li style="margin-top: 12px">Cursos EAD</li>
            <li class="li-cursos">Cursos Presenciais</li>
            <li class="li-cursos">Cursos In Company</li>
            <li class="li-grande" style="margin-top: 12px">LIVES E EVENTOS</li>
            <li class="li-grande">CONHEÇA OS INSTRUTORES</li>
            <li class="li-grande">PONTUAÇÃO EPC</li>
            <li class="li-grande">PORTAL LEFISC</li>
          </ul>
        </div>
        <div class="segundo">
          <ul class="area-opcoes-details">
            <li class="li-grande">FALE CONOSCO</li>
            <li style="margin-top: 12px">WhatsApp:</li>
            <li class="">(51) 993166069</li>
            <li class="">(51) 995101164</li>
            <li style="margin-top: 12px">Telefone:</li>
            <li class="">(51) 3373-0017</li>
            <li style="margin-top: 12px">Email:</li>
            <li class="">ead@lefisc.com.br</li>
            <li style="margin-bottom: 15px">cursos@lefisc.com.br</li>
          </ul>
        </div>
        <div class="terceiro terceiro-wi">
          <p class="li-grande">
            QUER RECEBER NOSSA AGENDA DE CURSOS?<br />CADASTRE SEU E-MAIL!
          </p>
          <input type="email" class="input" />
        </div>
      </div>
    </footer>
    <p style="text-align: center; color: #fff; margin-top: 10px">
      Copyright LEFISC - Legislaço Fiscal - Todos os Direitos Reservados
    </p>
  </div>
</template>

<script>
export default {



};
</script>

<style>
.input {
  margin-top: 4px;
  width: 100%;
  border-radius: 4px;
  border: none;
  border: 1px solid #fff;
  height: 40px;
}
.li-cursos {
  text-decoration: underline;
  margin-top: 3px;
}
.li-grande {
  margin-top: 3px;
  text-decoration: none;
  font-weight: 700;
  font-size: 18px;
}
li {
  list-style: none;
}

.opcoes {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0 auto;
  flex-wrap: wrap;
}
.primeiro,
.segundo,
.terceiro {
  color: #fff;
  flex: 1;
}
.imagem {
  margin-bottom: 30px;
  border-bottom: 1px solid #fff;
}

.pai {
  background-color: #313131;
  width: 100%;
  margin: 0 auto;

  bottom: 0;
}
</style>
