<template>
  <div class="table-responsive">
    <table class="table table-dark align-middle mb-0">
      <thead>
        <tr>
          <th>Facility</th>
          <th>Date</th>
          <th>Time</th>
          <th>Duration</th>
          <th class="text-end">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="b in bookings" :key="b.id">
          <td>
            <div class="fw-semibold">{{ resolveFacilityName(b.facilityId) }}</div>
            <div class="small text-white-50">#{{ b.facilityId }}</div>
          </td>
          <td>{{ b.date }}</td>
          <td>{{ b.time }}</td>
          <td>{{ b.durationHours }} hour(s)</td>
          <td class="text-end">
            <BaseButton variant="danger" outline size="sm" @click="$emit('remove', b.id)">
              Cancel
            </BaseButton>
          </td>
        </tr>
        <tr v-if="!bookings.length">
          <td colspan="5" class="text-center text-white-50 py-4">No bookings yet.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue'

export default {
  name: 'BookingTable',
  components: {
    BaseButton,
  },
  emits: ['remove'],
  props: {
    bookings: {
      type: Array,
      required: true,
    },
    facilitiesById: {
      type: Object,
      required: true,
    },
  },
  methods: {
    resolveFacilityName(facilityId) {
      return this.facilitiesById[facilityId]?.name || 'Unknown facility'
    },
  },
}
</script>
