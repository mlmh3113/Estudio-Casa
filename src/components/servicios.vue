<template>
    <div id="servicios" class="flex flex-col items-center pb-20">
    <div class="bg-black w-[5px] h-[88px]"></div>
    <h2 class="text-5xl text-center uppercase pt-5 pb-10 font-bold">servicios</h2>

    <div class="flex flex-col container md:grid md:grid-cols-2 gap-1 mx-auto">

        <Card class="col-span-1 mx-auto" title="obra nueva" text="La
                    visualización 3D es una herramienta de comunicación que ayuda a explicar de forma clara el proyecto
                    diseñado.Para muchos clientes poco familiarizados con la información gráfica, ha
                    resultado una verdadera solución la posibilidad de experimentar con realismo, el diseño que verán
                    reflejado, en el resultado final de su obra." img="../../public/images/card1.png" />
        <CardReverse class="col-span-1 mx-auto" title="diseño de interiores"
            text="Nuestro equipo diseña espacios únicos focalizándose en el bienestar de las personas en su entorno personal, laboral y de esparcimiento.Damos un servicio integral, abarcamos desde el diseño de un baño, pasando por una vivienda hasta un gran local comercial, para nosotros es importante tener en cuenta todos los detalles por eso nuestra forma de trabajo consiste en varias etapas de charlas con el cliente para poder traducir sus gustos al diseño y así llevar a cabo la obra completa."
            img="../../public/images/card2.png" />
        <Card class="col-span-1 mx-auto" title="visulalizacion"
            text="La visualización 3D es una herramienta de comunicación que ayuda a explicar de forma clara el proyecto diseñado.Para muchos clientes poco familiarizados con la información gráfica, ha resultado una verdadera solución la posibilidad de experimentar con realismo, el diseño que verán reflejado, en el resultado final de su obra"
            img="../../public/images/card3.png" />
        <CardReverse class="col-span-1 mx-auto" title="reformas"
            text="Adaptamos los espacios a las nuevas necesidades del usuario. Podemos intervenir en varias escalas, simplemente cambiando un piso o el color de las paredes hasta demoler algunos muros para integrar áreas, como por ej. una cocina. Con un pequeño gesto de diseño se puede revalorizar los espacios sin tener que hacer una obra completa y todo lo que ello implica. Tenemos las herramientas necesarias y el equipo para hacer que eso suceda."
            img="../../public/images/card5.png" />
        <Card class="col-span-1 mx-auto" title="patologias de la construccion"
            text="Para afrontar una patología de la construcción debemos ante todo conocer su proceso, su origen, sus causas y sus síntomas. Como técnicos tenemos que ser capaces de diseñar, proyectar y construir estructuras durables.Para eso, hay que conocer los materiales, los problemas constructivos y las estrategias de prevención. En nuestro estudio contamos con profesionales capacitados y especializados para resolver todo lo relacionado a las patologías de la construcción."
            img="../../public/images/card4.png" />
        <CardReverse class="col-span-1 mx-auto" title="asesoramiento integral"
            text="Trabajamos desde un inicio en un ida y vuelta con el cliente priorizando sus gustos y necesidades, es fundamental saber cómo utiliza los espacios y qué busca experimentar en su próximo proyecto para poder interpretar sus requerimientos y materializarlos de la mejor manera. Para eso contamos con una alta variedad de proveedores y acompañamos al cliente en cada decisión, estamos hablando de la elección del color en las paredes, pasando por el mobiliario a medida o inclusive en el detalle de las plaquetas eléctricas para que todo funcione como se lo imaginó."
            img="../../public/images/card6.png" />
        


    </div>
    </div>


</template>

<script setup>
import Card from "../components/card.vue"
import CardReverse from "../components/cardReverse.vue"

</script>
