<template>
    <p :class="{'danger':hasError}">El mennsaje ha sido enviado</p>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
    name: "ClassBind",
    setup(){
        let hasError = ref(false);
        return {hasError}
    }
})


</script>

<style scoped>
.danger{
    color: red;
}
</style>