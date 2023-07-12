<template>
    <div class=" w-full flex flex-col items-start space-y-4">
        <div class=" w-full pt-5">
            <UICard />
        </div>
        <div class=" w-full pb-10 pt-2">
            <UIBaseButton @click="$emit('Back')"  class=" text-white bg-[#6b6b6b] rounded-[0.75em] text-lg font-bold py-[14px] px-8 border border-[#6b6b6b] hover:bg-tertiary  hover:border-tertiary">Back</UIBaseButton>
        </div>


        <div class=" w-full space-y-8">
            <p class=" text-white text-lg leading-[27px] font-pnova font-bold">
                Does your vehicle have any of the following options?
                <br>
                <br>
                Buyers like to know what optional extras your vehicle is equipped with. If your vehicle has any of the high-value options listed below it will increase the value of your vehicle and help you get the most for it.
            </p>


            <div class=" w-full flex flex-wrap items-center gap-4 justify-start">
                <button @click="Select(option)" v-for="(option,index,key) in options" :key="key" :class="{'text-[#006951] border-[#b2f0e2] bg-[#d7fff6]':checkIn(option)}" class=" text-sm whitespace-nowrap font-normal font-pnova text-[#2f2f2f] border border-[#d9d9d9] py-[5px] px-[10px] rounded-lg bg-white cursor-pointer focus:ring ring-tertiary">
                    {{option}}
                </button>
            </div>
        </div>

         <div class=" w-full pt-10">
             <UIBaseButton @click="$emit('Next')"  class=" bg-primary hover:bg-[#ab2448] h-[54px] w-full rounded-full  text-center text-lg text-white font-bold border-primary  duration-300">{{selectedOptions.length > 0 ? 'Next' : 'Skip'}}</UIBaseButton> 
        </div>
    </div>
</template>



<script setup>
     
     const options = ref([
        'Navigation',
        'All Wheel Drive / 4WD',
        'Sunroof / Panoramic Sunroof',
        'Heated Seats',
        'Cooled Seats',
        'Power Seats',
        'Leather Interior',
        'Adaptive Cruise Control',
        'Self Driving / Autopilot',
        'Upgraded / Premium Sound System',
        'Rear Entertainment System',
        'Xenon / LED Headlamps',
        'Autonomous Braking / Emergency Braking System'
     ])


    const selectedOptions = ref([])

    const Select = (option) => {
        const index = selectedOptions.value.indexOf(option);
        if (index === -1) {
            selectedOptions.value.push(option);
        } else {
            selectedOptions.value.splice(index, 1);
        }
    };

    const checkIn = (option) => {
       return selectedOptions.value.includes(option);
    };
</script>

