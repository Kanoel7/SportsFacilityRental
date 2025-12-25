<template>
  <div class="text-white">
    <h1 class="h3 mb-3">About Us</h1>

    <div class="p-4 rounded-4 sfr-card">
      <p class="text-white-50 mb-3">
        Welcome to Sports Facilities Rental, your trusted platform for booking the perfect sports venues. Whether you're planning a casual game, a professional event, or a training session, we make it easy to find and reserve the ideal space.
      </p>

      <div class="row g-3">
        <div class="col-12 col-lg-6">
          <div class="p-3 rounded-3 sfr-panel h-100">
            <div class="fw-semibold">Why Choose Us?</div>
            <ul class="text-white-50 mb-0 mt-2">
              <li>Wide selection of premium sports facilities.</li>
              <li>Easy-to-use booking system tailored to your needs.</li>
              <li>Transparent pricing and reliable availability.</li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="p-3 rounded-3 sfr-panel h-100">
            <div class="fw-semibold">Our Mission</div>
            <ul class="text-white-50 mb-0 mt-2">
              <li>To connect sports enthusiasts with the best venues.</li>
              <li>To simplify the booking process for everyone.</li>
              <li>To promote active and healthy lifestyles.</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mt-4">
        <RouterLink class="btn btn-primary" to="/facilities">Explore Our Facilities</RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
}
</script>
