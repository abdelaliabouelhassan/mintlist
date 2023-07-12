<template>
<div v-if="show" class="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  
  <div class="fixed inset-0 bg-black bg-opacity-30  transition-opacity"></div>

  <div class="fixed inset-0 z-10 ">
    <div class="flex w-full h-full">
     
      <div class="relative transform overflow-y-auto bg-background text-left    transition-all w-full " style="box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.1);">
         <div class=" w-full max-w-[800px] mx-auto px-10 py-10 md:py-24">
        <p class=" text-white font-bold text-lg font-pnova">
             We'll grab this information and get started on building your vehicle's profile.
             <br>
             <br>
             It won't take very long. 
        </p>

         <div class=" w-full flex flex-col items-start space-y-2 relative">
            <div class=" w-full flex flex-col items-start space-y-5 fieldWrapper ">
               <UISelect :options="years" label="Year:" v-model="form.year" placeholder="Select a year" />
                <UISelect :options="make" label="Make:" v-model="form.make" placeholder="Select a make" />
                <UISelect :options="model" label="Model:" v-model="form.model" placeholder="Select a model" />
                <div class=" grid gap-2 w-full grid-cols-1 sm:grid-cols-3" >
                     <UIInput type="number" class=" sm:col-span-2"  label="Mileage:" v-model="form.mileage" placeholder="Please enter the mileage" />
                     <UISelect :options="mileage" label="none" v-model="form.mileage_unit" placeholder="Select a unit" />
                </div>
                <UIInput type="text"  label="Postal code:" v-model="form.postal_code" placeholder="Please enter your postal code" />
            </div>
        </div>
         <div class=" w-full grid md:grid-cols-2 gap-6 pt-10">
               <UIBaseButton @click="Cancel"  class=" small  hover:bg-tertiary hover:border-tertiary bg-[#6b6b6b] text-white text-center border border-[#6b6b6b] rounded-[50px]">Cancel</UIBaseButton> 
               <UIBaseButton :disabled="!isFormNotEmpty" @click="Save" class=" small hover:bg-[#ab2448] hover:border-[#ab2448] bg-[#ea3466] text-white text-center border border-[#ea3466] rounded-[50px]">Save</UIBaseButton> 
         </div>
    </div>
      </div>
    </div>
  </div>
</div>

</template>


<script setup>
  const show = ref(false)
  const years = ref([]);
     const make = ref([
        'Acura',
        'Aston Martin',
        'Audi',
        'BMW',
        'Bentley'
     ])
     const model = ref([
        'Accord',
        'CR-V',
        'Civic',
        'Element',
        'FCX Clarity',
        'Fit',
        'Odyssey',
        'Pilot',
        'Ridgeline',
        'S2000',
        'Other'
     ])
     const mileage = ref([
        'km',
        'miles'
     ])
     const form = ref({
        year:'',
        make:'',
        model:'',
        mileage_unit:'',
        mileage:'',
        postal_code:''
     })
    

    const Cancel = () => {
        show.value = false
    }
    const Save = () => {
        show.value = false
    }
    const Open = () => {
        show.value = true;
    }
   

     const isFormNotEmpty = computed(()=>{
        const { year, make, model, mileage_unit, mileage, postal_code } = form.value;
        return year !== '' && make !== '' && model !== '' && mileage_unit !== '' && mileage !== '' && postal_code !== '';
     })

     onMounted(()=> {
        const currentYear = new Date().getFullYear();
        for (let i = 1981; i <= currentYear; i++) {
        years.value.push(i);
        }
     })



 

 defineExpose({
    show,
    Open
 })
</script>


<style scoped>
.baseButtonWrapper.small {
    padding: 12px 18px;
    font-size: 16px;
    font-weight: bold;
    line-height: 1.31;
}
</style>