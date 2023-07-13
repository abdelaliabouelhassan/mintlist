<template>
    <div class=" w-full h-full">
       <div class=" w-full  max-w-[1240px] mx-auto">
         <div class=" w-full px-6 py-6 xl:px-0">
           <Header />
         </div>
       </div>
        <div class=" w-full " style="background-image: url('https://cdn.mintlist.com/consumer/success-bg.jpg'); background-size: cover; background-repeat: no-repeat; background-position: center bottom;">
            <div class=" pt-[94px] pb-20 flex">
                <div class=" mx-auto bg-white p-6 w-[min(460px,95vw)] relative rounded-[20px]">
                        <div class=" absolute left-0 -top-14  w-full">
                            <div class=" w-full flex">
                               <img src="https://cdn.mintlist.com/consumer/check-circle.png" class=" mx-auto" alt="Your car has made the list.">
                            </div>
                        </div>

                        <div class=" pt-8 flex flex-col items-start space-y-5">
                            <h2 class=" text-[#2f2f2f] text-[45px] font-pnova font-bold">Congratulations!</h2>
                            <p class=" text-black text-[28px] font-normal font-pnova leading-[34px]">Your Other Other has made the list.
                                <br>
                                <br>
                                 Our marketplace buyers competitively out-bid each other for vehicles just like yours - and 
                                 <span class=" font-bold">more bids mean more money in your pocket.</span>
                            </p>

                            <div class=" w-full pt-4">
                              <UIBaseButton @click="Next"  class=" h-[54px] w-full rounded-full bg-primary text-center text-lg text-white font-bold border-primary hover:bg-[#ab2448] duration-300">Continue</UIBaseButton> 
                            </div>
                        </div>
                </div>
            </div>
          
        </div>

        <div class=" w-full flex pt-10">
            <div class=" w-[min(460px,95vw)] mx-auto">
                <Footer />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
  const Step = useStep();
  const Direction = useDirection();
  const router = useRouter();
  const Next = () => {
   Step.value++;
   Direction.value = 1;
   setTimeout(()=>{
    router.push('/onboarding/whats-next')
   },0)
  }  
</script>
