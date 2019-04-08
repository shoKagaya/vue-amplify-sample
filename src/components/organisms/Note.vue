<template>
  <div class="content">
    {{ note }}
  </div>
</template>

<script>
export default {
  name: 'Note',
  props: {
    note: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  background-color: #fff;
  color: #a0a3aa;
  font-size: 1.1rem;
  line-height: 1.545;
  padding: 0 20px 50px;
  position: relative;
}
</style>
