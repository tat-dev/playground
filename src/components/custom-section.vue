<template>
  <div class="text-xl">
    <UIcon :name="iconName" />
    <slot name="header" />
  </div>
  <UDivider />
  <div>
    <slot />
  </div>
</template>
<script setup lang="ts">
defineProps(['iconName'])
</script>