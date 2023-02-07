<template>
  <header>
    <div class="logo">
      <router-link to="/">Tab Tracker</router-link>
    </div>
    <nav class="navbar">
      <router-link to="/login">Login</router-link>
      <router-link to="/registration">Register</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  background-color: #008080;
}

.logo {
  font-size: 24px;
  font-weight: 600;
}

.logo a {
  color: #fff;
}

.navbar {
  display: flex;
  gap: 24px;
  font-size: 16px;
  font-weight: 600;
}

.navbar a {
  color: white;
}
</style>