import { defineStore } from 'pinia'
import facilitiesData from '@/data/facilities.json'

export const useFacilitiesStore = defineStore('facilities', {
  state: () => ({
    facilities: facilitiesData,
  }),

  getters: {
    categories(state) {
      const set = new Set(state.facilities.map((f) => f.category))
      return Array.from(set).sort((a, b) => a.localeCompare(b))
    },
    indoorCount(state) {
      return state.facilities.filter((f) => f.indoor).length
    },
  },
  
  actions: {
    getById(id) {
      return this.facilities.find((f) => f.id === id) || null
    },
  },
})
