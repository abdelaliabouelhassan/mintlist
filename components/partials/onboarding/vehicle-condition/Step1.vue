<template>
    <div class=" w-full flex flex-col items-start space-y-2">
        <div class=" w-full pt-5">
            <Card />
        </div>
        <div class=" w-full pb-10 pt-2">
             <UIBaseButton @click="$emit('Back')"  class=" text-white bg-[#6b6b6b] rounded-[0.75em] text-lg font-bold py-[14px] px-8 border border-[#6b6b6b] hover:bg-tertiary  hover:border-tertiary">Back</UIBaseButton> 
        </div>
        <p class=" text-white text-lg font-bold font-pnova">
            Select your vehicle's status from the choices below. Most vehicles are normal, but if you're not sure, consult your vehicle's insurance papers.
        </p>
        <p class=" text-[#fafafa] text-sm font-normal font-pnova">
            Please select one
        </p>
        <div class=" w-full flex flex-col items-start space-y-4 pt-4 relative">
            <div :class="{'bg-[#36bbbc]':store.$state.form.vehicle_condition.condition === option.value,'bg-[#fafafa]':store.$state.form.vehicle_condition.condition != option.value}" class=" w-full  rounded-[4px] p-4 py-4 cursor-pointer" @click="Select(option)" v-for="(option,index,key) in options" :key="key">
                <div class=" w-full flex items-center  ">
                    <div  class="radioButton isTickButton">
                        <label class="label">
                            <input data-v-7dc0630a="" :checked="store.$state.form.vehicle_condition.condition === option.value"  name="option" id="radio-0" type="radio" class="">
                        </label>
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
            title:'Clean Title',
            subTitle:'My car has no history of severe damage.',
            value:'clean'
        },
        {
            title:'Salvage Title',
            subTitle:'My car has been written off as a total loss by my insurer.',
            value:'salvage'
        },
        {
            title:'Rebuilt Title',
            subTitle:'My car had a salvage title but it was restored for road use.',
            value: 'rebuilt'
        },
        {
            title:'Parts Title',
            subTitle:'My car is not roadworthy and can only be sold for parts.',
            value: 'parts'
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