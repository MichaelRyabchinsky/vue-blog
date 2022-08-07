<template>
  <div class="login">
    <form @submit.prevent="handleSubmit" class="login-form">
      <input
        type="text"
        placeholder="Enter email"
        v-model="email"
        class="form-item"
      />
      <input
        type="password"
        placeholder="Enter password"
        v-model="password"
        class="form-item"
      />
      <button type="submit" class="form-btn">Submit</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "LoginForm",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["login", "fetchUser"]),
    async handleSubmit() {
      const payload = {
        email: this.email,
        password: this.password,
      };
      await this.login(payload);
      await this.fetchUser();
      this.$router.push("/");
    },
  },
};
</script>

<style lang="stylus" scoped>
.login
  display flex
  justify-content center

.login-form
  display flex
  flex-direction column

.form-item
  margin-top 10px
  padding 10px

.form-btn
  margin-top 10px
  padding 10px
  background blue
  color white
  border none
  outline none
</style>
