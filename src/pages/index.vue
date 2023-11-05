<script setup lang="ts"></script>

<template>
  <Container>
    <div class="flex flex-col gap-2">
      <LineContainer>item1</LineContainer>
      <div class="grid grid-cols-1 md:grid-cols-7 md:gap-2">
        <div class="flex flex-col gap-2 col-span-4 mb-2">
          <LineContainer>Item2</LineContainer>
          <LineContainer>Item3</LineContainer>
        </div>

        <div class="md:order-last md:col-span-3">
          <section class="flex flex-col gap-2">
            <LineContainer>Item4</LineContainer>
            <LineContainer>Item5</LineContainer>
          </section>
        </div>
      </div>
    </div>
  </Container>
</template>
