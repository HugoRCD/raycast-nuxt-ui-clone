import type { Extension } from '~/types/extensions'

export const colorPickerExtension: Extension = {
  id: 'color-picker',
  name: 'Color Picker',
  meta: {
    suffix: 'Color Picker',
    icon: '/extensions/color-picker.webp',
    type: 'Command'
  },
  commands: [
    {
      label: 'Pick Color from Screen'
    },
    {
      label: 'Generate Color Palette'
    },
    {
      label: 'Convert Color Formats'
    },
    {
      label: 'Color Accessibility Checker'
    }
  ]
} 
