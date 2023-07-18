import { describe, expect, vi } from 'vitest'
import { browserPrefix } from '../src/logger/browser.js'
import { Logger } from '../src/logger/index.js'
import type { LogType } from '../src/logger/types.js'

const prefix = 'Zero Dependency'
const styles = (logType: LogType) => browserPrefix(prefix, logType)

describe('logger', (test) => {
  test('should be defined', () => {
    expect(Logger).toBeDefined()
  })
  test('logger logs', () => {
    const info = vi.spyOn(console, 'info')
    const debug = vi.spyOn(console, 'debug')
    const warn = vi.spyOn(console, 'warn')
    const error = vi.spyOn(console, 'error')

    const message = 'Hello World'
    const logger = new Logger(prefix)

    expect(logger.info).toBeDefined()
    expect(logger.debug).toBeDefined()
    expect(logger.warn).toBeDefined()
    expect(logger.error).toBeDefined()

    logger.info(message)
    logger.info(message)
    expect(info).toHaveBeenCalledWith(...styles('info'), message)
    expect(info).toHaveBeenCalledTimes(2)

    logger.debug(message)
    expect(debug).toHaveBeenCalledWith(...styles('debug'), message)
    expect(debug).toHaveBeenCalledTimes(1)

    logger.warn(message)
    expect(warn).toHaveBeenCalledWith(...styles('warn'), message)
    expect(warn).toHaveBeenCalledTimes(1)

    logger.error(message)
    expect(error).toHaveBeenCalledWith(...styles('error'), message)
    expect(error).toHaveBeenCalledTimes(1)
  })
})
