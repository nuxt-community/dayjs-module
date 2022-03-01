import dayjs from 'dayjs'
// @ts-ignore
import '#build/dayjs.config.mjs'

export default function (_, inject) {
  inject('dayjs', dayjs)
}
