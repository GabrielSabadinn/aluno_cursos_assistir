<template lang="html">
  <div>
    <div style="padding: 20px; background-color: #eeeeee">
      <div class="div-menu">
        <h1 style="display: flex; font-size: 30px; align-items: center">
          <img
            style="width: 60px; margin-right: 10px"
            src="../assets/money.svg"
          />Histórico de Compra
        </h1>
      </div>
      <div style="border: 1px solid #143d59"></div>
      <div style="padding: 30px">
        <table class="table">
          <tr>
            <th>ㅤㅤㅤCurso</th>
            <th>Data da Compra</th>
            <th>Preço Total</th>
            <th>Tipo de Pagamento</th>
            <th>ㅤ</th>
          </tr>
          <tr v-for="purchase in purchases" :key="purchase.id">
            <td style="text-decoration: underline">
              <img :src="purchase.image" style="margin-right: 20px" alt="" />{{
                purchase.course
              }}
            </td>
            <td>{{ purchase.date }}</td>
            <td>R$ {{ purchase.price }}</td>
            <td>{{ purchase.paymentType }}</td>
            <td style="justify-content: flex-end; text-align: end">
              <a class="aaatag" :href="generateReceiptLink(purchase.id)">Gerar Recibo</a>
            </td>
          </tr>
          <tr v-for="purchase in purchases" :key="purchase.id">
            <td style="text-decoration: underline">
              <img :src="purchase.image" style="margin-right: 20px" alt="" />{{
                purchase.course
              }}
            </td>
            <td>{{ purchase.date }}</td>
            <td>R$ {{ purchase.price }}</td>
            <td>{{ purchase.paymentType }}</td>
            <td style="justify-content: flex-end; text-align: end">
              <a class="aaatag" :href="generateReceiptLink(purchase.id)">Gerar Recibo</a>
            </td>
          </tr>
          <tr v-for="purchase in purchases" :key="purchase.id">
            <td style="text-decoration: underline">
              <img :src="purchase.image" style="margin-right: 20px" alt="" />{{
                purchase.course
              }}
            </td>
            <td>{{ purchase.date }}</td>
            <td>R$ {{ purchase.price }}</td>
            <td>{{ purchase.paymentType }}</td>
            <td style="justify-content: flex-end; text-align: end">
              <a class="aaatag" :href="generateReceiptLink(purchase.id)">Gerar Recibo</a>
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
          course: "Compensação Fazendários x Previdenciários",
          date: "4 de março de 2023",
          price: "250,00",
          paymentType: "Cartão de Crédito",
          image: require("../assets/shopping-cart-blue.svg"),
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
<style>
td img {
  vertical-align: middle;
  margin-right: 10px;
}
.table {
  border-collapse: collapse;
  width: 100%;
  margin-top: 20px;
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

.aaatag {
  display: inline-block;
  padding: 8px 16px;
  background-color: #143d59;
  color: #ffffff;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.aaatag:hover {
  background-color: #0c2c3f;
}
</style>
