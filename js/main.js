
const app = Vue.createApp({
    data: function () {
        return {
            cart: 0,
            brand: "VueJS",
            product: "Chaussettes",
            description: "Cette paire est composée de chaussettes Marines et Vertes dépareillées avec un design différent de chaque côté!, sur le pied gauche une feuille. Humour et originalité assurés sur ces chaussettes.",
            selectedVariant: 0,
            url: 'https://vuejs.org/',
            inventory: 100,
            onSale: true,
            details: ['50% coton', '30% laine', '20% polyester'],
            variants: [
                { id: 2001, color: "green", image: 'assets/images/socks_green.jpg', quantity: 50},
                { id: 2002, color: "blue", image: 'assets/images/socks_blue.jpg', quantity: 0}
            ],
            sizes: [39, 42, 43, 46],
            myStyle: {
                color:'red',
                fontSize: '56px'
            }
        }
    },
    methods: {
        addToCart() {
            this.cart += 1;
        },
        updateVariant(index) {
            this.selectedVariant = index;
            console.log(index);
        },
        removeFromCart() {
            this.cart -= 1;
        }
    },
    computed: {
        title() {
            return this.brand + " " + this.product;
        },
        image() {
            return this.variants[this.selectedVariant].image;
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity;
        },
        sale() {
            if (this.onSale) {
                return this.brand + " " + this.product + " est en vente";
            }
            return '';
        }
    }
});

app.mount("#app");

