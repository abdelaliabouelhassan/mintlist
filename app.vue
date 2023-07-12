<template>
  <NuxtLayout>
     <NuxtPage />
  </NuxtLayout>
</template>


<script setup>
 const Step = useStep();
 const router = useRouter();
 const Direction = useDirection();
 useSeoMeta({
    title: 'MintList - Auction Onboarding Process',
})

onMounted(()=>{
   
   // if(Step.value === 0) {
   //    Direction.value = 0;
   //    router.push('/');
   // }
})
</script>