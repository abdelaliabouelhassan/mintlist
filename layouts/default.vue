<template>
  <main class=" w-full h-full overflow-hidden">
   <div class=" w-full h-full">
     <slot></slot>
   </div>
  </main>
</template>

<style>
.page-left-enter-active,.page-left-leave-active,.page-right-enter-active,.page-right-leave-active {
    box-shadow: 0 0 100px 0 rgba(0,0,0,.333);
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    transition: all 2s cubic-bezier(.16,1,.3,1)
}

.page-left-enter-from {
    transform: translateX(100%);
    background-color: #2f2f2f;
    
}

.page-left-leave-to,.page-right-leave-to {
    filter: brightness(10%);
}

.page-right-enter-from {
    transform: translateX(-100%);
    background-color: #2f2f2f;
}

.page-left-enter-to,.page-right-enter-to {
    transform: translateX(0);
    background-color: #2f2f2f;
}
</style>