<template>
  <div class="min-vh-100 d-flex flex-column">
    <AppNavbar />
    <main class="container flex-grow-1 py-4">
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from '@/components/AppFooter.vue'
import AppNavbar from '@/components/AppNavbar.vue'

export default {
  name: 'App',
  components: {
    AppNavbar,
    AppFooter,
  },
}
</script>

