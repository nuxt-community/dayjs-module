<template>
  <div>
    {{ now }}
    <br>
    {{ $dayjs().format('YYYY/MM/DD/dddd') }}
  </div>
</template>

<script setup lang="ts">
const { $dayjs } = useNuxtApp()
const now = $dayjs().format('YYYY/MM/DD/dddd')
</script>
