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
      onSelect: () => {
        toast.success('Toggling playback...', {
          description: 'Playing or pausing current track',
          duration: 2000
        })
      }
    },
    {
      label: 'Next Track',
      onSelect: () => {
        toast.success('Skipping to next track...', {
          description: 'Moving to the next song',
          duration: 2000
        })
      }
    },
    {
      label: 'Previous Track',
      onSelect: () => {
        toast.success('Going to previous track...', {
          description: 'Moving to the previous song',
          duration: 2000
        })
      }
    },
    {
      label: 'Toggle Shuffle',
      onSelect: () => {
        toast.success('Toggling shuffle mode...', {
          description: 'Randomizing playback order',
          duration: 2000
        })
      }
    },
    {
      label: 'Toggle Repeat',
      onSelect: () => {
        toast.success('Toggling repeat mode...', {
          description: 'Changing repeat settings',
          duration: 2000
        })
      }
    },
    {
      label: 'Volume Up',
      onSelect: () => {
        toast.success('Increasing volume...', {
          description: 'Turning up the music',
          duration: 1500
        })
      }
    },
    {
      label: 'Volume Down',
      onSelect: () => {
        toast.success('Decreasing volume...', {
          description: 'Turning down the music',
          duration: 1500
        })
      }
    },
    {
      label: 'Mute',
      onSelect: () => {
        toast.warning('Muting audio...', {
          description: 'Silencing playback',
          duration: 1500
        })
      }
    },
    {
      label: 'Search Music',
      onSelect: () => {
        toast.success('Opening search...', {
          description: 'Find your favorite songs and artists',
          duration: 2000
        })
      }
    },
    {
      label: 'Currently Playing',
      onSelect: () => {
        toast.info('Loading current track...', {
          description: 'Showing now playing information',
          duration: 2000
        })
      }
    },
    {
      label: 'Liked Songs',
      onSelect: () => {
        toast.success('Opening Liked Songs...', {
          description: 'Accessing your saved music',
          duration: 2000
        })
      }
    },
    {
      label: 'Recently Played',
      onSelect: () => {
        toast.info('Loading recent tracks...', {
          description: 'Showing your listening history',
          duration: 2000
        })
      }
    }
  ]
} 
