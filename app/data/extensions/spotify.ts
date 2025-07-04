import type { Extension } from '~/types/extensions'

export const spotifyExtension: Extension = {
  id: 'spotify',
  name: 'Spotify',
  meta: {
    suffix: 'Spotify',
    icon: '/extensions/spotify.webp',
    type: 'Command'
  },
  commands: [
    {
      label: 'Play/Pause',
      actions: [
        {
          label: 'Add to Queue',
          icon: 'i-lucide-list-plus',
          onSelect: () => console.log('Add to queue')
        },
        {
          label: 'Save to Library',
          icon: 'i-lucide-heart',
          color: 'success',
          onSelect: () => console.log('Save to library')
        }
      ]
    },
    {
      label: 'Next'
    },
    {
      label: 'Previous'
    },
    {
      label: 'Shuffle'
    },
    {
      label: 'Repeat'
    },
    {
      label: 'Volume Up'
    },
    {
      label: 'Volume Down',
      actions: [
        {
          label: 'Mute',
          icon: 'i-lucide-volume-x',
          color: 'warning',
          kbds: ['m'],
          onSelect: () => console.log('Mute')
        }
      ]
    }
  ]
} 
