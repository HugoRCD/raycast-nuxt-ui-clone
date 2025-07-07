<script setup lang="ts">
import { Toaster } from 'vue-sonner'
import 'vue-sonner/style.css'

useSeoMeta({
  title: 'Raycast Nuxt UI Clone',
  description: 'A Raycast command palette clone built with Nuxt UI to demonstrate component customization capabilities',
  ogTitle: 'Raycast Nuxt UI Clone',
  ogDescription: 'A Raycast command palette clone built with Nuxt UI to demonstrate component customization capabilities',
  ogImage: 'https://raycast-nuxt-ui.hrcd.fr/og.png',
  ogUrl: 'https://raycast-nuxt-ui.hrcd.fr',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Raycast Nuxt UI Clone',
  twitterDescription: 'A Raycast command palette clone built with Nuxt UI to demonstrate component customization capabilities',
  twitterImage: 'https://raycast-nuxt-ui.hrcd.fr/og.png'
})
</script>

<template>
  <UApp>
    <NuxtPage />
    <Toaster position="top-center" />
  </UApp>
</template>
