<template>
  <div>
    <section class="py-5">
      <div class="row align-items-center g-4">
        <div class="col-lg-7">
          <div class="p-4 p-md-5 rounded-4 sfr-card text-white">
            <h1 class="display-5 fw-semibold mb-3">Find the right space. Book it in minutes.</h1>
            <div class="d-flex flex-wrap gap-2">
              <RouterLink to="/facilities" class="btn btn-primary btn-lg">Browse facilities</RouterLink>
              <RouterLink to="/bookings" class="btn btn-outline-light btn-lg">View bookings</RouterLink>
            </div>
          </div>
        </div>

        <div class="col-lg-5">
          <div class="p-4 rounded-4 sfr-card text-white">
            <h2 class="h5 fw-semibold mb-3">Quick stats</h2>
            <div class="row g-3">
              <div class="col-6">
                <div class="p-3 rounded-3 sfr-panel">
                  <div class="small text-white-50">Facilities</div>
                  <div class="h3 mb-0">{{ facilitiesCount }}</div>
                </div>
              </div>
              <div class="col-6">
                <div class="p-3 rounded-3 sfr-panel">
                  <div class="small text-white-50">Categories</div>
                  <div class="h3 mb-0">{{ categoriesCount }}</div>
                </div>
              </div>
              <div class="col-6">
                <div class="p-3 rounded-3 sfr-panel">
                  <div class="small text-white-50">Indoor spaces</div>
                  <div class="h3 mb-0">{{ indoorCount }}</div>
                </div>
              </div>
              <div class="col-6">
                <div class="p-3 rounded-3 sfr-panel">
                  <div class="small text-white-50">Your bookings</div>
                  <div class="h3 mb-0">{{ bookingsTotal }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="pb-4">
      <div class="d-flex align-items-center justify-content-between gap-3 mb-3">
        <h2 class="h4 text-white mb-0">Popular categories</h2>
        <RouterLink class="btn btn-sm btn-outline-light" to="/facilities">Explore all</RouterLink>
      </div>

      <div class="row g-3">
        <div v-for="c in categories" :key="c" class="col-12 col-md-6 col-lg-4">
          <div class="p-4 rounded-4 sfr-card text-white h-100 position-relative">
            <div class="d-flex align-items-center justify-content-between">
              <div class="fw-semibold">{{ c }}</div>
              <span class="badge text-bg-secondary">{{ countByCategory(c) }}</span>
            </div>
            <div class="sfr-muted mt-2">
              Browse venues and book a time slot in a few clicks.
            </div>
            <RouterLink class="stretched-link" :to="`/facilities?category=${encodeURIComponent(c)}`"></RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useFacilitiesStore } from '@/stores/facilities'
import { useBookingsStore } from '@/stores/bookings'

export default {
  name: 'HomeView',
  data() {
    return {
      facilitiesStore: useFacilitiesStore(),
      bookingsStore: useBookingsStore(),
    }
  },
  computed: {
    facilitiesCount() {
      return this.facilitiesStore.facilities.length
    },
    categories() {
      return this.facilitiesStore.categories.slice(0, 6)
    },
    categoriesCount() {
      return this.facilitiesStore.categories.length
    },
    indoorCount() {
      return this.facilitiesStore.indoorCount
    },
    bookingsTotal() {
      return this.bookingsStore.total
    },
  },
  created() {
    this.bookingsStore.loadBookings()
  },
  methods: {
    countByCategory(category) {
      return this.facilitiesStore.facilities.filter((f) => f.category === category).length
    },
  },
}
</script>
