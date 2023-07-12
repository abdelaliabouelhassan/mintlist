<template>
  <main class=" w-full h-full overflow-hidden">
   <div class=" w-full h-full">
     <slot></slot>
   </div>
  </main>
</template>

<style>
.page-left-enter-active,
.page-right-enter-active,
.page-left-leave-active,
.page-right-leave-active {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: all 360ms linear;
}

.page-left-enter-from  {
  transform: translateX(100%);
  background-color: #2f2f2f;
}

.page-right-leave-to {
background-color: black;
}
.page-left-leave-to {
background-color: black;
}
.page-right-enter-from {
  transform: translateX(-100%);
  background-color: #2f2f2f;
}

.page-left-enter-to, .page-right-enter-to {
  transform: translateX(0);
  background-color: #2f2f2f;
}
</style>