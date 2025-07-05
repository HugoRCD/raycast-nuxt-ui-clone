import type { Command, CommandGroup, Extension, ActionItem } from '~/types/extensions'
import { allExtensions } from '~/data/extensions'
import { settingsMenu } from '~/data/settings'

export const useExtensions = () => {
  const extensions = ref<Extension[]>(allExtensions)

  const transformExtensionCommands = (extension: Extension): Command[] => {
    return extension.commands.map(command => ({
      ...command,
      ...extension.meta
    }))
  }

  const getExtensionCommands = (extensionId: string): Command[] => {
    const extension = extensions.value.find(ext => ext.id === extensionId)
    return extension ? transformExtensionCommands(extension) : []
  }

  const getAllCommands = (): Command[] => {
    return extensions.value.flatMap(extension => transformExtensionCommands(extension))
  }

  const getRandomItems = <T>(array: T[], count: number): T[] => {
    const shuffled = [...array].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, count)
  }

  const generateRandomGroups = () => {
    const allCommands = getAllCommands()
    const randomFavorites = getRandomItems(allCommands, 2)
    
    const availableForSuggestions = allCommands.filter(cmd => 
      !randomFavorites.some(fav => fav.label === cmd.label && fav.suffix === cmd.suffix)
    )
    const randomSuggestions = getRandomItems(availableForSuggestions, 1)
    
    return { randomFavorites, randomSuggestions }
  }

  const getFavoritesGroup = (randomFavorites?: Command[]): CommandGroup => {
    const favorites = randomFavorites || generateRandomGroups().randomFavorites
    
    return {
      id: 'favorites',
      label: 'Favorites',
      items: favorites
    }
  }

  const getSuggestionsGroup = (randomSuggestions?: Command[]): CommandGroup => {
    const suggestions = randomSuggestions || generateRandomGroups().randomSuggestions
    
    return {
      id: 'suggestions',
      label: 'Suggestions',
      items: suggestions
    }
  }

  const getCommandsGroup = (): CommandGroup => {
    return {
      id: 'commands',
      label: 'Commands',
      items: getAllCommands()
    }
  }

  const getCommandGroups = (): CommandGroup[] => {
    const { randomFavorites, randomSuggestions } = generateRandomGroups()
    
    return [
      getFavoritesGroup(randomFavorites),
      getSuggestionsGroup(randomSuggestions),
      getCommandsGroup()
    ]
  }

  const addExtension = (extension: Extension) => {
    if (!extensions.value.find(ext => ext.id === extension.id)) {
      extensions.value.push(extension)
    }
  }

  const removeExtension = (extensionId: string) => {
    const index = extensions.value.findIndex(ext => ext.id === extensionId)
    if (index > -1) {
      extensions.value.splice(index, 1)
    }
  }

  const getExtension = (extensionId: string): Extension | undefined => {
    return extensions.value.find(ext => ext.id === extensionId)
  }

  const getRaycastActions = (command: Command): ActionItem[][] => {
    return [
      [
        {
          label: 'Open Command',
          icon: 'i-lucide-corner-up-right',
          onSelect: () => toast.success(`Opening "${command.label}"...`, {
            description: 'Executing command in primary action',
            duration: 2000
          })
        },
        {
          label: 'Reset Ranking',
          icon: 'i-lucide-rotate-ccw',
          onSelect: () => toast.success('Ranking reset', {
            description: `"${command.label}" moved to default position`,
            duration: 2500
          })
        }
      ],
      [
        {
          label: 'Move Down in Favorites',
          icon: 'i-lucide-arrow-down',
          kbds: ['meta', 'down'],
          onSelect: () => toast.info('Moved down in favorites', {
            description: `"${command.label}" priority decreased`,
            duration: 2000
          })
        },
        {
          label: 'Remove from Favorites',
          icon: 'i-lucide-heart-off',
          kbds: ['meta', 'f'],
          onSelect: () => toast.warning('Removed from favorites', {
            description: `"${command.label}" no longer in favorites`,
            duration: 2500
          })
        }
      ],
      [
        {
          label: 'Copy Deeplink',
          icon: 'i-lucide-link',
          kbds: ['meta', 'c'],
          onSelect: () => toast.success('Deeplink copied!', {
            description: `"${command.label}" link copied to clipboard`,
            duration: 2500
          })
        }
      ],
      [
        {
          label: 'Configure Command',
          icon: 'i-lucide-settings',
          kbds: ['meta', 'comma'],
          onSelect: () => toast.info('Opening command settings...', {
            description: `Configure "${command.label}" preferences`,
            duration: 2000
          })
        },
        {
          label: 'Configure Extension',
          icon: 'i-lucide-sliders',
          kbds: ['meta', 'comma'],
          onSelect: () => toast.info('Opening extension settings...', {
            description: `Configure ${command.suffix} extension`,
            duration: 2000
          })
        }
      ],
      [
        {
          label: 'Disable Command',
          icon: 'i-lucide-ban',
          color: 'error',
          kbds: ['meta', 'd'],
          onSelect: () => toast.error('Command disabled', {
            description: `"${command.label}" has been disabled`,
            duration: 3000
          })
        }
      ]
    ]
  }

  const getActionsForCommand = (command?: Command): ActionItem[][] => {
    if (!command) {
      return [[]]
    }

    const extensionHeader: ActionItem = {
      label: command.label,
      type: 'label'
    }

    const raycastActions = getRaycastActions(command)
    
    return [
      [extensionHeader],
      ...raycastActions
    ]
  }

  return {
    extensions: readonly(extensions),
    settingsMenu,
    getExtensionCommands,
    getAllCommands,
    getFavoritesGroup,
    getSuggestionsGroup,
    getCommandsGroup,
    getCommandGroups,
    addExtension,
    removeExtension,
    getExtension,
    getRaycastActions,
    getActionsForCommand
  }
}
