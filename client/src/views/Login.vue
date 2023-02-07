<template>
  <div class="login-form">
    <p class="form-title">Login</p>
    <form action="">
      <div class="form-field">
        <label for="email">Email</label>
        <input type="email" v-model="email">
      </div>
      <div class="form-field">
        <label for="password">Password</label>
        <input type="password" v-model="password">
      </div>
      <p class="error-msg" v-if="errorMsg" v-html="errorMsg"></p>
      <button @click.prevent="login">Login</button>
    </form>
  </div>
</template>

<script>
import { login } from '@/services';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      errorMsg: '',
    }
  },
  methods: {
    async login() {
      try {
        await login({
          email: this.email,
          password: this.password,
        });
      } catch(error) {
        this.errorMsg = error.response.data;
      }
    },
  },
}
</script>

<style scoped>
.login-form {
  width: 600px;
  margin-top: 36px;
  margin-inline: auto;
  border: 2px solid #008080;
}

.form-title {
  padding: 16px;
  background-color: #008080;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
}

form {
  padding: 36px 24px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.form-field {
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid #008080;
  gap: 8px;
  font-size: 16px;
}

.form-field input {
  border: none;
  padding: 8px 0;
  font-size: 16px;
  background-color: #ebebeb;
}

.form-field input:focus {
  outline: none;
}

button {
  padding: 24px;
  background-color: #008080;
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
}

.error-msg {
  color: red;
}
</style>