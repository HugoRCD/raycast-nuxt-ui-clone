<script setup lang="ts">
const open = ref(true)

const githubMeta = {
  suffix: 'Github',
  icon: '/extensions/github.webp',
  type: 'Command'
}

const vscodeMeta = {
  suffix: 'VSCode',
  icon: '/extensions/vscode.webp',
  type: 'Command'
}

const spotifyMeta = {
  suffix: 'Spotify',
  icon: '/extensions/spotify.webp',
  type: 'Command'
}

const githubCommands = [
  {
    label: 'Create issue',
    ...githubMeta
  },
  {
    label: 'Create Pull Request',
    ...githubMeta
  },
  {
    label: 'Create Branch',
    ...githubMeta
  },
  {
    label: 'Notifications',
    ...githubMeta
  },
  {
    label: 'Open Repository',
    ...githubMeta
  }
]

const vscodeCommands = [
  {
    label: 'Open File',
    ...vscodeMeta
  },
  {
    label: 'Open Settings',
    ...vscodeMeta
  },
  {
    label: 'Open Command Palette',
    ...vscodeMeta
  },
  {
    label: 'Open Terminal',
    ...vscodeMeta
  }
]

const spotifyCommands = [
  {
    label: 'Play/Pause',
    ...spotifyMeta
  },
  {
    label: 'Next',
    ...spotifyMeta
  },
  {
    label: 'Previous',
    ...spotifyMeta
  },
  {
    label: 'Shuffle',
    ...spotifyMeta
  },
  {
    label: 'Repeat',
    ...spotifyMeta
  },
  {
    label: 'Volume Up',
    ...spotifyMeta
  },
  {
    label: 'Volume Down',
    ...spotifyMeta
  }
]

const groups = [
  {
    id: 'favorites',
    label: 'Favorites',
    items: [
      {
        label: 'Open Project',
        ...vscodeMeta
      },
      {
        label: 'Notifications',
        ...githubMeta
      }
    ]
  },
  {
    id: 'suggestions',
    label: 'Suggestions',
    items: [
      {
        label: 'Open Project',
        ...vscodeMeta
      },
    ],
  },
  {
    id: 'commands',
    label: 'Commands',
    items: [
      ...githubCommands,
      ...vscodeCommands,
      ...spotifyCommands
    ]
  }
]

const settingsMenu = [
  {
    id: 'raycast',
    label: 'Raycast 1.100.3',
    items: [
      {
        label: 'Send Feedback',
        icon: 'i-lucide:message-circle'
      },
      {
        label: 'Manual',
        icon: 'i-lucide:book'
      },
      {
        label: 'Changelog',
        icon: 'i-lucide:history'
      },
      {
        label: 'Check for Updates',
        icon: 'i-lucide:download'
      }
    ]
  },
  {
    id: 'community',
    label: 'Community',
    items: [
      {
        label: 'Discord',
        icon: 'i-simple-icons-discord'
      },
      {
        label: 'Twitter',
        icon: 'i-simple-icons-twitter'
      }
    ]
  }
]

const settingsSearch = ref([])

const modalUi = {
  content: 'bg-default/70 backdrop-blur-xl ring ring-accented max-w-2xl'
}

const commandPaletteUi = {
  root: 'shadow-3xl',
  label: 'text-muted font-medium',
  item: 'data-highlighted:not-data-disabled:before:bg-muted'
}
</script>

<template>
  <UModal v-model:open="open" :overlay="false" :dismissible="false" :ui="modalUi">
    <template #content>
      <UCommandPalette :groups class="h-100" :ui="commandPaletteUi">
        <template #item="{ item }">
          <div class="flex items-center justify-between w-full p-1">
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
              <UButton icon="i-simple-icons-raycast" variant="ghost" color="neutral" size="sm" />
              <template #content>
                <UCommandPalette
                  v-model="settingsSearch"
                  placeholder="Search settings..."
                  :groups="settingsMenu"
                  :ui="{ input: '[&>input]:h-8 [&>input]:text-sm', label: 'text-muted font-medium', itemLeadingIcon: 'text-highlighted' }"
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
              <UButton color="neutral" variant="ghost" label="Actions" class="text-dimmed" size="xs">
                <template #trailing>
                  <UKbd value="meta" />
                  <UKbd value="k" />
                </template>
              </UButton>
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
