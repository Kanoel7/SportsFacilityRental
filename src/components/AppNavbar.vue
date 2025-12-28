<template>
  <nav class="navbar navbar-expand-lg navbar-dark py-3 sfr-navbar">
    <div class="container">
      <RouterLink class="navbar-brand fw-semibold" to="/">
        Sports Facilities Rental
      </RouterLink>

      

      <div id="sfrNavbar" class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto gap-lg-2">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/" exact-active-class="active">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/facilities" exact-active-class="active">
              Facilities
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/bookings" exact-active-class="active">
              Bookings
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/about" exact-active-class="active">About</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar',
}
</script>
