import type { LogType } from './types.js'

const colors: Record<LogType, string> = {
  info: '\x1b[32m',
  debug: '\x1b[90m',
  warn: '\x1b[33m',
  error: '\x1b[31m'
}

export function nodePrefix(prefix: string, logType: LogType): string {
  return `${colors[logType]}${prefix}\x1b[0m`
}
