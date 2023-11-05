<script lang="ts">
import Navbar from "./components/navbar/Navbar.vue";
import FooterMobile from "./components/footers/FooterMobile.vue";

export default {
  name: "App",
  components: {
    Navbar,
    FooterMobile,
  },
};
</script>

<template>
  <Navbar />
  <div class="pt-20">
    <NuxtPage />
  </div>
  <FooterMobile />
</template>
