import dayjs from 'dayjs'

export default (ctx: any, inject: (name: string, value: any) => void) => {
  ctx.$dayjs = dayjs
  inject('dayjs', dayjs)
}
