<template>
  <div>
    <p data-test-id="advancedFormat">{{ advancedFormat }}</p>
    <p data-test-id="localized">{{ localized }}</p>
  </div>
</template>
<script>
export default {
  asyncData(context) {
    return {
      advancedFormat: context
        .$dayjs('2018-08-16')
        .format('Do'),
      localized: context
        .$dayjs('2018-08-16')
        .format('ll')
    }
  }
}
</script>