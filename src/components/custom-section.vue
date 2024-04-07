<template>
  <UIcon :name="iconName" />
  <slot name="header" />
  <UDivider />
  <div>
    <slot />
  </div>
</template>
<script setup lang="ts">
defineProps(['iconName'])
</script>