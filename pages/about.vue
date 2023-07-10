<template>
    <div class="w-full bg-green-500 text-black ">
        about
        <NuxtLink  @click="back"  to="/" >Back</NuxtLink>
        <NuxtLink  @click="next"  to="/gg" >Next</NuxtLink>
    </div>
</template>


<script setup lang="ts">
  const counter = useDirection();
  const back = () => {
   counter.value = 0;
  }
  const next = () => {
   counter.value = 1;
  }
</script>