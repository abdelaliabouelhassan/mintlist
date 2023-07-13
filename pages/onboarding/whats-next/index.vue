<template>
    <div class=" w-full h-full pb-8 px-10 ">
        <div class=" w-full pb-20  max-w-[1624px] float-right  pt-10">
            <Header />
        </div>
        <div class=" w-full flex justify-between max-w-[1624px] gap-10 float-right  2xl:px-28 pt-5">
          <!-- left -->
          <div class=" w-full md:max-w-[400px] flex flex-col items-start space-y-12 pt-0 md:pt-16">
            <p class=" text-white text-[64px] leading-[70px] font-extrabold font-pnova">
              Here's what happens next<span  class=" text-[#36bbbc]">!</span>
            </p>
            <p  class=" text-white font-normal font-pnova text-lg">
               You already know that your <span class=" font-bold">Other Other</span> has what it takes to attract a great offer on MintList!
              <br><br>
              We will now help guide you to take some incredible photos and generate an automatic condition and Carfax report that helps our buyers make firm offers!
              <br><br>
              Save your progress by creating a free account below and watch how a winning listing rolls in multiple offers from our buyers!
            </p>
            <div class=" w-full flex flex-col items-start space-y-4">
               <UIBaseButton @click="Next"   class=" h-[54px] w-full rounded-full bg-primary text-center text-lg text-white font-bold border-primary hover:bg-[#ab2448] duration-300">Create An Account</UIBaseButton> 
                <p class=" text-[#9e9e9e] text-base font-normal font-pnova">
                    Already have an account? <span class=" cursor-pointer text-[#e5a647]">Sign-In</span>
                </p>
            </div>
            
           <div class=" pt-20 pb-10 w-full">
             <Footer />
           </div>
          </div>


          <!-- Right -->
          <div class=" w-full relative max-w-[800px] pb-28 hidden md:block lg:px-28">
             <div class=" w-full grid gap-y-[30px] gap-x-[26px] xl:grid-cols-2">
                <div class=" relative w-full bg-[#36bcbc] rounded-lg pt-[15px] space-y-4 px-[30px] pb-[25px] flex flex-col items-center">
                    <img src="https://cdn.mintlist.com/consumer/inspection.png" class=" h-[120px]  z-10 relative" alt="">
                    <span class=" relative  z-10 text-[#2f2f2f] text-lg font-bold font-pnova text-center">Enhance your vehicle's profile</span>
                    <p class=" relative z-10 max-w-[230px] text-sm text-black text-center font-normal font-pnova">
                         Add a few photos and your vehicle's personalized condition report, high-value options options and CarFax Vehicle History will be automatically generated. 
                    </p>
                    <span style="bottom: 10px;color: rgb(72, 205, 206);font: 700 300px / 330px proxima-nova, sans-serif;position: absolute;right: -40px;transform: translateY(20%);z-index: 0;">1</span>
                </div>
                <div class=" relative w-full bg-[#36bcbc] rounded-lg pt-[15px] space-y-4 px-[30px] pb-[25px] flex flex-col items-center">
                    <img src="https://cdn.mintlist.com/consumer/carte.png" class=" h-[120px]  z-10 relative" alt="">
                    <span class=" relative  z-10 text-[#2f2f2f] text-lg font-bold font-pnova text-center">Let us do the work</span>
                    <p class=" relative z-10 max-w-[230px] text-sm text-black text-center font-normal font-pnova">
                         Your car goes into our weekly online sale. 150+ verified buyers compete and make their best offers while you <br> relax. 
                    </p>
                    <span style="bottom: 10px;color: rgb(72, 205, 206);font: 700 300px / 330px proxima-nova, sans-serif;position: absolute;right: 0px;transform: translateY(20%);z-index: 0;">2</span>
                </div>
                <div class=" relative w-full bg-[#36bcbc] rounded-lg pt-[15px] space-y-4 px-[30px] pb-[25px] flex flex-col items-center">
                    <img src="https://cdn.mintlist.com/consumer/auction.png" class=" h-[120px]  z-10 relative" alt="">
                    <span class=" relative  z-10 text-[#2f2f2f] text-lg font-bold font-pnova text-center">Get the highest offer</span>
                    <p class=" relative z-10 max-w-[230px] text-sm text-black text-center font-normal font-pnova">
                         Watch the offers roll in, in real time. You can accept the highest offer - or not. You're never obligated to sell.
                    </p>
                    <span style="bottom: 10px;color: rgb(72, 205, 206);font: 700 300px / 330px proxima-nova, sans-serif;position: absolute;right: 0px;transform: translateY(20%);z-index: 0;">3</span>
                </div>
                <div class=" relative w-full bg-[#36bcbc] rounded-lg pt-[15px] space-y-4 px-[30px] pb-[25px] flex flex-col items-center">
                    <img src="	https://cdn.mintlist.com/consumer/cash-out.png" class=" h-[120px]  z-10 relative" alt="">
                    <span class=" relative  z-10 text-[#2f2f2f] text-lg font-bold font-pnova text-center">Cash out or trade in</span>
                    <p class=" relative z-10 max-w-[230px] text-sm text-black text-center font-normal font-pnova pb-10">
                         When you accept your offer, you'll get fast payment with guaranteed funds in as little as 24 hours or you could trade in to another car on MintList and save on tax.
                    </p>
                    <span style="bottom: 10px;color: rgb(72, 205, 206);font: 700 300px / 330px proxima-nova, sans-serif;position: absolute;right: 0px;transform: translateY(20%);z-index: 0;">4</span>
                </div>
             </div>
          </div>
        </div>
    </div>
</template>

<script setup lang="ts">
  const Step = useStep();
  const Direction = useDirection();
  const router = useRouter();
  const Next = () => {
   
  }  
</script>
