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
      label: 'Create issue'
    },
    {
      label: 'Create Pull Request'
    },
    {
      label: 'Create Branch'
    },
    {
      label: 'Notifications'
    },
    {
      label: 'Open Repository'
    },
    {
      label: 'My Issues'
    },
    {
      label: 'My Pull Requests'
    },
    {
      label: 'Search Repositories'
    }
  ]
} 
