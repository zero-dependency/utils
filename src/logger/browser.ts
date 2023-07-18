import type { LogType } from './types.js'

const colors: Record<LogType, string> = {
  info: '#2ecc71',
  debug: '#7f8c8d',
  warn: '#f39c12',
  error: '#c0392b'
}

export function browserPrefix(prefix: string, logType: LogType): string[] {
  return [
    `%c${prefix}`,
    `background:${colors[logType]};border-radius:0.5em;color:white;font-weightbold;padding:2px 0.5em;font-family:cursive`
  ]
}
