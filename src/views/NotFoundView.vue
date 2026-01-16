<template>
  <div class="p-4 rounded-4 sfr-card text-white">
    <div class="fw-semibold">Page not found</div>
    <div class="text-white-50 mb-3">The page you requested does not exist.</div>
    <RouterLink to="/" class="btn btn-outline-light">Go home</RouterLink>
  </div>
</template>

<script>
export default {
  name: 'NotFoundView',
}
</script>
