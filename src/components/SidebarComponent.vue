<template>
    <aside>
        Sidebar
    </aside>
</template>

<script lang="ts" setup>
</script>

<style scoped>
aside{
    background: var(--grisfuerte);
    color: var(--white);
    display: flex;
    flex-direction: column;
    width: var(--sidebar-width);
    overflow: hidden;
    min-height: 100vh;
    padding: 1rem;

    transition: 0.2s ease-out;
}
@media (max-width: 768){
    aside{
        position: fixed;
        z-index: 999;
    }
}
</style>