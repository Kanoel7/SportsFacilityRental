<template>
  <div v-if="facility" class="text-white">
    <div class="d-flex flex-column flex-lg-row align-items-lg-end justify-content-between gap-3 mb-4">
      <div>
        <div class="text-white-50">{{ facility.category }} · {{ facility.location }}</div>
        <h1 class="display-6 fw-semibold mb-0">{{ facility.name }}</h1>
      </div>
      <div class="d-flex align-items-center gap-2">
        <span class="badge" :style="{ backgroundColor: facility.theme?.color || '#6c757d' }">
          {{ facility.theme?.badge || 'Facility' }}
        </span>
        <span class="badge" :class="facility.indoor ? 'text-bg-info' : 'text-bg-success'">
          {{ facility.indoor ? 'Indoor' : 'Outdoor' }}
        </span>
      </div>
    </div>

    <div class="row g-3">
      <div class="col-12 col-lg-7">
        <div class="p-4 rounded-4 sfr-card">
          <h2 class="h5 fw-semibold">Details</h2>
          <p class="text-white-50 mb-3">{{ facility.description }}</p>

          <div class="row g-3">
            <div class="col-6">
              <div class="p-3 rounded-3 sfr-panel">
                <div class="small text-white-50">Price</div>
                <div class="h4 mb-0">€{{ facility.pricePerHour }}/hour</div>
              </div>
            </div>
            <div class="col-6">
              <div class="p-3 rounded-3 sfr-panel">
                <div class="small text-white-50">Capacity</div>
                <div class="h4 mb-0">{{ facility.capacity }}</div>
              </div>
            </div>
          </div>

          <div class="mt-4">
            <h3 class="h6 fw-semibold">Amenities</h3>
            <div class="d-flex flex-wrap gap-2">
              <span v-for="a in facility.amenities" :key="a" class="badge text-bg-dark">{{ a }}</span>
            </div>
          </div>

          <div class="mt-4">
            <h3 class="h6 fw-semibold">Recommended for</h3>
            <ul class="text-white-50 mb-0">
              <li v-for="r in facility.recommendedFor" :key="r">{{ r }}</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col-12 col-lg-5">
        <div class="p-4 rounded-4 sfr-card">
          <h2 class="h5 fw-semibold">Create booking</h2>

          <form class="row g-3" @submit.prevent="submitBooking">
            <div class="col-12">
              <label class="form-label text-white-50">Date</label>
              <input v-model="form.date" class="form-control sfr-input" type="date" required />
            </div>
            <div class="col-12 col-md-6">
              <label class="form-label text-white-50">Start time</label>
              <input v-model="form.time" class="form-control sfr-input" type="time" required />
            </div>
            <div class="col-12 col-md-6">
              <label class="form-label text-white-50">Duration</label>
              <select v-model.number="form.durationHours" class="form-select form-control bg-dark text-white border-secondary" required>
                <option :value="1">1 hour</option>
                <option :value="2">2 hours</option>
                <option :value="3">3 hours</option>
                <option :value="4">4 hours</option>
              </select>
            </div>

            <div v-if="error" class="col-12">
              <div class="alert alert-danger mb-0">{{ error }}</div>
            </div>
            <div v-if="success" class="col-12">
              <div class="alert alert-success mb-0">{{ success }}</div>
            </div>

            <div class="col-12 d-flex flex-wrap gap-2">
              <BaseButton type="submit" variant="primary">Confirm booking</BaseButton>
              <RouterLink to="/bookings" class="btn btn-outline-light">Go to bookings</RouterLink>
              <RouterLink to="/facilities" class="btn btn-outline-secondary">Back</RouterLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="p-4 rounded-4 sfr-card text-white">
    <div class="fw-semibold">Facility not found</div>
    <div class="text-white-50 mb-3">The facility ID does not exist in local data.</div>
    <RouterLink to="/facilities" class="btn btn-outline-light">Back to facilities</RouterLink>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue'
import { useFacilitiesStore } from '@/stores/facilities'
import { useBookingsStore } from '@/stores/bookings'

export default {
  name: 'FacilityDetailView',
  components: {
    BaseButton,
  },
  props: {
    id: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      facilitiesStore: useFacilitiesStore(),
      bookingsStore: useBookingsStore(),
      form: {
        date: '',
        time: '',
        durationHours: 1,
      },
      error: '',
      success: '',
    }
  },
  computed: {
    facilityId() {
      return this.id || this.$route.params.id
    },
    facility() {
      return this.facilitiesStore.getById(this.facilityId)
    },
  },
  created() {
    this.bookingsStore.loadBookings()
  },
  methods: {
    submitBooking() {
      this.error = ''
      this.success = ''

      if (!this.facility) {
        this.error = 'Facility not found'
        return
      }

      this.bookingsStore.addBooking({
        facilityId: this.facility.id,
        date: this.form.date,
        time: this.form.time,
        durationHours: this.form.durationHours,
      })

      this.success = 'Booking saved'
    },
  }, 
}
</script>
