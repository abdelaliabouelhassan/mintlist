<template>
    <div class=" w-full flex flex-col items-start space-y-2">
        <div class=" w-full pt-5">
            <Card />
        </div>
        <div class=" w-full pb-10 pt-2">
             <UIBaseButton @click="$emit('Back')"  class=" text-white bg-[#6b6b6b] rounded-[0.75em] text-lg font-bold py-[14px] px-8 border border-[#6b6b6b] hover:bg-tertiary  hover:border-tertiary">Back</UIBaseButton> 
        </div>
        <p class=" text-white text-lg font-bold font-pnova">
           Does your vehicle include factory wheels?
        </p>
        <p class=" text-[#fafafa] text-sm font-normal font-pnova">
            Please select one
        </p>
        <div class=" w-full flex flex-col items-start space-y-4 pt-4 relative">
           <div class=" w-full flex flex-col items-start space-y-4" v-for="(option,index,key) in options" :key="key">
             <div :class="{'bg-[#36bbbc]':store.$state.form.whats_included.factory_wheels === option.value,'bg-[#fafafa]':store.$state.form.whats_included.factory_wheels != option.value}" class=" w-full  rounded-[4px] p-4 py-4 cursor-pointer" @click="Select(option)">
                <div class=" w-full flex items-center ">
                    <div  class="radioButton isTickButton mt-1.5">
                        <label class="label">
                            <input data-v-7dc0630a="" :checked="store.$state.form.whats_included.factory_wheels === option.value"  name="factory_wheels" id="radio-0" type="radio" class="">
                        </label>
                    </div>
                    <div class=" flex flex-col items-start space-y-px " :class="{'text-white':store.$state.form.whats_included.factory_wheels === option.value,'text-black':store.$state.form.whats_included.factory_wheels != option.value}">
                        <span class="  text-lg font-normal font-pnova">{{option.title}}</span>
                    </div>
                </div>
            </div>
            <div class=" px-6 space-y-2" v-if="option.value === 'yes' && store.$state.form.whats_included.factory_wheels === 'yes'">
               <div class=" flex flex-col items-start space-y-2">
                 <span class=" text-white text-lg font-bold font-pnova">Wheel Condition:</span>
                 <div class=" flex items-start space-y-2 flex-col">
                    <div class=" flex items-center gap-4"  v-for="(item,index,key) in WheelCondition" :key="key">
                        <input type="radio" class=" mb-1" name="WheelCondition" :id="item.value" :value="item.value" @click="store.$state.form.whats_included.wheel_condition = item.value" :checked="store.$state.form.whats_included.wheel_condition === item.value" >
                        <label :for="item.value" class=" text-sm text-[#d9d9d9] font-pnova">{{item.title}}</label>
                    </div>
                 </div>
               </div>
                <div class=" flex flex-col items-start space-y-2">
                 <span class=" text-white text-lg font-bold font-pnova">Tire Type:</span>
                 <div class=" flex items-start space-y-2 flex-col">
                    <div class=" flex items-center gap-4"  v-for="(item,index,key) in TireType" :key="key">
                        <input type="radio" class=" mb-1" name="TireType" :id="item.value" :value="item.value" @click="store.$state.form.whats_included.tire_type = item.value" :checked="store.$state.form.whats_included.tire_type === item.value">
                        <label :for="item.value" class=" text-sm text-[#d9d9d9] font-pnova">{{item.title}}</label>
                    </div>
                 </div>
               </div>
                <div class=" flex flex-col items-start space-y-2">
                 <span class=" text-white text-lg font-bold font-pnova">Please confirm tire set:</span>
                 <div class=" flex items-start space-y-2 flex-col">
                    <div class=" flex items-center gap-4"  v-for="(item,index,key) in ConfirmTire" :key="key">
                        <input type="radio" class=" mb-1" name="ConfirmTire" :id="item.value" :value="item.value" @click="store.$state.form.whats_included.confirm_tire = item.value" :checked="store.$state.form.whats_included.confirm_tire === item.value">
                        <label :for="item.value" class=" text-sm text-[#d9d9d9] font-pnova">{{item.title}}</label>
                    </div>
                 </div>
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
            title:'Yes - factory wheels included.',
            value:'yes',
        },
        {
            title:'No - factory wheels not included.',
            value:'no'
        },
    ])

    const WheelCondition = ref([
        {
            title:'New',
            value:'new',
        },
        {
            title:'Good',
            value:'used'
        },
        {
            title:'Damaged',
            value:'Replace'
        },
    ])

    const TireType = ref([
         {
            title:'Summer Tires',
            value:'summer',
        },
        {
            title:'Winter Tires',
            value:'winter'
        },
        {
            title:'All-Season Tires',
            value:'all-season'
        },
    ])
    
    const ConfirmTire = ref([
         {
            title:'Matching Tires (Includes same brands & models)',
            value:'matching',
        },
        {
            title:'Non-Matching tires (Includes different brands & models)',
            value:'non-matching'
        },
        {
            title:'Unsure',
            value:'unsure'
        },
    ])

    const selectedOption = ref('')

    const Select = (option) => {
        store.$state.form.whats_included.factory_wheels = option.value
    }

    watch(()=>store.$state.form.whats_included,()=>{
       localStorage.setItem('form',JSON.stringify(store.$state.form))
   },{deep:true})
    
   
   

     const isFormNotEmpty = computed(()=>{
        return store.$state.form.whats_included.factory_wheels !== ''
     })
</script>