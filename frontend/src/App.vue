<template>
  <div class="Title">
    <h1 class="title_desc">Pizza Factory &copy;</h1>
    <p class="intro_desc">
      Pizza au feu de bois, à la spécialité Italienne, de Façon Malagasy
    </p>
  </div>
  <br /><br />

  <div class="container">
    <!-- Colonne 1 : Image -->
    <div class="pizza-image">
      <img :src="pizzaImage" alt="Delicious Pizza" />
    </div>

    <!-- Colonne 2 : Détails de la pizza -->
    <div class="pizza-details">
      <h1 class="pizza-name">{{ pizzaName }} &circledast;</h1>
      <h2 class="price">€{{ unitPrice }}</h2>
      <p class="ingredients">Ingredients: {{ ingredients.join(", ") }}</p>
      <div class="buttons">
        <button @click="addOrder" id="purchase-button">Ajouter</button>
        <button @click="removeOrder" id="cancel-button">X</button>
      </div>
    </div>

    <!-- Colonne 3 : Table d'achat -->
    <div class="shopping-table">
      <table>
        <thead>
          <tr>
            <th>Commandes</th>
            <th>P.U</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ orderCount }}</td>
            <td>€{{ unitPrice }}</td>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                v-model="promoCode"
                placeholder="Enter code"
                class="promo-input"
              />
            </td>
            <td>
              <button
                @click="applyPromoCode"
                :class="[
                  'promo-button',
                  { 'promo-success': promoApplied },
                  { 'promo-Error': promoError },
                ]"
              >
                Code Promo
              </button>
            </td>
          </tr>
          <tr>
            <td>Total</td>
            <td>
              <div v-if="promoApplied">
                <span class="original-price"
                  >€{{ totalPriceWithoutPromo }}</span
                >
                <span class="discounted-price">€{{ totalPrice }}</span>
              </div>
              <div v-else>€{{ totalPrice }}</div>
            </td>
          </tr>
        </tbody>
      </table>
      <p v-if="promoError" class="error-message">{{ promoError }}</p>
      <p v-else class="success-message">{{ promoSuccess }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pizzaImage: "/pizza.jpeg",
      pizzaName: "Margherita",
      unitPrice: 15,
      ingredients: ["Tomato", "Mozzarella", "Bacon", "Olive"],
      orderCount: 0,
      promoCode: "",
      promoApplied: false,
      promoError: "",
      promoSuccess: "",
      discountPerOrder: 5, // Réduction 5€ par commande
    };
  },
  computed: {
    totalPriceWithoutPromo() {
      return this.orderCount * this.unitPrice;
    },
    totalPrice() {
      if (this.promoApplied) {
        return (
          this.totalPriceWithoutPromo - this.orderCount * this.discountPerOrder
        );
      }
      return this.totalPriceWithoutPromo;
    },
  },
  methods: {
    addOrder() {
      this.orderCount++;
    },
    removeOrder() {
      if (this.orderCount > 0) {
        this.orderCount--;
      }
    },
    applyPromoCode() {
      if (this.promoCode === "321") {
        this.promoApplied = true;
        this.promoSuccess = "Valide promo Code !";
      } else {
        this.promoApplied = false;
        this.promoError = "Invalid promo code !";
      }
    },
  },
};
</script>

<style scoped>
.title_desc,
.intro_desc {
  text-align: center;
}

.title_desc {
  font-size: 45px;
  background: linear-gradient(to right, red, rgb(197, 197, 1), orange, green);
  color: transparent;
  -webkit-background-clip: text;
}
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 90%;
  max-width: 1200px;
  background-color: white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
  padding: 20px;
  gap: 20px;
}

.pizza-image {
  flex: 1;
  text-align: center;
}

.pizza-image img {
  width: 350px;
  height: 250px;
}

.pizza-details {
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  padding: 20px;
}

.buttons {
  display: flex;
  gap: 10px; /* Espacement entre les boutons */
  margin-top: 20px;
}

#purchase-button {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
}

#cancel-button {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
}

#purchase-button:hover,
#cancel-button:hover {
  opacity: 0.9;
}

.promo-input {
  width: 100%; /* La largeur de l'input s'adapte à la cellule */
  padding: 5px;
  box-sizing: border-box;
}

.promo-button {
  width: 100%; /* La largeur du bouton s'adapte à la cellule */
  padding: 10px;
  color: black;
  background-color: #f0f0f0; /* Couleur de fond par défaut */
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.promo-button.promo-Error {
  background-color: red;
  color: white;
}

.promo-button.promo-success {
  background-color: #28a745; /* Couleur verte si le code promo est correct */
  color: white;
}

.promo-button:hover {
  opacity: 0.9;
}

.original-price {
  text-decoration: line-through;
  color: red;
  margin-right: 10px;
  opacity: 0.4;
}

.discounted-price {
  color: green;
  font-weight: bold;
}

.error-message {
  color: red;
  font-size: 0.9rem;
  margin-top: 10px;
}

.success-message {
  color: green;
  font-size: 0.9rem;
  margin-top: 10px;
}
</style>
