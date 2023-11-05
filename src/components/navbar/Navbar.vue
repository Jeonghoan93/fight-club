<script lang="ts">
import Container from "../common/Container.vue";

export default {
  name: "Navbar",
  components: {
    Container,
  },
};
</script>

<template>
  <div class="fixed w-full bg-white z-10 pb-3 shadow">
    <div class="pt-4">
      <Container>
        <div class="flex flex-row items-center justify-between gap-3 md:gap-0">
          <div class="relative">
            <div class="flex flex-row">
              <div class="font-bold text-[13pt]">
                FightClub<span class="text-red-700">X</span>
              </div>
            </div>
          </div>
          <span>Search</span>
          <span>User Menu</span>
        </div>
      </Container>
    </div>
    <Categories />
  </div>
</template>
