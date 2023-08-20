<template>
    <div id="app">
     
      <main class="main-container">
        <div class="carrinho-cursos">
          <h1 style="display: flex; justify-content: center; align-items: center;padding-bottom: 10px;">
            <div style="background-color: #143d59;border-radius: 100%;width: 45px;height: 45px;display: flex;align-items: center; justify-content: center;">
              <img  src="../assets/icon-shopping.svg" />
            </div>
            Carrinho de compras 
          </h1>
        </div>
        <div class="content">
          <section class="product-section">
            <table class="product-table">
              <thead>
                <tr>
                  <th class="table-heading">Produto</th>
                  <th class="table-heading">Modalidade</th>   
                  <th class="table-heading">Preço</th>    
                  <th class="table-heading">-</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(product, index) in getCursosCarrinho" :key="index" class="product-row">
                  <td>
                    <div class="product">
                      <div class="divImg" :style="{'background-color': product.categoria.id == 3 ? '#AF3437E0':  product.categoria.id == 4 ? '#E59819E5' : '#007900'}">
                        <img :src="product.imageUrl" alt="" class="product-image" />
                      </div>
                      <div class="product-info">
                        <div class="product-name">{{ product.nome }}</div>
                        <div class="product-category">{{ product.categoria.nome }}</div>
                      </div>
                    </div>
                  </td>
                  <td>{{ product.modalidade.nome }}</td>
                  <td class="product-price">{{ formatCurrency(product.valor) }}</td>                
                 
                  <td>
                    <button @click="removeProduct(index)" class="remove-button">
                      <i class="bx bx-x">X</i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
          <aside class="checkout-section">
            <div class="summary-box">
              <header class="box-header">Resumo da compra</header>
              <div class="summary-info">
                <div class="summary-item">
                  <span class="summary-label">Sub-total</span>
                  <span>{{ formatCurrency(subTotal) }}</span>
                </div>
                <div class="summary-item"></div>
                <div class="summary-item">
                  <button
                    @click="applyDiscount"
                    style="display: flex; flex-direction: column"
                    class="discount-button"
                  >
                    Adicionar cupom de desconto
                    <input
                      type="text"
                      style="border: none; margin-top: 4px;width: 100%;
      border-radius: 3px;border:1px solid"
                    />
                    <i class="bx bx-right-arrow-alt"></i>
                  </button>
                </div>
              </div>
              <footer class="box-footer">
                <span class="summary-label">Total</span>
                <span>{{ formatCurrency(total) }}</span>
              </footer>
            </div>
            
            <div id="wallet_container">
            <button @click="checkout" class="checkout-button">Finalizar Compra</button>
            <div id="wallet_container"></div>
          </div>
          </aside>
        </div>
      </main>
    </div>
  </template>
  <script>
  import {mapGetters} from 'vuex'
  
  import { loadMercadoPago } from "@mercadopago/sdk-js";
  import axios from 'axios'; 
  
  export default {
    data() {
      return {
        nomeusuario: "nome do usuario aqui",     
      };
    },
    async mounted(){
        await loadMercadoPago();
  const mp = new window.MercadoPago("TEST-24d3024d-79d9-41fb-91a8-135f16118956", {
    locale: "pt-BR",
  });
  mp.bricks().create("wallet", "wallet_container", {
     initialization: {
         preferenceId: "1190255145-479359f3-9025-4b4a-89d0-0d5ae1a0ebb2",
          
     },
  });
    },
    computed: {
      ...mapGetters(['getCursosCarrinho']),
      subTotal() {
        return this.getCursosCarrinho.reduce((acc, product) => acc + product.total, 0);
      },
      shippingCost() {
        return 0;
      },
      total() {
        return this.subTotal + this.shippingCost;
      },
    },
    methods: {
      
      formatCurrency(value) {
        return new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(value);
      },    
      decrementquantidade(index) {
        if (this.getCursosCarrinho[index].quantidade > 1) {
          this.getCursosCarrinho[index].quantidade--;
          this.updateTotal(index);
        }
      },
      updateTotal(index) {
        this.getCursosCarrinho[index].total =
          this.getCursosCarrinho[index].price * this.getCursosCarrinho[index].quantidade;
      },
      removeProduct(index) {
        this.getCursosCarrinho.splice(index, 1);
        localStorage.setItem('carrrinhoCurso',JSON.stringify(this.getCursosCarrinho))
        
      },
      applyDiscount() {
        // Implement the logic to apply discounts here.
      },
      async checkout() {
        const array  =JSON.parse(localStorage.getItem('carrrinhoCurso'))
        const list = []
        for(let a of  array){
          let {id} = a
          list.push(id)
        }
        if(list.length != 0){
            await axios.post('http://localhost:3000/api/pagamento/carrinho',list)
          .then(e=>console.log(e))
        }
      
      },
    },
  };
  </script>
  <style>
  
  .carrinho-cursos{
    color: #143d59;
    display: flex;
    border-bottom: 1px solid #143d59;
    margin-bottom: 20px;
  }
  .app-header {
    background: #111;
    color: white;
    font-size: 24px;
    padding: 20px 0;
    display: flex;
    justify-content: center;
  }
  
  .main-container {
    background: #fff;
    padding: 40px;
  }
  
  .page-title {
    font-size: 40px;
    padding: 50px 0;
    text-align: center;
  }
  
  .content {
    display: flex;
  }
  
  .product-section {
    flex: 1;
  }
  
  .product-table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .table-heading {
    text-align: left;
    padding-bottom: 10px;
    text-transform: uppercase;
    color: #666;
  }
  
  .product-row {
    border-bottom: 3px solid #eee;
  }
  
  .product {
    display: flex;
    align-items: center;
  }
  
  .product-image {
    border-radius: 6px;
  }
  
  .product-info {
    margin-left: 20px;
  }
  
  .product-name {
    font-size: 18px;
    font-weight: bold;
  }
  
  .product-category {
    color: #666;
  }
  
  .quantidade {
    background: #eee;
    display: inline-flex;
    padding: 0 0;
    justify-content: space-around;
    align-items: center;
    min-width: 60px;
    border-radius: 20px;
    overflow: hidden;
    height: 30px;
  }
  
  .quantidade span {
    margin: 0 10px;
  }
  
  .quantidade button {
    display: flex;
    align-items: center;
    background: transparent;
    border: 0;
    padding: 0 10px;
    font-size: 20px;
    height: 100%;
  }
  
  .quantidade button:hover {
    background: #ddd;
  }
  
  .remove-button {
    background: #eee;
    border: 0;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
  }
  
  .remove-button:hover {
    background: #ddd;
  }
  
  .checkout-section {
    min-width: 250px;
    margin-left: 30px;
  }
  
  .summary-box {
    margin-bottom: 15px;
    border: 1px solid #ccc;
    background: #eee;
    color: #222;
    border-radius: 5px;
  }
  
  .box-header {
    padding: 15px 20px;
    font-size: 18px;
    border-bottom: 1px solid #ccc;
  }
  
  .summary-info {
    padding: 20px;
    font-size: 16px;
  }
  
  .summary-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    color: #555;
  }
  
  .summary-item:last-child {
    margin: 0;
  }
  
  .discount-button {
    color: rgb(255, 159, 0);
    background: transparent;
    border: 0;
    display: flex;
    align-items: center;
    font-size: 16px;
  }
  
  .box-footer {
    padding: 15px 20px;
    background: #ddd;
    font-size: 18px;
    display: flex;
    justify-content: space-between;
  }
  
  .checkout-button {
    border: 0;
    padding: 15px 0;
    color: white;
    background: rgb(255, 159, 0);
    display: block;
    width: 100%;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    font-weight:bold
  }
  
  .checkout-button:hover {
    background: rgb(148, 93, 6);
  }
  </style>
  