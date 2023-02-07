<template>
  <div class="registration-form">
    <p class="form-title">Register</p>
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
      <button @click.prevent="register">Register</button>
    </form>
    <p class="message" v-html="message" v-if="message"></p>
  </div>
</template>

<script>
import { register } from '@/services';

export default {
  name: 'Registration',
  data() {
    return {
      email: '',
      password: '',
      message: '',
      errorMsg: '',
    };
  },
  methods: {
    async register() {
      try {
        this.message = '';
        this.errorMsg = '';
        const result = await register({
        email: this.email,
        password: this.password,
        });
        this.message = result.data;
        if(result.status === 200) {
          this.email = '';
          this.password = '';
        }
      } catch(error) {
        this.errorMsg = error.response.data;
      }
    },
  },
}
</script>

<style scoped>
.registration-form {
  width: 600px;
  margin-top: 36px;
  margin-inline: auto;
  border: 2px solid #008080;
  text-align: center;
}

.form-title {
  padding: 16px;
  background-color: #008080;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  text-align: left;
}

form {
  padding: 36px 24px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  text-align: left;
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

.message {
  color: green;
  margin-bottom: 36px;
}

.error-msg {
  color: red;
}
</style>
