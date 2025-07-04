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
      label: 'Open Folder'
    },
    {
      label: 'Open Recent'
    },
    {
      label: 'New File'
    },
    {
      label: 'New Window'
    },
    {
      label: 'Open Settings'
    },
    {
      label: 'Open Command Palette'
    },
    {
      label: 'Open Terminal'
    },
    {
      label: 'Search Files'
    },
    {
      label: 'Git Status'
    }
  ]
} 
