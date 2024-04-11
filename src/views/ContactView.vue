<template>
    <div>
        <Nav />
        <h1 class="text-5xl text-center uppercase py-5 font-bold">contacto</h1>
        <div id="obras" class="flex flex-col items-center">
            <div class="bg-black w-[5px] h-[88px]"></div>

            <div class="md:w-2/3 border-2 border-black p-10 my-10 flex flex-col justify-center">
                <FormKit id="contactForm" type="form" :action="false" submit-label="enviar"
                @submit="handleSubmit"
                    :actions="false" incomplete-message="Complete los campos obligatorios" :classes="{
                    messages: 'text-red-500 text-xs text-center',
                    form: 'bg-gray-300 p-5',
                }">
                    <div class="flex flex-col md:grid md:grid-cols-2 lg:w-2/3 gap-3 md:gap-1 mx-auto">
                        <div class="flex flex-col col-span-1">
                            <FormKit type="text" name="name" validation="required" placeholder="NOMBRE"
                                :validation-messages="{ required: 'El nombre es obligatorio' }" :classes="{
                    messages: 'text-red-500 text-xs',
                    input: 'shadow border border-gray-300 appearance-none rounded py-4 px-5 w-full text-gray-700 leading-tight focus:outline-none focus:border-transparent focus:ring-4 focus:ring-stone-500 focus:ring-opacity-50',
                    outer: 'mb-2'

                }" />
                            <FormKit type="email" name="email" validation="required|email" placeholder="EMAIL"
                                :validation-messages="{ required: 'El email es obligatorio' }" :classes="{
                    messages: 'text-red-500 text-xs',
                    input: 'shadow border border-gray-300 appearance-none rounded py-4 px-5 w-full text-gray-700 leading-tight focus:outline-none focus:border-transparent focus:ring-4 focus:ring-stone-500 focus:ring-opacity-50',
                    outer: 'mb-2',
                    

                }" />

                            <FormKit type="text" name="phone" placeholder="TELEFONO" 
                                :validation-messages="{ required: 'El telefono es obligatorio' }" :classes="{
                    messages: 'text-red-500',
                    input: 'shadow border border-gray-300 appearance-none rounded py-4 px-5 w-full text-gray-700 leading-tight focus:outline-none focus:border-transparent focus:ring-4 focus:ring-stone-500 focus:ring-opacity-50',


                }" />
                        </div>

                        <div class="flex flex-col col-span-1  items-center">
                            <FormKit type="textarea" name="message" placeholder="MENSAJE" validation="required" rows=7
                                cols="auto" :validation-messages="{ required: 'El mensaje es obligatorio' }" :classes="{
                                    messages: 'text-red-500 text-xs',
                    input: 'shadow border border-gray-300 appearance-none rounded py-4 px-5  text-gray-700 leading-tight focus:outline-none focus:border-transparent focus:ring-4 focus:ring-stone-500 focus:ring-opacity-50',

                }" />
                        </div>
                    </div>

               <div v-if="mensaje" class="text-center bg-green-300 text-white rounded-md max-w-fit mx-auto px-10 py-2 m-5">
                <p>{{ mensaje }}</p>
               </div>

                    <div class="flex justify-center my-5 ">
          <FormKit
            type="submit"
            label="Enviar"
            :classes="{
              input:
                'bg-black hover:opacity-55 uppercase text-white font-bold py-2 px-4 md:px-40 rounded focus:outline-none focus:shadow-outline',
            }"
          />
        </div>


                </FormKit>

                <div class="flex justify-center py-10">
                    <ul class="flex flex-col items-center text-center md:flex-row gap-10 font-bold text-xl">
                        <li>+598 98 447 351</li>
                        <li>MOTEVIDEO, URUGUAY</li>
                        <li>POCITOS</li>
                    </ul>
                </div>

                <div style="height:300px">
    <l-map ref="map" v-model:zoom="zoom" :center="[-34.9043527, -56.1518685]" :use-global-leaflet="false">
      <l-marker :lat-lng="[-34.9043527, -56.1518685]"></l-marker>
      
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
    </l-map>
  </div>

            </div>
        </div>
        <Footer />
    </div>
</template>

<script setup>
import { ref , onMounted  } from 'vue'
import Nav from '@/components/nav.vue'
import Footer from '@/components/footer.vue'
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
import emailjs from '@emailjs/browser';
import { reset } from '@formkit/vue';



const zoom = ref(16)
const mensaje = ref('')


onMounted(() => {
  window.scrollTo(0, 0)
})




const sendEmail=() =>{
  emailjs.sendForm('service_gzh580i', 'template_dftkgli', '#contactForm', 'XFiP0z73yV6l3viAI')}
    


const handleSubmit = async () => {
  try {
    await sendEmail();
    mensaje.value = 'Mensaje Enviado';

    reset("contactForm");
  }catch(error) {
    mensaje.value = 'Error al enviar el Mensaje';
  }
}


</script>



