<template>
    <Container class=" w-full h-full">
        <div class=" w-full flex justify-between gap-[50px] pt-5">
          <!-- left -->
          <div class=" w-full md:max-w-[400px] flex flex-col items-start space-y-12 pt-16">
            <p class=" text-white text-[64px] leading-[70px] font-extrabold font-pnova">
              We've made <span class=" text-[#36bbbc]">selling and trading</span> your car easy<span  class=" text-[#36bbbc]">.</span>
            </p>
            <p  class=" text-white font-normal font-pnova text-lg">
               We'll get you the best value for your car and help you get behind the wheel of a new one.
              <br><br>
              Let's get started! 
            </p>
            <div class=" w-full">
              <button @click="Next" class=" h-[54px] w-full rounded-full bg-primary text-center text-lg text-white font-bold border-primary hover:bg-[#ab2448] duration-300">
                Next
              </button>
            </div>
           <div class=" pt-20 w-full">
             <Footer />
           </div>
          </div>


          <!-- Right -->
          <div class=" w-full relative max-w-[800px] pb-28 hidden md:block">
              <UICirclesContainerone  ref="UICirclesContaineroneRef" :animation="animation" photo="https://cdn.mintlist.com/consumer/jumping-man-1.png" />
          </div>
        </div>
    </Container>
</template>

<script setup lang="ts">
  const counter = useDirection();
  const router = useRouter();
  const animation = ref('animation-from-bottom')
  const Next = () => {
   animation.value = "animation-from-top";
   counter.value = 1;
   setTimeout(()=>{
    router.push('/about')
   },600)
  }

  
  
</script>
