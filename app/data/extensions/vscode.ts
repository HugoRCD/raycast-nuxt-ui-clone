import type { Extension } from '~/types/extensions'

export const vscodeExtension: Extension = {
  id: 'vscode',
  name: 'VSCode',
  meta: {
    suffix: 'VSCode',
    icon: '/extensions/vscode.webp',
    type: 'Command'
  },
  commands: [
    {
      label: 'Open File'
    },
    {
      label: 'Open Settings',
      actions: [
        {
          label: 'Open User Settings',
          icon: 'i-lucide-user',
          onSelect: () => console.log('Open user settings')
        },
        {
          label: 'Open Workspace Settings',
          icon: 'i-lucide-folder',
          onSelect: () => console.log('Open workspace settings')
        }
      ]
    },
    {
      label: 'Open Command Palette'
    },
    {
      label: 'Open Terminal',
      actions: [
        {
          label: 'New Terminal',
          icon: 'i-lucide-plus',
          kbds: ['ctrl', 'shift', '`'],
          onSelect: () => console.log('New terminal')
        },
        {
          label: 'Split Terminal',
          icon: 'i-lucide-split',
          onSelect: () => console.log('Split terminal')
        }
      ]
    },
    {
      label: 'Open Project'
    }
  ]
} 
