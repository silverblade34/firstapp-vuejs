<template>
    <!-- las directivas selectivas siempre llevan "v-" -->
    <!-- <h2 v-if="age < 18">Eres menor de edad</h2>
    <h2 v-else>Eres mayor de edad</h2> -->
    <h2 v-show="age < 18" class="menor-edad">Eres menor de edad</h2>
    <h2 v-show="age > 18" class="mayor-edad">Eres mayor de edad</h2>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'ExampleSelective',
    setup() {
        let age = 19
        return {age}
    },
})
    // Vamos a hacer uso de directivas
</script>

<style scoped>
.menor-edad{
    color: red;
}

.mayor-edad{
    color: green;
}

</style>