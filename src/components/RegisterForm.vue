<template>
  <div class="register">
    <form @submit.prevent="handleSubmit" class="register-form">
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
      <input
        type="text"
        placeholder="Enter name"
        v-model="name"
        class="form-item"
      />
      <button type="submit" class="form-btn">Submit</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "RegisterForm",
  data() {
    return {
      name: "",
      password: "",
      email: "",
    };
  },
  methods: {
    ...mapActions(["register"]),
    async handleSubmit() {
      const payload = {
        email: this.email,
        password: this.password,
        name: this.name,
        extra_details: "",
        skills: "",
        profession: "",
        details: "",
      };
      await this.register(payload);
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<style lang="stylus" scoped>
.register
  display flex
  justify-content center

.register-form
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
