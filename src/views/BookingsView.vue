<template>
  <div>
    <div class="d-flex flex-column flex-md-row align-items-md-end justify-content-between gap-3 mb-4">
      <div>
        <h1 class="h3 text-white mb-1">Bookings</h1>
      </div>
      <div class="d-flex flex-wrap gap-2">
        <RouterLink to="/facilities" class="btn btn-outline-light">Create new booking</RouterLink>
        <BaseButton v-if="bookingsStore.total" variant="danger" outline @click="clearAll">
          Clear all
        </BaseButton>
      </div>
    </div>

    <div class="p-4 rounded-4 sfr-card text-white">
      <div class="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-2 mb-3">
        <div class="fw-semibold">Your upcoming bookings</div>
        <div class="small text-white-50">Total: {{ bookingsStore.total }}</div>
      </div>

      <BookingTable :bookings="bookingsStore.upcoming" :facilitiesById="facilitiesById" @remove="remove" />
    </div>
  </div>
</template>s

<script>
import BaseButton from '@/components/BaseButton.vue'
import BookingTable from '@/components/BookingTable.vue'
import { useBookingsStore } from '@/stores/bookings'
import { useFacilitiesStore } from '@/stores/facilities'

export default {
  name: 'BookingsView',
  components: {
    BaseButton,
    BookingTable,
  },
  data() {
    return {
      bookingsStore: useBookingsStore(),
      facilitiesStore: useFacilitiesStore(),
    }
  },
  computed: {
    facilitiesById() {
      return Object.fromEntries(this.facilitiesStore.facilities.map((f) => [f.id, f]))
    },
  },
  created() {
    this.bookingsStore.loadBookings()
  },
  methods: {
    remove(bookingId) {
      this.bookingsStore.removeBooking(bookingId)
    },
    clearAll() {
      this.bookingsStore.clearAll()
    },
  },
}
</script>
