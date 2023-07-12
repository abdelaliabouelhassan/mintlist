<template>
<div v-if="show" class="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  
  <div class="fixed inset-0 bg-black bg-opacity-30  transition-opacity"></div>

  <div class="fixed inset-0 z-10 overflow-y-auto">
    <div class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
     
      <div class="relative transform overflow-hidden rounded-[4px] bg-white text-left px-[35px] py-6   transition-all sm:my-8 sm:w-full sm:max-w-lg" style="box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.1);">
        <div class=" w-full flex justify-end">
            <button @click="Close">
                <svg fill="currentColor" class=" text-black" width="24" height="24" viewBox="0 0 24 24"><path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z"><!----></path></svg>
            </button>
        </div>
         <div class=" w-full flex flex-col items-center space-y-2 pt-4">
                <p class=" text-[#2f2f2f] text-2xl font-semibold font-pnova text-center">Do you want to start over?</p>
                <p class=" text-[#2f2f2f] text-base font-normal font-pnova text-center">It will clear all answers in this vehicle onboarding process.</p>
         </div>
         <div class=" w-full grid grid-cols-2 gap-6 pt-10">
          <UIBaseButton @click="Close" class=" py-3 px-[18px] text-base font-bold hover:bg-tertiary hover:border-tertiary bg-[#6b6b6b] text-white text-center border border-[#6b6b6b] rounded-[50px]">Cancel</UIBaseButton>
          <UIBaseButton @click="StartOver" class=" py-3 px-[18px] text-base font-bold hover:bg-[#ab2448] hover:border-[#ab2448] bg-[#ea3466] text-white text-center border border-[#ea3466] rounded-[50px]"> Start Over</UIBaseButton>

           
         </div>
      </div>
    </div>
  </div>
</div>

</template>


<script setup>
 const Direction = useDirection();
 const router = useRouter();
 const show = ref(false)
 const Open = () => {
    show.value = true;
 }
 const Close = () => {
    show.value = false;
 }
 const StartOver = () => {
   Direction.value = 1;
   Close();
   router.push('/')
 }
 defineExpose({
    show,
    Close,
    Open
 })
</script>

