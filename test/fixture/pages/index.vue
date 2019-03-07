<template>
  <div>
    <p data-test-id="birthday">{{ myBirthDay }}</p>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    return {
      myBirthDay: context.$dayjs('1998-04-13').format('YYYY/MM/DD')
    }
  }
}
</script>
