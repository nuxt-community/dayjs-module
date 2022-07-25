<template>
  <div>
    <h1>Example: Date formatting</h1>
    <p> Unformatted: {{ new Date() }}</p>
    <p> Formatted with dayjs (template): {{ $dayjs(new Date()).format('DD/MM/YYYY') }}</p>
    <p> Formatted with dayjs (computed): {{ prettyDate }}</p>
    <p> Formatted with dayjs (RelativeTime): {{ $dayjs(new Date()).fromNow() }}</p>
  </div>
</template>

<script setup>
const nuxtApp = useNuxtApp()
const prettyDate = computed(() => nuxtApp.$dayjs(new Date()).format('dddd, MMMM D, YYYY h:mm A'))
</script>
