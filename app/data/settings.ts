import type { SettingsGroup } from '~/types/extensions'

export const settingsMenu: SettingsGroup[] = [
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
