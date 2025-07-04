<script setup lang="ts">
const open = ref(true)

const { getCommandGroups, settingsMenu, getActionsForCommand } = useExtensions()
const toast = useToast()

const groups = getCommandGroups()

const highlightedItem = ref()

const actionsDropdownOpen = ref(false)

const actionsDropdownItems = computed(() => {
  return getActionsForCommand(highlightedItem.value?.value)
})

const handleHighlight = (payload: any) => {
  highlightedItem.value = payload
}

const showCommandToast = (command: any) => {
  toast.add({
    title: 'Command Executed',
    description: `"${command.label}" from ${command.suffix}`,
    icon: 'i-lucide-check-circle',
    color: 'success'
  })
}

const handleSelect = (option: any) => {
  if (option.value) {
    showCommandToast(option.value)
  }
}

const handleDoubleClick = (item: any) => {
  showCommandToast(item)
}

const handleRightClick = (event: MouseEvent) => {
  event.preventDefault()
  if (highlightedItem.value) {
    actionsDropdownOpen.value = true
  }
}

const modalUi = {
  content: 'bg-default/70 backdrop-blur-xl border border-accented/70 max-w-2xl h-100 flex flex-col shadow-raycast'
}

const commandPaletteUi = {
  root: 'flex flex-col h-full',
  label: 'text-muted font-medium',
  item: 'data-highlighted:not-data-disabled:before:bg-muted',
  content: 'flex-1 overflow-y-auto'
}

defineShortcuts({
  meta_k: {
    usingInput: true,
    handler: () => {
      actionsDropdownOpen.value = !actionsDropdownOpen.value
    }
  }
})
</script>

<template>
  <UModal v-model:open="open" :overlay="false" :dismissible="false" :ui="modalUi">
    <template #content>
      <UCommandPalette 
        :groups 
        :ui="commandPaletteUi" 
        :fuse="{ resultLimit: 100, fuseOptions: { includeMatches: true } }"
        @highlight="handleHighlight"
        @select="handleSelect"
      >
        <template #item="{ item }">
          <CommandItem 
            :item 
            @right-click="handleRightClick" 
            @double-click="handleDoubleClick"
          />
        </template>

        <template #close>
          <div class="flex items-center gap-2">
            <span class="text-muted font-medium text-sm">
              Ask AI
            </span>
            <UKbd class="text-muted">
              Tab
            </UKbd>
          </div>
        </template>

        <template #footer>
          <CommandFooter
            v-model:actions-open="actionsDropdownOpen"
            :settings-menu
            :actions-items="actionsDropdownItems"
            :actions-disabled="!highlightedItem"
          />
        </template>
      </UCommandPalette>
    </template>
  </UModal>
</template>

<style>
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: var(--ui-bg-accented);
  border-radius: 4px;
  transition: background-color 0.2s ease;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--ui-bg-accented);
}

::-webkit-scrollbar-thumb:active {
  background: var(--ui-bg-accented);
}

::-webkit-scrollbar-corner {
  background: transparent;
}

html {
  scrollbar-width: thin;
  scrollbar-color: var(--ui-bg-accented) transparent;
}
</style>
