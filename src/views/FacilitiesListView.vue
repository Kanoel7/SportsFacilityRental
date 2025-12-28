<template>
  <div>
    <div class="d-flex flex-column flex-md-row align-items-md-end justify-content-between gap-3 mb-4">
      <div>
        <h1 class="h3 text-white mb-1">Facilities</h1>
      </div>

      <!-- Filters -->
      <div class="row g-2" style="max-width: 720px">
        <div class="col-12 col-md-5">
          <label class="form-label text-white-50">Category</label>
          <select v-model="filters.category" class="form-select form-select-sm bg-dark text-white border-secondary">
            <option value="">All</option>
            <option v-for="c in facilitiesStore.categories" 
            :key="c" 
            :value="c"
            >{{ c }}</option>
          </select>
        </div>
        <div class="col-12 col-md-4">
          <label class="form-label text-white-50">Environment</label>
          <select v-model="filters.indoor" class="form-select form-select-sm bg-dark text-white border-secondary">
            <option value="">Any</option>
            <option value="indoor">Indoor</option>
            <option value="outdoor">Outdoor</option>
          </select>
        </div>
        <div class="col-12 col-md-3">
          <label class="form-label text-white-50">Sort</label>
          <select v-model="filters.sort" class="form-select form-select-sm bg-dark text-white border-secondary">
            <option value="recommended">Recommended</option>
            <option value="priceAsc">Price (low)</option>
            <option value="priceDesc">Price (high)</option>
          </select>
        </div>
      </div>
    </div>

    <div class="row g-3">
      <div v-for="f in filteredFacilities" :key="f.id" class="col-12 col-md-6 col-lg-4">
        <FacilityCard :facility="f" />
      </div>

      <div v-if="!filteredFacilities.length" class="col-12">
        <div class="p-4 rounded-4 sfr-card text-white">
          <div class="fw-semibold">No results</div>
          <div class="text-white-50">Try changing filters.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FacilityCard from '@/components/FacilityCard.vue'
import { useFacilitiesStore } from '@/stores/facilities'

export default {
  name: 'FacilitiesListView',
  components: {
    FacilityCard,
  },
  data() {
    return {
      facilitiesStore: useFacilitiesStore(),
      filters: {
        category: '',
        indoor: '',
        sort: 'recommended',
      },
    }
  },
  computed: {
    filteredFacilities() {
      let list = this.facilitiesStore.facilities.slice()

      if (this.filters.category) {
        list = list.filter((f) => f.category === this.filters.category)
      }

      if (this.filters.indoor === 'indoor') {
        list = list.filter((f) => f.indoor)
      }
      if (this.filters.indoor === 'outdoor') {
        list = list.filter((f) => !f.indoor)
      }

      if (this.filters.sort === 'priceAsc') {
        list.sort((a, b) => a.pricePerHour - b.pricePerHour)
      }
      if (this.filters.sort === 'priceDesc') {
        list.sort((a, b) => b.pricePerHour - a.pricePerHour)
      }

      return list
    },
  },
  created() {
    const prefill = this.$route.query.category
    if (typeof prefill === 'string' && prefill) {
      this.filters.category = prefill
    }
  },
}
</script>
