<template>
    <div class=" w-full flex flex-col items-start space-y-4">
        <div class=" w-full pb-10">
             <UIBaseButton @click="$emit('Back')"  class=" text-white bg-[#6b6b6b] rounded-[0.75em] text-lg font-bold py-[14px] px-8 border border-[#6b6b6b] hover:bg-tertiary  hover:border-tertiary">Back</UIBaseButton> 
        </div>
        <p class=" text-white text-lg font-bold font-pnova">
             We'll grab this information and get started on building your vehicle's profile. 
             <br>
             <br>
              It won't take very long.
        </p>
        <div class=" w-full flex flex-col items-start space-y-2 relative">
            <div class=" w-full flex flex-col items-start space-y-5 fieldWrapper ">
               <UISelect :options="years" label="Year:" v-model="store.$state.form.vehicle_info.year" placeholder="Select a year" />
                <UISelect :options="make" label="Make:" v-model="store.$state.form.vehicle_info.make" placeholder="Select a make" />
                <UISelect :options="model" label="Model:" v-model="store.$state.form.vehicle_info.model" placeholder="Select a model" />
                <div class=" grid gap-2 w-full grid-cols-1 sm:grid-cols-3" >
                     <UIInput type="number" class=" sm:col-span-2"  label="Mileage:" v-model="store.$state.form.vehicle_info.mileage" placeholder="Please enter the mileage" />
                     <UISelect :options="mileage" label="none" v-model="store.$state.form.vehicle_info.mileage_unit" placeholder="Select a unit" />
                </div>
                <UIInput type="text"  label="Postal code:" v-model="store.$state.form.vehicle_info.postal_code" placeholder="Please enter your postal code" />
            </div>
        </div>
        <div class=" w-full pt-10">
             <UIBaseButton @click="$emit('Next')" :disabled="!isFormNotEmpty" :class="{' bg-[#ea346680]':!isFormNotEmpty,'bg-primary hover:bg-[#ab2448]':isFormNotEmpty}"  class=" h-[54px] w-full rounded-full  text-center text-lg text-white font-bold border-primary  duration-300">Next</UIBaseButton> 
        </div>
    </div>
</template>



<script setup>
     import { useAppStore } from '@/stores/app';
     const store = useAppStore();
    
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



   watch(()=>store.$state.form.vehicle_info,()=>{
       localStorage.setItem('form',JSON.stringify(store.$state.form))
   },{deep:true})

     

   
   

     const isFormNotEmpty = computed(()=>{
        const { year, make, model, mileage_unit, mileage, postal_code } = store.$state.form.vehicle_info;
        return year !== '' && make !== '' && model !== '' && mileage_unit !== '' && mileage !== '' && postal_code !== '';
     })

     onMounted(()=> {
        const currentYear = new Date().getFullYear();
         for (let i = 1981; i <= currentYear; i++) {
         years.value.push(i);
        }

         if(localStorage.getItem('form')){
               const form = JSON.parse(localStorage.getItem('form'));
               store.$state.form.vehicle_info = form.vehicle_info;
         }
     })
</script>

