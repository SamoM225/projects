import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import gameData from '../assets/product_data.json'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    gameData: gameData,
  }),

  actions: {
  },

  getters: {
    getGamePicutre: () => (name: string) => `/src/icons/${name}.jpg`,
    getGameDescription: (state) => (name: string) => state.gameData.find((game) => game.name === name)?.description,
    getGameName: (state) => (name: string) => state.gameData.find((game) => game.name === name)?.displayName,
    getGamePrice: (state) => (name: string) => state.gameData.find((game) => game.name === name)?.price,
  },

})

