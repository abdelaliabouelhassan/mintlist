<template>
    <div class=" w-full  py-6  h-full  h-full font-pnova relative">
      <div class=" w-[8px] h-full fixed left-0 top-0 bg-tertiary"></div>
       <div class=" w-full  max-w-[1240px] mx-auto overflow-hidden">
         <div class=" w-full px-6 xl:px-0">
          <Header />
         </div>
          <div class=" w-full pl-6 pr-6 xl:pl-0 xl:pr-0">
            <slot></slot>
          </div>
       </div>
    </div>
</template>