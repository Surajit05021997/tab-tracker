<template>
  <header>
    <div class="left-panel">
      <div class="logo">
        <p>Tab Tracker</p>
      </div>
      <router-link to="/songs">Browse</router-link>
    </div>
    <div class="right-panel">
      <nav v-if="!isUserLoggedIn" class="navbar">
        <router-link to="/login">Login</router-link>
        <router-link to="/registration">Register</router-link>
      </nav>
      <button class="logout-button" v-if="isUserLoggedIn" @click="logoutUser">Logout</button>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex';
import  { mapActions } from 'vuex';

export default {
  name: 'AppHeader',
  computed: {
    ...mapState(['isUserLoggedIn']),
  },
  methods: {
    ...mapActions(['setUserAction', 'setTokenAction']),
    logoutUser() {
      this.setUserAction(null);
      this.setTokenAction(null);
      this.$router.push({name: 'Songs'});
    },
  },
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

.left-panel {
  display: flex;
  gap: 36px;
  align-items: center;
}

.logo {
  font-size: 24px;
  font-weight: 600;
  color: #fff;
}

.navbar {
  display: flex;
  gap: 24px;
}

a {
  color: white;
  font-size: 16px;
  font-weight: 600;
}

.logout-button {
  border: none;
  background: transparent;
  color: white;
  font-size: 16px;
  font-weight: 600;
}

.navbar a:hover, .logout-button:hover {
  cursor: pointer;
}
</style>