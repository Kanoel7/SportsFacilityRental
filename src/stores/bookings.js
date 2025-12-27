import { defineStore } from 'pinia'

export const useBookingsStore = defineStore('bookings', {
  state: () => ({
    bookings: [],
  }),

  getters: {
    total(state) {
      return state.bookings.length
    },
    upcoming(state) {
      const now = new Date()
      return state.bookings
        .filter((b) => new Date(`${b.date}T${b.time}`) >= now)
        .sort((a, b) => {
          const da = new Date(`${a.date}T${a.time}`).getTime()
          const db = new Date(`${b.date}T${b.time}`).getTime()
          return da - db
        })
    },
  },

  actions: {
   loadBookings() {
      const data = localStorage.getItem('bookings')
      if (data) {
        this.bookings = JSON.parse(data)
      }
    },

    saveBookings() {
      localStorage.setItem('bookings', JSON.stringify(this.bookings))
    },

    addBooking(booking) {
      const newBooking = {
        id: Date.now(),
        facilityId: booking.facilityId,
        date: booking.date,
        time: booking.time,
        durationHours: booking.durationHours,
        createdAt: new Date().toISOString()
      }
      this.bookings.push(newBooking)
      this.saveBookings()
    },

    removeBooking(bookingId) {
      this.bookings = this.bookings.filter((b) => b.id !== bookingId)
      this.saveBookings()
    },
    clearAll() {
      this.bookings = []
      this.saveBookings()
    },
  },
})
