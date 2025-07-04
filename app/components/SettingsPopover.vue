<script setup lang="ts">
interface Props {
  settingsMenu: any[]
}

defineProps<Props>()
</script>

<template>
  <UPopover 
    :content="{ side: 'top', align: 'start' }"
    :ui="{
      content: 'shadow-3xl bg-default/70 backdrop-blur-xl ring ring-accented rounded-lg'
    }"
  >
    <UButton
      icon="i-simple-icons-raycast"
      variant="ghost"
      color="neutral"
      size="sm"
      class="text-dimmed"
    />
    <template #content>
      <UCommandPalette
        placeholder="Search settings..."
        :groups="settingsMenu"
        :ui="{
          root: 'shadow-3xl',
          input: '[&>input]:h-8 [&>input]:text-sm',
          label: 'text-muted font-medium',
          itemLeadingIcon: 'text-highlighted size-4',
          itemLabel: 'text-xs',
          item: 'data-highlighted:not-data-disabled:before:bg-muted'
        }"
      />
    </template>
  </UPopover>
</template> 
