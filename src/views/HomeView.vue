<template>
  <div class="home container">
    <h1>Hello</h1>
    <div>
      {{ getUser.name }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "HomeView",
  computed: {
    ...mapGetters(["getUser"]),
  },
};
</script>
