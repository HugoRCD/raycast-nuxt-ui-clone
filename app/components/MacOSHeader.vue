<script setup lang="ts">
const githubUrl = 'https://github.com/hugorcd/raycast-nuxt-ui-clone'
const currentTime = ref(Date.now())

onMounted(() => {
  const interval = setInterval(() => {
    currentTime.value = Date.now()
  }, 1000)
  
  onUnmounted(() => {
    clearInterval(interval)
  })
})
</script>

<template>
  <div class="isolate fixed top-0 left-0 right-0 z-[9999] h-7 bg-default/20 backdrop-blur-md border-b border-default/10 flex items-center justify-between px-2 text-sm font-medium">
    <div class="flex items-center gap-3 text-highlighted">
      <svg class="size-4 fill-(--ui-text-highlighted)" viewBox="0 0 24 24">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
      <span class="hidden sm:block">Raycast Clone</span>
      <span class="hidden sm:block">File</span>
      <span class="hidden sm:block">Edit</span>
      <span class="hidden sm:block">View</span>
      <span class="hidden sm:block">Go</span>
      <span class="hidden sm:block">Window</span>
      <span class="hidden sm:block">Help</span>
    </div>

    <div class="flex items-center gap-2">
      <UButton
        :to="githubUrl"
        external
        target="_blank"
        variant="link"
        size="xs"
        icon="i-simple-icons-github"
        label="GitHub Repo"
        class="text-highlighted hover:text-highlighted/70 active:text-highlighted/70 pointer-events-auto"
      />
      <USeparator orientation="vertical" class="-ml-2 h-4" />
      <NuxtTime 
        :datetime="currentTime"
        locale="fr-FR"
        weekday="short"
        month="short"
        day="numeric"
        hour="2-digit"
        minute="2-digit"
        :hour12="false"
        class="text-highlighted font-medium"
      />
      <div class="flex items-center gap-1">
        <div class="w-6 h-3 border border-(--ui-text-highlighted)/40 rounded-sm bg-default/10 relative">
          <div class="absolute inset-0.5 bg-(--ui-text-highlighted)/60 rounded-sm" style="width: 80%" />
        </div>
        <svg class="size-3 fill-(--ui-text-highlighted)" viewBox="0 0 24 24">
          <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.07 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
        </svg>
      </div>
    </div>
  </div>
</template> 
