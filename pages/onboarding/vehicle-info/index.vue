<template>
    <Container class=" w-full h-full">
        <div class=" w-full flex justify-between gap-[50px] pt-5 font-pnova">
          <!-- left -->
          <div class=" w-full  md:max-w-[400px] flex flex-col items-start space-y-5 pt-16">
           
           <div class=" w-full flex flex-col items-start space-y-4">
             <p class=" font-pnova text-[22px] leading-[24px] font-bold text-tertiary">
                Step 1 of 4:
             </p>
             <p class=" text-white font-extrabold font-pnova text-[64px] leading-[70px]">
                Tell us more about your vehicle<span class=" text-tertiary">.</span>
             </p>
           </div>
            <div class=" w-full">
                <Step1 v-show="step === 1" @Next="Next" @Back="Back"  />
                <Step2 v-show="step === 2" @Next="Next" @Back="Back"  />
            </div>

           <div class=" pt-8 w-full">
             <Footer />
           </div>
          </div>


          <!-- Right -->
          <div class=" w-full relative max-w-[670px] pb-28 hidden md:block">
              <UICirclesContainerTwo  ref="UICirclesContaineroneRef" :animation="animation" photo="https://cdn.mintlist.com/consumer/jumping-man-1.png" />
          </div>
        </div>
    </Container>
</template>

<script setup lang="ts">
  import Step1 from "@/components/partials/onboarding/vehicle-info/Step1.vue"
  import Step2 from "@/components/partials/onboarding/vehicle-info/Step2.vue"
  const step = ref(1);
  const Direction = useDirection();
  const router = useRouter();
  const animation = ref('animation-from-bottom')
  const Next = () => {
   step.value = 2;
  }
  const Back = () => {

   if(step.value === 2) {
    step.value = 1;
    return;
   }
    animation.value = "animation-from-top";
   Direction.value = 0;
   setTimeout(()=>{
    router.push('/')
   },600)
  }


</script>