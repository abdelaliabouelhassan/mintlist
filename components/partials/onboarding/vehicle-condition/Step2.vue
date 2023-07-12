<template>
    <div class=" w-full flex flex-col items-start space-y-2">
        <div class=" w-full pt-5">
            <Card />
        </div>
        <div class=" w-full pb-10 pt-2">
             <UIBaseButton @click="$emit('Back')"  class=" text-white bg-[#6b6b6b] rounded-[0.75em] text-lg font-bold py-[14px] px-8 border border-[#6b6b6b] hover:bg-tertiary  hover:border-tertiary">Back</UIBaseButton> 
        </div>
        <p class=" text-white text-lg font-bold font-pnova">
           Select from the below options that best describes your vehicle's condition.
        </p>
        <p class=" text-[#fafafa] text-sm font-normal font-pnova">
           Select all that apply
        </p>
        <div class=" w-full flex flex-col items-start space-y-4 pt-4 relative">
           
            <div :class="{'bg-[#36bbbc]':store.$state.form.vehicle_condition.condition === option.value,'bg-[#fafafa]':store.$state.form.vehicle_condition.condition != option.value}" class=" w-full  rounded-[4px] p-4 py-4 cursor-pointer" @click="Select(option)" v-for="(option,index,key) in options" :key="key">
                <div class=" w-full flex items-center space-x-4 px-6  ">
                    <div  class="radioButton isTickButton">
                         <input data-v-21bc2cc6=""  class=" mt-px" type="checkbox">
                    </div>
                    <div class=" flex flex-col items-start space-y-px " :class="{'text-white':store.$state.form.vehicle_condition.condition === option.value,'text-black':store.$state.form.vehicle_condition.condition != option.value}">
                        <span class="  text-lg font-normal font-pnova">{{option.title}}</span>
                        <span class=" text-sm  font-normal font-pnova">{{option.subTitle}}</span>
                    </div>
                </div>
            </div>
         
        </div>
        <div class=" w-full pt-10">
             <UIBaseButton @click="$emit('Next')" :disabled="!isFormNotEmpty" :class="{' bg-[#ea346680]':!isFormNotEmpty,'bg-primary hover:bg-[#ab2448]':isFormNotEmpty}"  class=" h-[54px] w-full rounded-full  text-center text-lg text-white font-bold border-primary  duration-300">Next</UIBaseButton> 
        </div>
    </div>
</template>



<script setup>
     import Card from "@/components/UI/Card.vue"
     import { useAppStore } from '@/stores/app';
     const store = useAppStore();
    
    const options = ref([
        {
            title:'My car has no issues.',
            value:'no_issues',
        },
        {
            title:'My car has issues that prevent me from driving it sometimes.',
            value:'drivable',
        },
        {
            title:'My car has been modified.',
            value: 'modified'
        },

    ])

    const selectedOption = ref('')

    const Select = (option) => {
        store.$state.form.vehicle_condition.condition = option.value
        localStorage.setItem('form',JSON.stringify(store.$state.form))
    }
  

     const isFormNotEmpty = computed(()=>{
        return store.$state.form.vehicle_condition.condition !== ''
     })
</script>


