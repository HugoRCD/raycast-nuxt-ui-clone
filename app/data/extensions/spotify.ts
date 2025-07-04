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
      label: 'Play/Pause'
    },
    {
      label: 'Next Track'
    },
    {
      label: 'Previous Track'
    },
    {
      label: 'Toggle Shuffle'
    },
    {
      label: 'Toggle Repeat'
    },
    {
      label: 'Volume Up'
    },
    {
      label: 'Volume Down'
    },
    {
      label: 'Mute'
    },
    {
      label: 'Search Music'
    },
    {
      label: 'Currently Playing'
    },
    {
      label: 'Liked Songs'
    },
    {
      label: 'Recently Played'
    }
  ]
} 
