export type MenaceLevel = 'low' | 'medium' | 'high' | 'critical'

export const MENACE_LEVEL_COLORS: Record<MenaceLevel, string> = {
  low: 'background-color: "green", color: "white"',
  medium: 'background-color: "yellow", color: "white"',
  high: 'background-color: "red", color: "white"',
  critical: 'background-color: "orange", color: "white"',
}

export type Spirit = {
  id: string | number
  name: string
  status: 'active' | 'captured' // в целом, тоже можно вынести в отдельный тип, как MENACE_LEVEL_COLORS, но всё же пусть тип будет с минимальным дроблением
  location: string
  menaceLevel: MenaceLevel
}
