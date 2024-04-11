<template>
  <Nav />
  <div class="flex flex-col justify-end items-center max-w-7xl mx-auto bg-stone-300 h-[100px] md:h-[200px] mb-10">
  <p class="text-3xl md:text-6xl font-bold uppercase">{{ data.nombre }}</p>
    </div>
    <div class="bg-black w-[5px] h-[88px] flex flex-row mb-10 mx-auto"></div>

    <div class=" flex flex-col max-w-7xl md:mx-auto md:grid grid-cols-2 pb-10 p-5">

      <div class="col-span-1 flex flex-col items-center justify-center">
        <img :src="data.imagen" alt="">

      </div>

      <div class="col-span-1 flex flex-col gap-5 ">

        <p>{{ data.descripcion }}</p>

        <h2><span class="uppercase font-semibold text-xl ">ubicacion:</span><br>{{ data.ubicacion }} </h2>
        <h2><span class="uppercase font-semibold text-xl ">Año de realizacion:</span><br>{{ data.fecha }} </h2>
        <h2><span class="uppercase font-semibold text-xl ">tiempo de obra:</span><br>{{ data.duracion }} </h2>
        <h2><span class="uppercase font-semibold text-xl ">area de intervencion:</span><br>{{ data.area }} </h2>
        

      </div>

    </div>

    <Footer />
</template>

<script setup>
import { ref , onMounted } from 'vue'
import Nav from '@/components/nav.vue'
import Footer from '@/components/footer.vue'
import {obras} from '../assets/obras.js'
import { useRoute } from 'vue-router'


onMounted(() => {
  window.scrollTo(0, 0)
})

const route = useRoute()

const data = ref(obras[route.params.id - 1])

console.log(data.value)

</script>

