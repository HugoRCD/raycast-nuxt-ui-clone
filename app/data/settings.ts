import type { SettingsGroup } from '~/types/extensions'

export const settingsMenu: SettingsGroup[] = [
  {
    id: 'raycast',
    label: 'Raycast 1.100.3',
    items: [
      {
        label: 'Send Feedback',
        icon: 'i-lucide:message-circle',
        onSelect: () => toast.success('Opening feedback form...', {
          description: 'Share your thoughts and suggestions',
          duration: 2500
        })
      },
      {
        label: 'Manual',
        icon: 'i-lucide:book',
        onSelect: () => toast.info('Opening manual...', {
          description: 'Learn how to use Raycast effectively',
          duration: 2000
        })
      },
      {
        label: 'Changelog',
        icon: 'i-lucide:history',
        onSelect: () => toast.info('Loading changelog...', {
          description: 'See what\'s new in this version',
          duration: 2000
        })
      },
      {
        label: 'Check for Updates',
        icon: 'i-lucide:download',
        onSelect: () => toast.info('Checking for updates...', {
          description: 'Looking for the latest version',
          duration: 3000
        })
      }
    ]
  },
  {
    id: 'community',
    label: 'Community',
    items: [
      {
        label: 'Discord',
        icon: 'i-simple-icons-discord',
        onSelect: () => toast.success('Opening Discord...', {
          description: 'Join the Raycast community',
          duration: 2000
        })
      },
      {
        label: 'Twitter',
        icon: 'i-simple-icons-twitter',
        onSelect: () => toast.success('Opening Twitter...', {
          description: 'Follow @raycastapp for updates',
          duration: 2000
        })
      }
    ]
  }
] 
