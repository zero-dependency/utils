import { isBrowser } from '../guards.js'
import { browserPrefix } from './browser.js'
import { nodePrefix } from './node.js'
import type { LogType } from './types.js'

type Log = (...args: any[]) => void

export class Logger {
  #prefix: string

  info: Log
  debug: Log
  warn: Log
  error: Log

  constructor(prefix: string) {
    this.#prefix = prefix

    for (const type of [
      'info',
      'debug',
      'warn',
      'error'
    ] as LogType[]) {
      this[type] = (...args: any[]) => this.print(type, ...args)
    }
  }

  private print(type: LogType, ...args: unknown[]): void {
    const log = console[type]
    if (isBrowser()) {
      log(browserPrefix(this.#prefix, type), ...args)
    } else {
      log(nodePrefix(this.#prefix, type), ...args)
    }
  }
}
