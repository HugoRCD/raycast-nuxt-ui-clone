<script setup lang="ts">
const open = ref(true)

const { getCommandGroups, settingsMenu, getActionsForCommand } = useExtensions()

const groups = getCommandGroups()

const highlightedItem = ref()

const actionsDropdownOpen = ref(false)

const actionsDropdownItems = computed(() => {
  return getActionsForCommand(highlightedItem.value?.value)
})

const handleHighlight = (payload: any) => {
  highlightedItem.value = payload
}

const handleRightClick = (event: MouseEvent) => {
  event.preventDefault()
  if (highlightedItem.value) {
    actionsDropdownOpen.value = true
  }
}

const settingsSearch = ref([])

const modalUi = {
  content: 'bg-default/70 backdrop-blur-xl ring ring-accented max-w-2xl'
}

const commandPaletteUi = {
  root: 'shadow-3xl',
  label: 'text-muted font-medium',
  item: 'data-highlighted:not-data-disabled:before:bg-muted'
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
        class="h-100" 
        :ui="commandPaletteUi" 
        :fuse="{ resultLimit: 100, matchAllWhenSearchEmpty: true }"
        @highlight="handleHighlight"
      >
        <template #item="{ item }">
          <div class="flex items-center justify-between w-full p-1" @contextmenu="handleRightClick">
            <div class="flex items-center gap-2.5">
              <div class="flex items-center gap-2.5">
                <NuxtImg :src="item.icon!" class="size-5" />
                <span>{{ item.label }}</span>
              </div>
              <span class="text-muted font-medium">
                {{ item.suffix }}
              </span>
            </div>
            <span class="text-muted text-xs font-medium">
              {{ item.type }}
            </span>
          </div>
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
          <div class="flex items-center justify-between gap-2">
            <UPopover :content="{ side: 'top', align: 'start' }">
              <UButton
                icon="i-simple-icons-raycast"
                variant="ghost"
                color="neutral"
                size="sm"
                class="text-dimmed"
              />
              <template #content>
                <UCommandPalette
                  v-model="settingsSearch"
                  placeholder="Search settings..."
                  :groups="settingsMenu"
                  :ui="{ 
                    input: '[&>input]:h-8 [&>input]:text-sm',
                    label: 'text-muted font-medium',
                    itemLeadingIcon: 'text-highlighted size-4',
                    itemLabel: 'txet-sm',
                    item: 'data-highlighted:not-data-disabled:before:bg-muted'
                  }"
                />
              </template>
            </UPopover>
            <div class="flex items-center gap-1">
              <UButton color="neutral" variant="ghost" label="Open Command" class="text-dimmed" size="xs">
                <template #trailing>
                  <UKbd value="enter" />
                </template>
              </UButton>
              <USeparator orientation="vertical" class="h-4" />
              <UDropdownMenu
                v-model:open="actionsDropdownOpen" 
                :items="actionsDropdownItems"
                :disabled="!highlightedItem"
                :content="{ side: 'top', align: 'end' }"
              >
                <UButton color="neutral" variant="ghost" label="Actions" class="text-dimmed" size="xs">
                  <template #trailing>
                    <UKbd value="meta" />
                    <UKbd value="k" />
                  </template>
                </UButton>
              </UDropdownMenu>
            </div>
          </div>
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
