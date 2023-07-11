 

 import {useDirection} from "../composables/locale.ts";

export default defineNuxtRouteMiddleware((to, from) => {

  const counter = useDirection();

 

 
  // 0 = back & 1 next
  if (counter.value === 1) {
    to.meta.pageTransition = { name: 'page-left' };
    from.meta.pageTransition = { name: 'page-left' };
  } else {
    to.meta.pageTransition = { name: 'page-right' };
    from.meta.pageTransition = { name: 'page-right' };
  }
})