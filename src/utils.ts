import { useLogger } from '@nuxt/kit'

export const formatLogMessage = (message: string) => `[nuxt:dayjs] ${message}`

export const logger = useLogger('nuxt:dayjs')
