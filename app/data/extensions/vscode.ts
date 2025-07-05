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
      label: 'Open File',
      onSelect: () => {
        toast.success('Opening file dialog...', {
          description: 'Browse and select files to open',
          duration: 2000
        })
      }
    },
    {
      label: 'Open Folder',
      onSelect: () => {
        toast.success('Opening folder dialog...', {
          description: 'Select a folder to open as workspace',
          duration: 2000
        })
      }
    },
    {
      label: 'Open Recent',
      onSelect: () => {
        toast.info('Loading recent files...', {
          description: 'Showing recently opened files and folders',
          duration: 2000
        })
      }
    },
    {
      label: 'New File',
      onSelect: () => {
        toast.success('Creating new file...', {
          description: 'Opening empty file editor',
          duration: 2000
        })
      }
    },
    {
      label: 'New Window',
      onSelect: () => {
        toast.success('Opening new window...', {
          description: 'Creating new VSCode window',
          duration: 2000
        })
      }
    },
    {
      label: 'Open Settings',
      onSelect: () => {
        toast.info('Opening settings...', {
          description: 'Accessing VSCode preferences',
          duration: 2000
        })
      }
    },
    {
      label: 'Open Command Palette',
      onSelect: () => {
        toast.info('Opening command palette...', {
          description: 'Accessing all VSCode commands',
          duration: 2000
        })
      }
    },
    {
      label: 'Open Terminal',
      onSelect: () => {
        toast.success('Opening terminal...', {
          description: 'Creating new integrated terminal',
          duration: 2000
        })
      }
    },
    {
      label: 'Search Files',
      onSelect: () => {
        toast.success('Opening search...', {
          description: 'Search across all files in workspace',
          duration: 2000
        })
      }
    },
    {
      label: 'Git Status',
      onSelect: () => {
        toast.info('Checking Git status...', {
          description: 'Loading source control panel',
          duration: 2000
        })
      }
    }
  ]
} 
