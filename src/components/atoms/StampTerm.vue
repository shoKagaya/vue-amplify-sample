<template>
  <div class="dateArea">スタンプ取得期間：{{ term }}</div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  name: 'StampTerm',
  props: {
    startDate:{
      type: String,
      default: ''
    },
    endDate:{
      type: String,
      default: ''
    }
  },
  computed: {
    term() {
      return dayjs(this.startDate).format('YYYY/MM/DD') + '〜' + dayjs(this.endDate).format('YYYY/MM/DD')
    }
  }
}
</script>

<style lang="scss" scoped>
.dateArea {
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 20px;
}
</style>
