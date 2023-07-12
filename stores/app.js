
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
      },
      vehicle_condition:{
        condition:'',
        conditions:[
          {
            title:'My car has no issues.',
            val:'no_issues',
            checked:false,
            details:'',
        },
        {
            title:'My car has issues that prevent me from driving it sometimes.',
            val:'drivable',
            checked:false,
            details:'',
        },
        {
            title:'My car has been modified.',
            val: 'modified',
            checked:false,
            details:'',
        },
        ],
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
      form.value.vehicle_condition = {
        condition:'',
        conditions:[]
      }
    }
   
   
  
    return { form, resetForm }
  })