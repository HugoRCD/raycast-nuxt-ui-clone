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
      onSelect: () => {
        toast.success('Creating new issue...', {
          description: 'Opening GitHub issue template',
          duration: 3000
        })
      }
    },
    {
      label: 'Create Pull Request',
      onSelect: () => {
        toast.success('Creating Pull Request...', {
          description: 'Opening GitHub PR template',
          duration: 3000
        })
      }
    },
    {
      label: 'Create Branch',
      onSelect: () => {
        toast.success('Creating new branch...', {
          description: 'Setting up Git branch workflow',
          duration: 3000
        })
      }
    },
    {
      label: 'Notifications',
      onSelect: () => {
        toast.info('Checking notifications...', {
          description: 'Fetching your GitHub notifications',
          duration: 2500
        })
      }
    },
    {
      label: 'Open Repository',
      onSelect: () => {
        toast.success('Opening repository...', {
          description: 'Navigating to your GitHub repo',
          duration: 2500
        })
      }
    },
    {
      label: 'My Issues',
      onSelect: () => {
        toast.info('Loading your issues...', {
          description: 'Fetching assigned and created issues',
          duration: 2500
        })
      }
    },
    {
      label: 'My Pull Requests',
      onSelect: () => {
        toast.info('Loading your PRs...', {
          description: 'Fetching your pull requests',
          duration: 2500
        })
      }
    },
    {
      label: 'Search Repositories',
      onSelect: () => {
        toast.success('Searching repositories...', {
          description: 'Opening GitHub search interface',
          duration: 2000
        })
      }
    }
  ]
} 
