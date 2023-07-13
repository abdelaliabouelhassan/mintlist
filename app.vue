<template>
  <NuxtLayout>
     <NuxtPage />
  </NuxtLayout>
</template>


<script setup>
 import { useAppStore } from '@/stores/app';
 const store = useAppStore()
 const Step = useStep();
 const router = useRouter();
 const Direction = useDirection();
 useSeoMeta({
    title: 'MintList - Auction Onboarding Process',
})

onMounted(()=>{
   if(localStorage.getItem('form')){
         const form = JSON.parse(localStorage.getItem('form'));
         store.$state.form = form;
    }
   if(Step.value === 0) {
      Direction.value = 0;
      router.push('/');
   }
})
</script>