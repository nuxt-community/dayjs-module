import consola from 'consola'

export const formatLogMessage = (message: string) => `[@nuxtjs/dayjs] ${message}`

export const log = (type: 'error' | 'warn' | 'log' | 'info', message: string) => consola[type](formatLogMessage(message))
