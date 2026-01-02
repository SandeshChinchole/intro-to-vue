const app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    image: "./assets/vmSocks-green-onWhite.jpeg",
    inStock: true,
    details: ["80% cotton", "20% polyester", "Affordable", "Soft", "Durable"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: "./assets/vmSocks-green-onWhite.jpeg",
        size: [
          { size: "Small", cost: "$10" },
          { size: "Medium", cost: "$20" },
          { size: "Large", cost: "$30" },
        ],
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: "./assets/vmSocks-blue-onWhite.jpeg",
        size: [
          { size: "Small", cost: "$10" },
          { size: "Medium", cost: "$20" },
        ],
      },
    ],
    shipping: ["USA", "International"],
    paymentOptions: ["Credit card", "Debit card", "PayPal"],
    cart: 0,
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateProduct(variantImage) {
      this.image = variantImage;
    },
  },
});
