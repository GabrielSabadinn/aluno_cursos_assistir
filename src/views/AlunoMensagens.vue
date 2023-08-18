<template>
  <div>
    <div style="padding: 20px; background-color: #eeeeee;">
      <div class="div-paaia">
        <h1 style="display: flex; font-size: 30px; align-items: center;">
          <img style="width: 60px; margin-right: 10px;" src="../assets/lampada.svg" /> Mensagens
        </h1>
      </div>
      <div style="border: 1px solid #143d59;"></div>
      <div style="padding: 30px;">
        <h1 style="font-size: 22px; color:#143d59;">Está tendo problemas ou quer tirar dúvidas? <br> Deixe sua mensagem:</h1>
        <div class="form-container">
          <form action="enviar.php" method="POST" class="contact-form">
          <div style="position: relative; width:100%; display:flex; flex-direction: column; margin-bottom: 9px;">
          <img src="../assets/user-form.svg" style="width: 25px; position:absolute;bottom:7px;left:7px;">
            <label for="nome" class="form-label" style="margin-top: 20px;">Nome</label>
            <input type="text" id="nome" name="nome" class="form-input" required placeholder="Digite Seu Nome">
          </div>
          <div style="position: relative; width:100%; display:flex; flex-direction: column; margin-bottom: 9px;">
            <img src="../assets/Email.svg" style="width: 25px; position:absolute;bottom:7px;left:7px;">
            <label for="email" class="form-label">E-mail</label>
            <input type="email" id="email" name="email" class="form-input" required placeholder="Digite Seu E-mail">
</div>
            <label for="mensagem" class="form-label">Mensagem</label>
            <textarea id="mensagem" name="mensagem" style="height: 99px;" rows="4" class="form-input-textarea" required placeholder="Digite Sua Mensagem"></textarea>

            <button type="submit" class="form-submit-button">Enviar</button>
          </form>
        </div>
      </div>
      <div style="padding: 30px;">
        <div class="div-paaia">
        <h1 style="display: flex; font-size: 30px; align-items: center; ">
        Mensagens Respondidas
        </h1>
        <div style="border: 1px solid #143d59; margin-top: 10px;"></div>
      </div>
          <table class="table">
            <tr v-for="purchase in purchases" :key="purchase.id">
              <td style="text-decoration: underline;">
                <img :src="purchase.image" style="margin-right: 20px;" alt="">{{ purchase.course }}</td>
              <td>{{ purchase.date }}</td>
              <td style="justify-content: flex-end; text-align: end;">
                <a :href="generateReceiptLink(purchase.id)">Abrir</a>
              </td>
            </tr>
            <tr v-for="purchase in purchases" :key="purchase.id">
              <td style="text-decoration: underline;">
                <img :src="purchase.image" style="margin-right: 20px;" alt="">{{ purchase.course }}</td>
              <td>{{ purchase.date }}</td>
              <td style="justify-content: flex-end; text-align: end;">
                <a :href="generateReceiptLink(purchase.id)">Abrir</a>
              </td>
            </tr>
            <tr v-for="purchase in purchases" :key="purchase.id">
              <td style="text-decoration: underline;">
                <img :src="purchase.image" style="margin-right: 20px;" alt="">{{ purchase.course }}</td>
              <td>{{ purchase.date }}</td>
              <td style="justify-content: flex-end; text-align: end;">
                <a :href="generateReceiptLink(purchase.id)">Abrir</a>
              </td>
            </tr>
          </table>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      purchases: [
        {
          id: 1,
          course: "Compensação Cruzada (após a DCTFWEB) Como compensar débitos Fazendários x Créditos Previdenciários",
          date: "4 de março de 2023",
          image: require('../assets/email-icn-mensagens.svg'),
        },
      ],
    };
  },
  methods: {
    generateReceiptLink(id) {
     
      return "#receipt/" + id;
    },
  },
};
</script>

<style lang="css">
.p-form{
  color: #143d59;
  font-weight: 600;
}
.form-input::placeholder {
    color: #1a74b1; 

}
.form-input{
  padding-left: 38px;

}
.form-input:focus {
    border-color: #1a74b1; 
}

.form-container {
    width: 400px;
    border-radius: 8px;
    
    font-family: Arial, sans-serif;
}


.contact-form {
    display: flex;
    flex-direction: column;
}

.form-label {
    margin-bottom: 4px;
    font-weight: bold;
    font-size: 14px;
}
.form-input-textarea:focus {
    border-color: #1a74b1; 
}
.form-input-textarea::placeholder {
    color: #1a74b1; 
  padding-left: 10px;
}

.form-input-textarea{
  height: 40px;
    border: 1px solid #ccc;
    border-radius: 8px;
    transition: border-color 0.3s ease; 
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
}
.form-input {
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 8px;
    transition: border-color 0.3s ease; 
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
}

.form-submit-button {
    background-color: #143d59;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    max-width: 120px;
    margin-top: 10px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    
}

.form-submit-button:hover {
    background-color: #1a74b1
}

.div-paaia {
  color: #143d59;
  margin-bottom: 20px;
  font-size: 24px;
}

td img {
    vertical-align: middle; 
    margin-right: 10px;
}
.table {
    border-collapse: collapse;
    width: 100%;
    color: #313131;
    background-color: #eeeeee;
}

th {
    border: none;
    border-bottom: 2px solid #143d59;
    padding: 8px;
    text-align: left; 
    background-color: #eeeeee;
    color: #313131;
    font-weight: 700;
}

td {
    font-weight: 5400;
    border: none;
    border-bottom: 1px solid #143d59;
    padding: 8px;
    text-align: left; 
    color: #313131;
    font-weight: 500;

}


.div-menu {
    color: #143d59;
    margin-bottom: 20px;
    font-size: 24px;
}


a {
    display: inline-block;
    padding: 8px 16px;
    background-color: #143d59;
    color: #ffffff;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.3s ease;
}

a:hover {
    background-color: #0c2c3f;
}
</style>
