<template>
    <div class=" w-full flex flex-col items-start space-y-2">
        <div class=" w-full pt-5">
            <Card />
        </div>
        <div class=" w-full pb-10 pt-2">
             <UIBaseButton @click="$emit('Back')"  class=" text-white bg-[#6b6b6b] rounded-[0.75em] text-lg font-bold py-[14px] px-8 border border-[#6b6b6b] hover:bg-tertiary  hover:border-tertiary">Back</UIBaseButton> 
        </div>
        <p class=" text-white text-lg font-bold font-pnova">
           Tell us about your vehicle's ownership:
        </p>
        <div class=" w-full flex flex-col items-start space-y-8 pt-4 relative">

            <div class=" w-full grid grid-cols-3 gap-[15px]">
                <div @click="Select(item)" v-for="(item,index,key) in options" :key="key" :class="{'bg-tertiary':store.$state.form.vehicle_ownership.ownership === item.value,'bg-white':store.$state.form.vehicle_ownership.ownership != item.value}" class=" w-full  rounded-[4px] border border-tertiary cursor-pointer pt-6 pb-[22px] financeOptionsWrapper">
                    <div class=" flex flex-col items-center space-y-2">
                        <img :src="store.$state.form.vehicle_ownership.ownership === item.value ? item.activeImage :item.unactiveImage" alt="">
                        <span class=" text-lg font-normal font-pnova " :class="{'text-white':store.$state.form.vehicle_ownership.ownership === item.value,'text-black':store.$state.form.vehicle_ownership.ownership != item.value}">{{item.title}}</span>
                        <div>
                            <input type="radio" :value="item.value" v-model="store.$state.form.vehicle_ownership.ownership"  name="ownership" id="">
                        </div>
                    </div>
                </div>
            </div> 
            <p class=" text-sm text-[#fafafa] font-pnova font-normal" v-if="store.$state.form.vehicle_ownership.ownership === 'financed'">
                We will need your current Payout Statement before we list your car.
            </p>
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
            title:'Paid in Full',
            value:'paid_in_full',
            activeImage:'https://cdn.mintlist.com/consumer/paid-in-full-active.png',
            unactiveImage:'https://cdn.mintlist.com/consumer/paid-in-full.png'
        },
        {
            title:'Financed',
            value:'financed',
            activeImage:'https://cdn.mintlist.com/consumer/financed-active.png',
            unactiveImage:'https://cdn.mintlist.com/consumer/financed.png'
        },
        {
            title:'Leased',
            value: 'leased',
            activeImage:'https://cdn.mintlist.com/consumer/leased-active.png',
            unactiveImage:'https://cdn.mintlist.com/consumer/leased.png'
        },

    ])

    const selectedOption = ref('')

    const Select = (option) => {
        store.$state.form.vehicle_ownership.ownership = option.value
        localStorage.setItem('form',JSON.stringify(store.$state.form))
    }
    
   
   

     const isFormNotEmpty = computed(()=>{
        return store.$state.form.vehicle_ownership.ownership !== ''
     })
</script>