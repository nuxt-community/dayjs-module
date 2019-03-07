<template>
  <div>
    <p data-test-id="birthday">{{ myBirthDay }}</p>
    <button type="button" @click="handleChangeBirthDayToBro">
      change birthday
    </button>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    return {
      myBirthDay: context.$dayjs('1998-04-13').format('YYYY/MM/DD')
    }
  },
  methods: {
    handleChangeBirthDayToBro() {
      this.myBirthDay = this.$dayjs('1995-12-18').format('YYYY/MM/DD')
    }
  }
}
</script>
