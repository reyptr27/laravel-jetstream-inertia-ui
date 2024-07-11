<script setup>
defineProps(['value']);
</script>

<template>
    <span class="block text-sm font-medium text-gray-700 dark:text-gray-400 ">
        <span v-if="value">{{ value }}</span>
        <span v-else><slot /></span>
    </span>
</template>