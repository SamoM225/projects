import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import gameData from '../assets/product_data.json'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    gameData: gameData,
    cart: [] as { id: number, name: string, price: number, quantity: number }[],
  }),

  actions: {
    addItemToCart(item: { name: string, price: number }) {
      const existingItem = this.cart.find(cartItem => cartItem.name === item.name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        this.cart.push({
          id: this.cart.length + 1,
          name: item.name,
          price: item.price,
          quantity: 1
        });
      }
    },
    removeItemFromCart(item: { id: number}){
      this.cart = this.cart.filter(cartItem => cartItem.id !== item.id);
    }
  },

  getters: {
    getGamePicture: (state) => (name: string) => state.gameData.find((game) => game.name === name)?.image,
    getGameDescription: (state) => (name: string) => state.gameData.find((game) => game.name === name)?.description,
    getGameName: (state) => (name: string) => state.gameData.find((game) => game.name === name)?.displayName,
    getGamePrice: (state) => (name: string) => state.gameData.find((game) => game.name === name)?.price,
    getCart: (state) => state.cart,
    getTotalPrice: (state) => state.cart.reduce((total, item) => total + item.price * item.quantity, 0),
  },

})

