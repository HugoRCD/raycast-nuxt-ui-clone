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
      label: 'Pick Color from Screen',
      onSelect: () => {
        toast.success('Activating color picker...', {
          description: 'Click anywhere to capture colors',
          duration: 3000
        })
      }
    },
    {
      label: 'Generate Color Palette',
      onSelect: () => {
        toast.success('Generating color palette...', {
          description: 'Creating harmonious color combinations',
          duration: 3000
        })
      }
    },
    {
      label: 'Convert Color Formats',
      onSelect: () => {
        toast.info('Opening color converter...', {
          description: 'Convert between HEX, RGB, HSL and more',
          duration: 2500
        })
      }
    },
    {
      label: 'Color Accessibility Checker',
      onSelect: () => {
        toast.info('Checking color accessibility...', {
          description: 'Analyzing contrast ratios and WCAG compliance',
          duration: 3000
        })
      }
    }
  ]
} 
