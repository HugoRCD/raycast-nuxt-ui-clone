export { githubExtension } from './github'
export { vscodeExtension } from './vscode'
export { spotifyExtension } from './spotify'

export const allExtensions = [
  async () => (await import('./github')).githubExtension,
  async () => (await import('./vscode')).vscodeExtension,
  async () => (await import('./spotify')).spotifyExtension,
] 
