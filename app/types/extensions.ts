export interface ExtensionMeta {
  suffix: string
  icon: string
  type: 'Command' | 'Action' | 'Script'
}

export interface ActionItem {
  label: string
  icon?: string
  color?: 'error' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'neutral'
  kbds?: string[]
  type?: 'label' | 'separator'
  onSelect?: () => void
}

export interface Command {
  label: string
  suffix: string
  icon: string
  type: string
  onSelect?: () => void
  shortcut?: string[]
  actions?: ActionItem[]
}

export interface Extension {
  id: string
  name: string
  meta: ExtensionMeta
  commands: Omit<Command, keyof ExtensionMeta>[]
}

export interface CommandGroup {
  id: string
  label: string
  items: Command[]
}

export interface SettingsItem {
  label: string
  icon: string
  onSelect?: () => void
}

export interface SettingsGroup {
  id: string
  label: string
  items: SettingsItem[]
} 
