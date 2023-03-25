<script setup lang="ts">
const { myLayer } = useAppConfig()
</script>

<template>
  <div class=" bg-red-500">
    <h1>Hello World!</h1>
    <pre>{{ myLayer }}</pre>
  </div>
</template>
