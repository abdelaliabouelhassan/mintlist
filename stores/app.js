import { defineStore } from "pinia";
export const useAppStore = defineStore("app", () => {
  const form = ref({
    vehicle_info: {
      year: "",
      make: "",
      model: "",
      mileage_unit: "",
      mileage: "",
      postal_code: "",
      options: [],
    },
    vehicle_condition: {
      condition: "",
      conditions: [
        {
          title: "My car has no issues.",
          val: "no_issues",
          checked: false,
          details: "",
        },
        {
          title: "My car has issues that prevent me from driving it sometimes.",
          val: "drivable",
          checked: false,
          details: "",
        },
        {
          title: "My car has been modified.",
          val: "modified",
          checked: false,
          details: "",
        },
      ],
      conditions_details: [
        {
          title: "None of these apply.",
          val: "no_issues",
          checked: false,
          details: "",
        },
        {
          title: " My car has exterior damage.",
          val: "exterior_damage",
          checked: false,
          details: "",
        },
        {
          title: "My car has interior damage.",
          val: "interior_damage",
          checked: false,
          details: "",
        },
        {
          title: "My car has been smoked or vaped in.",
          val: "smoked_in",
          checked: false,
          details: "",
        },
        {
          title: "My car has an unpleasant smell inside it.",
          val: "unpleasant_smell",
          checked: false,
          details: "",
        },
      ],
    },
    whats_included:{
      working_keys:'',
      service_record:'',
      factory_wheels:'',
      wheel_condition:'',
      tire_type:'',
      confirm_tire:''
    }
  });

  //reset form
  function resetForm() {
    console.log("resetting form");
    form.value.vehicle_info = {
      year: "",
      make: "",
      model: "",
      mileage_unit: "",
      mileage: "",
      postal_code: "",
      options: [],
    };
    form.value.vehicle_condition = {
      condition: "",
      conditions: [
        {
          title: "My car has no issues.",
          val: "no_issues",
          checked: false,
          details: "",
        },
        {
          title: "My car has issues that prevent me from driving it sometimes.",
          val: "drivable",
          checked: false,
          details: "",
        },
        {
          title: "My car has been modified.",
          val: "modified",
          checked: false,
          details: "",
        },
      ],
      conditions_details: [
        {
          title: "None of these apply.",
          val: "no_issues",
          checked: false,
          details: "",
        },
        {
          title: " My car has exterior damage.",
          val: "exterior_damage",
          checked: false,
          details: "",
        },
        {
          title: "My car has interior damage.",
          val: "interior_damage",
          checked: false,
          details: "",
        },
        {
          title: "My car has been smoked or vaped in.",
          val: "smoked_in",
          checked: false,
          details: "",
        },
        {
          title: "My car has an unpleasant smell inside it.",
          val: "unpleasant_smell",
          checked: false,
          details: "",
        },
      ],
    };
    form.value.whats_included={
      working_keys:'',
      service_record:'',
      factory_wheels:'',
      wheel_condition:'',
      tire_type:'',
      confirm_tire:''
    }
  }

  return { form, resetForm };
});
