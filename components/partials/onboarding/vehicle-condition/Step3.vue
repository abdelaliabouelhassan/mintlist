<template>
    <div class=" w-full flex flex-col items-start space-y-2">
        <div class=" w-full pt-5">
            <Card />
        </div>
        <div class=" w-full pb-10 pt-2">
             <UIBaseButton @click="$emit('Back')"  class=" text-white bg-[#6b6b6b] rounded-[0.75em] text-lg font-bold py-[14px] px-8 border border-[#6b6b6b] hover:bg-tertiary  hover:border-tertiary">Back</UIBaseButton> 
        </div>
        <p class=" text-white text-lg font-bold font-pnova">
           Select all that apply from the options below. The more details you can provide, the better will be the price from our buyers.
        </p>
        <p class=" text-[#fafafa] text-sm font-normal font-pnova">
          Select all that apply
        </p>
        <div class=" w-full flex flex-col items-start space-y-4 pt-4 relative">
            <div  :class="{'bg-[#36bbbc]':option.checked,'bg-[#fafafa]':!option.checked}" class=" w-full  rounded-[4px]  cursor-pointer"  v-for="(option,index,key) in store.$state.form.vehicle_condition.conditions_details" :key="key">
                <div class=" w-full flex items-center space-x-4 px-10 py-4  " @click="Select(option)">
                    <div  class="radioButton isTickButton">
                         <input :disabled="isDisabled1 && option.val != 'no_issues' || isDisabled2 && option.val == 'no_issues'" data-v-21bc2cc6="" v-model="option.checked"   class=" mt-px" type="checkbox">
                    </div>
                    <div class=" flex flex-col items-start space-y-px " :class="{'text-white':option.checked,'text-black':!option.checked}">
                        <span class="  text-lg font-normal font-pnova" :class="{' text-[#9e9e9e]':isDisabled1 && option.val != 'no_issues' || isDisabled2 && option.val == 'no_issues'}">{{option.title}}</span>
                    </div>
                </div>
                <div v-if="option.checked && option.val != 'no_issues'" class=" bg-[#30a7a8] w-full px-10 py-4 space-y-4 flex flex-col items-start text-lg text-[#2f2f2f] font-normal font-pnova">
                    <span>Please provide some details:</span>
                    <textarea  v-model="option.details" name="" class=" w-full resize-none outline-none p-3 border border-[#d9d9d9] bg-[#fafafa] rounded-[4px]" id="" cols="30" rows="2"></textarea>
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
    
    



    const isDisabled1 = computed(()=>{
         return store.$state.form.vehicle_condition.conditions_details.some((item)=>{
              return item.checked && item.val === 'no_issues'
         })
    })

    const isDisabled2 = computed(()=>{
         return store.$state.form.vehicle_condition.conditions_details.some((item)=>{
              return item.checked && item.val != 'no_issues'
         })
    })
   watch(()=>store.$state.form.vehicle_condition.conditions_details,()=>{
       localStorage.setItem('form',JSON.stringify(store.$state.form))
   },{deep:true})
    const Select = (option) => {
       if(isDisabled1.value && option.val != 'no_issues' || isDisabled2.value && option.val == 'no_issues'){
           return
       }
        store.$state.form.vehicle_condition.conditions_details.forEach((item)=>{
            if(item.val === option.val){
                item.checked = !item.checked
            }
        })
    }
  

     const isFormNotEmpty = computed(()=>{
            return store.$state.form.vehicle_condition.conditions_details.some((item)=>{
                return item.checked
            })
     })

</script>



