import type { Extension } from '~/types/extensions'

export const systemExtension: Extension = {
  id: 'system',
  name: 'System',
  meta: {
    suffix: 'System',
    icon: '/extensions/github.webp',
    type: 'Command'
  },
  commands: [
    {
      label: 'Empty Trash'
    },
    {
      label: 'Sleep'
    },
    {
      label: 'Restart'
    },
    {
      label: 'Shut Down'
    },
    {
      label: 'Lock Screen'
    },
    {
      label: 'Toggle Hidden Files'
    },
    {
      label: 'Show Desktop'
    },
    {
      label: 'Hide All Windows'
    },
    {
      label: 'Screen Saver'
    },
    {
      label: 'Activity Monitor'
    }
  ]
} 
