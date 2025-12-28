<template>
  <div class="card sfr-card h-100 text-white">
    <div class="card-body">
      <h5 class="card-title">{{ facility.name }}</h5>
      <div class="small sfr-muted">{{ facility.location }}</div>

      <p class="mt-3 sfr-muted">
        {{ facility.shortDescription }}
      </p>

      <div class="d-flex gap-2 small">
        <span class="badge bg-dark">{{ facility.category }}</span>

        <span class="badge bg-info" v-if="facility.indoor">
          Indoor
        </span>
        <span class="badge bg-success" v-else>
          Outdoor
        </span>

        <span class="badge bg-secondary">
          Capacity: {{ facility.capacity }}
        </span>
      </div>
    </div>

    <div class="card-footer bg-transparent d-flex justify-content-between">
      <div>€{{ facility.pricePerHour }}/hour</div>

      <RouterLink
        class="btn btn-sm btn-outline-light"
        :to="`/facilities/${facility.id}`"
      >
        View details
      </RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FacilityCard',

  props: {
    facility: Object,
  },
}
</script>
