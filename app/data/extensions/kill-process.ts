import type { Extension } from '~/types/extensions'

export const killProcessExtension: Extension = {
  id: 'kill-process',
  name: 'Kill Process',
  meta: {
    suffix: 'Kill Process',
    icon: '/extensions/kill-process.webp',
    type: 'Command'
  },
  commands: [
    {
      label: 'Kill Process'
    }
  ]
} 
