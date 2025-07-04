import type { Extension } from '~/types/extensions'

export const raycastNotesExtension: Extension = {
  id: 'raycast-notes',
  name: 'Raycast Notes',
  meta: {
    suffix: 'Raycast Notes',
    icon: '/extensions/vscode.webp',
    type: 'Command'
  },
  commands: [
    {
      label: 'Create Note'
    },
    {
      label: 'Search Notes'
    },
    {
      label: 'Recent Notes'
    },
    {
      label: 'Append to Note'
    },
    {
      label: 'Create Daily Note'
    },
    {
      label: 'Create Meeting Note'
    },
    {
      label: 'Export Note'
    },
    {
      label: 'Pin Note'
    }
  ]
} 
