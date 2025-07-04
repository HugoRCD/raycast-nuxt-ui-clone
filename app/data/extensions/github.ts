import type { Extension } from '~/types/extensions'

export const githubExtension: Extension = {
  id: 'github',
  name: 'GitHub',
  meta: {
    suffix: 'Github',
    icon: '/extensions/github.webp',
    type: 'Command'
  },
  commands: [
    {
      label: 'Create issue',
      actions: [
        {
          label: 'Create Bug Report',
          icon: 'i-lucide-bug',
          onSelect: () => console.log('Create bug report')
        },
        {
          label: 'Create Feature Request',
          icon: 'i-lucide-lightbulb',
          onSelect: () => console.log('Create feature request')
        }
      ]
    },
    {
      label: 'Create Pull Request',
      actions: [
        {
          label: 'Draft PR',
          icon: 'i-lucide-file-edit',
          onSelect: () => console.log('Create draft PR')
        }
      ]
    },
    {
      label: 'Create Branch'
    },
    {
      label: 'Notifications',
      actions: [
        {
          label: 'Mark All as Read',
          icon: 'i-lucide-check-check',
          onSelect: () => console.log('Mark all as read')
        }
      ]
    },
    {
      label: 'Open Repository'
    }
  ]
} 
