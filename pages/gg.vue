<template>
    <div class="w-full bg-red-500 text-black ">
        gg
        <NuxtLink  @click="test"  to="/about" >Back</NuxtLink>
        
    </div>
</template>

<script setup lang="ts">
  const counter = useDirection();
  const test = () => {
   counter.value = 0;
  }

//   definePageMeta({
//   pageTransition: false,
//   layoutTransition: false
// })
</script>