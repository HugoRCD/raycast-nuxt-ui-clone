<script setup lang="ts">
interface Props {
  settingsMenu: any[]
  actionsItems: any[]
  actionsDisabled: boolean
}

defineProps<Props>()

const actionsOpen = defineModel<boolean>('actionsOpen', { required: true })
</script>

<template>
  <div class="flex items-center justify-between gap-2">
    <SettingsPopover :settings-menu />
    
    <div class="flex items-center gap-1">
      <UButton color="neutral" variant="ghost" label="Open Command" class="text-dimmed" size="xs">
        <template #trailing>
          <UKbd value="enter" />
        </template>
      </UButton>
      <USeparator orientation="vertical" class="h-4" />
      <ActionsDropdown
        v-model:open="actionsOpen"
        :items="actionsItems"
        :disabled="actionsDisabled"
      />
    </div>
  </div>
</template> 
