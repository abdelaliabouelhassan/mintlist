<template>
    <Container class=" w-full h-full">
        <div class=" w-full flex justify-between gap-[50px] pt-5 font-pnova">
          <!-- left -->
          <div class=" w-full  md:max-w-[400px] flex flex-col items-start space-y-5 pt-16">
           
           <div class=" w-full flex flex-col items-start space-y-4">
             <p class=" font-pnova text-[22px] leading-[24px] font-bold text-tertiary">
                Step 2 of 4:
             </p>
             <p class=" text-white font-extrabold font-pnova text-[64px] leading-[70px]">
               What kind of condition is your vehicle in<span class=" text-tertiary">?</span>
             </p>
           </div>
            <div class=" w-full">
               <transition name="fade">
                  <Step1 v-show="step === 1" @Next="Next" @Back="Back"  />
               </transition>
                <transition name="fade">
                   <Step2 v-show="step === 2" @Next="Next" @Back="Back"  />
               </transition>
               <transition name="fade">
                   <Step3 v-show="step === 3" @Next="Next" @Back="Back"  />
               </transition>
            </div>

           <div class=" pt-8 w-full">
             <Footer />
           </div>
          </div>


          <!-- Right -->
          <div class=" w-full relative max-w-[670px] pb-28 hidden md:block">
              <UICirclesContainerTwo  ref="UICirclesContaineroneRef" :animation="animation"  photo="https://cdn.mintlist.com/consumer/girl-car-2.png" />
          </div>
        </div>
    </Container>
</template>

<script setup lang="ts">
  import Step1 from "@/components/partials/onboarding/vehicle-condition/Step1.vue"
  import Step2 from "@/components/partials/onboarding/vehicle-condition/Step2.vue"
  import Step3 from "@/components/partials/onboarding/vehicle-condition/Step3.vue"
  import { useAppStore } from '@/stores/app';
  const store = useAppStore();
  const step = ref(1);
  const Direction = useDirection();
  const router = useRouter();
  const animation = ref('animation-from-bottom')
  const Next = () => {
   if(step.value < 3){
    step.value++;
   }else{
      animation.value = "animation-from-top";
      Direction.value = 1;
      setTimeout(()=>{
      router.push('/onboarding/whats-included')
      },600)
   }
  }
  const Back = () => {

   if(step.value > 1) {
    step.value--;
    return;
   }
    animation.value = "animation-from-top";
   Direction.value = 0;
   setTimeout(()=>{
    router.push('/onboarding/vehicle-info/?returnFromNext=1')
   },600)
  }

   onMounted(()=>{
      //returnFromNext 
      if(router.currentRoute.value.query.returnFromNext) {
        step.value = 3;
      }
  })


</script>