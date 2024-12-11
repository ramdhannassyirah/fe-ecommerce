<script setup>
const props = defineProps({
    name: String,
    type: String
})
</script>

<template>
    <button :type="type" >
        {{ name }}
    </button>
</template>
