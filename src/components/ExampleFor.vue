<template>
<ul>
    <li v-for = "country in countries" v-bind:key="country">{{ country }}</li>
</ul>
</template>

<script lang="ts" setup>
import {Ref, ref} from 'vue';
let countries:Ref<Array<string>> = ref([
    'Spain', 'France', 'UK', 'Italy', 'Portugal'
])
</script>

<style scoped>

</style>