<template>
  <header>
    <UHorizontalNavigation class="justify-center" :links="links" />
  </header>
  <UContainer>
    <slot />
  </UContainer>
  <footer></footer>
</template>
<script setup="ts">
const links = [
  { label: 'About', to: '/' },
  { label: 'Skills', to: '/skills' },
  { label: 'Contacts', to: '/contacts' }
]
</script>