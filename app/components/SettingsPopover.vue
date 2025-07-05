<script setup lang="ts">
interface Props {
  settingsMenu: any[]
}

defineProps<Props>()

const handleSettingsSelect = (option: any) => {
  if (option.value && option.value.action) {
    option.value.onSelect()
  }
}
</script>

<template>
  <UPopover 
    :content="{ side: 'top', align: 'start' }"
    :ui="{
      content: 'bg-default/70 backdrop-blur-xl ring ring-accented rounded-lg shadow-raycast-popover'
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
          root: '',
          input: '[&>input]:h-8 [&>input]:text-sm',
          label: 'text-muted font-medium',
          itemLeadingIcon: 'text-highlighted size-4',
          itemLabel: 'text-xs',
          item: 'data-highlighted:not-data-disabled:before:bg-muted'
        }"
        @select="handleSettingsSelect"
      />
    </template>
  </UPopover>
</template> 
