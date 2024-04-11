<template>
<Nav />

<Carrusel />

<Estudio />

<Servicios />

<Obras />

<Footer />

</template>

<script setup>
import Nav from '@/components/nav.vue'
import Carrusel from '@/components/carrousel.vue'
import Estudio from '@/components/estudio.vue'
import Servicios from '@/components/servicios.vue'
import Obras from '@/components/obras.vue'
import Footer from '@/components/footer.vue'
import { onMounted } from 'vue';

onMounted(() => {
  window.scrollTo(0, 0)
})


</script>
