<template>
    <div class=" w-full flex flex-col items-start space-y-2">
        <div class=" w-full pt-5">
            <Card />
        </div>
        <div class=" w-full pb-10 pt-2">
             <UIBaseButton @click="$emit('Back')"  class=" text-white bg-[#6b6b6b] rounded-[0.75em] text-lg font-bold py-[14px] px-8 border border-[#6b6b6b] hover:bg-tertiary  hover:border-tertiary">Back</UIBaseButton> 
        </div>
        <p class=" text-white text-lg font-bold font-pnova">
           Does your vehicle include aftermarket wheels?
        </p>
        <p class=" text-[#fafafa] text-sm font-normal font-pnova">
            Please select one
        </p>
        <div class=" w-full flex flex-col items-start space-y-4 pt-4 relative">
           <div class=" w-full flex flex-col items-start space-y-4" v-for="(option,index,key) in options" :key="key">
             <div :class="{'bg-[#36bbbc]':store.$state.form.whats_included.aftermarket_wheels === option.value,'bg-[#fafafa]':store.$state.form.whats_included.aftermarket_wheels != option.value}" class=" w-full  rounded-[4px] p-4 py-4 cursor-pointer" @click="Select(option)">
                <div class=" w-full flex items-center ">
                    <div  class="radioButton isTickButton mt-1.5">
                        <label class="label">
                            <input data-v-7dc0630a="" :checked="store.$state.form.whats_included.aftermarket_wheels === option.value"  name="aftermarket_wheels" id="radio-0" type="radio" class="">
                        </label>
                    </div>
                    <div class=" flex flex-col items-start space-y-px " :class="{'text-white':store.$state.form.whats_included.aftermarket_wheels === option.value,'text-black':store.$state.form.whats_included.aftermarket_wheels != option.value}">
                        <span class="  text-lg font-normal font-pnova">{{option.title}}</span>
                    </div>
                </div>
            </div>
            <div class=" px-6 space-y-2" v-if="option.value === 'yes' && store.$state.form.whats_included.aftermarket_wheels === 'yes'">
               <div class=" flex flex-col items-start space-y-2">
                 <span class=" text-white text-lg font-bold font-pnova">Wheel Condition:</span>
                 <div class=" flex items-start space-y-2 flex-col">
                    <div class=" flex items-center gap-4"  v-for="(item,index,key) in WheelCondition" :key="key">
                        <input type="radio" class=" mb-1" name="aftermarket_wheels_WheelCondition" :id="'aftermarket_wheels_ConfirmTire' + item.value" :value="item.value" @click="store.$state.form.whats_included.aftermarket_wheels_options.wheel_condition = item.value" :checked="store.$state.form.whats_included.aftermarket_wheels_options.wheel_condition === item.value" >
                        <label :for="'aftermarket_wheels_ConfirmTire' + item.value" class=" text-sm text-[#d9d9d9] font-pnova">{{item.title}}</label>
                    </div>
                 </div>
               </div>
                <div class=" flex flex-col items-start space-y-2">
                 <span class=" text-white text-lg font-bold font-pnova">Tire Type:</span>
                 <div class=" flex items-start space-y-2 flex-col">
                    <div class=" flex items-center gap-4"  v-for="(item,index,key) in TireType" :key="key">
                        <input type="radio" class=" mb-1" name="aftermarket_wheels_TireType" :id="'aftermarket_wheels_ConfirmTire' + item.value" :value="item.value" @click="store.$state.form.whats_included.aftermarket_wheels_options.tire_type = item.value" :checked="store.$state.form.whats_included.aftermarket_wheels_options.tire_type === item.value">
                        <label :for="'aftermarket_wheels_ConfirmTire' + item.value" class=" text-sm text-[#d9d9d9] font-pnova">{{item.title}}</label>
                    </div>
                 </div>
               </div>
                <div class=" flex flex-col items-start space-y-2">
                 <span class=" text-white text-lg font-bold font-pnova">Please confirm tire set:</span>
                 <div class=" flex items-start space-y-2 flex-col">
                    <div class=" flex items-center gap-4"  v-for="(item,index,key) in ConfirmTire" :key="key">
                        <input type="radio" class=" mb-1" name="aftermarket_wheels_ConfirmTire" :id="'aftermarket_wheels_ConfirmTire' + item.value" :value="item.value" @click="store.$state.form.whats_included.aftermarket_wheels_options.confirm_tire = item.value" :checked="store.$state.form.whats_included.aftermarket_wheels_options.confirm_tire === item.value">
                        <label :for="'aftermarket_wheels_ConfirmTire' + item.value" class=" text-sm text-[#d9d9d9] font-pnova">{{item.title}}</label>
                    </div>
                 </div>
               </div>
              <div class=" w-full pt-4" v-if="!isYesSelectedAndOptions">
                 <div class=" w-full flex bg-[rgba(155,30,30,.5)] py-[15px]">
                    <div class=" m-auto flex items-center gap-[14px] text-white font-semibold font-pnova text-sm">
                        <svg fill="currentColor"  width="24" height="24" viewBox="0 0 24 24"><path d="M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"><!----></path></svg>
                        <span>All fields are required to proceed.</span>
                    </div>
                </div>
              </div>
            </div>
           </div>
         
        </div>
        <div class=" w-full pt-10">
             <UIBaseButton @click="$emit('Next')" :disabled="!isYesSelectedAndOptions" :class="{' bg-[#ea346680]':!isYesSelectedAndOptions,'bg-primary hover:bg-[#ab2448]':isYesSelectedAndOptions}"  class=" h-[54px] w-full rounded-full  text-center text-lg text-white font-bold border-primary  duration-300">Next</UIBaseButton> 
        </div>
    </div>
</template>



<script setup>
     import Card from "@/components/UI/Card.vue"
     import { useAppStore } from '@/stores/app';
     const store = useAppStore();
    
    const options = ref([
        {
            title:'Yes - aftermarket wheels included.',
            value:'yes',
        },
        {
            title:'No - aftermarket wheels not included.',
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
        store.$state.form.whats_included.aftermarket_wheels = option.value
    }

    watch(()=>store.$state.form.whats_included,()=>{
       localStorage.setItem('form',JSON.stringify(store.$state.form))
   },{deep:true})
     

     const isYesSelectedAndOptions = computed(()=>{
        if(store.$state.form.whats_included.aftermarket_wheels === 'yes'){
            return store.$state.form.whats_included.aftermarket_wheels_options.confirm_tire !== '' &&  store.$state.form.whats_included.aftermarket_wheels_options.confirm_tire !== '' && store.$state.form.whats_included.aftermarket_wheels_options.tire_type !== ''  
        }
        return store.$state.form.whats_included.aftermarket_wheels !== '';
     })
</script>