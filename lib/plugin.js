import dayjs from 'dayjs'

<%= options.locales.map(l => `import 'dayjs/locale/${l}'`).join('\n') %>
<%= options.plugins.map(l => `import ${l.replace(/[^A-Za-z]/g, '_')} from 'dayjs/plugin/${l}'`).join('\n') %>

<%= options.plugins.map(l => `dayjs.extend(${l.replace(/[^A-Za-z]/g, '_')})`).join('\n') %>

<% if (options.defaultLocale) { %>
dayjs.locale('<%= options.defaultLocale %>')
<% } %>

<% if (options.defaultTimeZone) { %>
dayjs.tz.setDefault('<%= options.defaultTimeZone %>')
<% } %>

export default (context, inject) => {
  context.$dayjs = dayjs
  inject('dayjs', dayjs)
}
