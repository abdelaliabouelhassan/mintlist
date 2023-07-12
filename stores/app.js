
  import { defineStore } from 'pinia'
  export const useAppStore = defineStore('app', () => {
    const form = ref({
      vehicle_info:{
        year:'',
        make:'',
        model:'',
        mileage_unit:'',
        mileage:'',
        postal_code:'',
        options:[]
      }
    })

    //reset form
    function resetForm(){
      console.log('resetting form')
      form.value.vehicle_info = {
        year:'',
        make:'',
        model:'',
        mileage_unit:'',
        mileage:'',
        postal_code:'',
        options:[]
      }
    }
   
   
  
    return { form, resetForm }
  })