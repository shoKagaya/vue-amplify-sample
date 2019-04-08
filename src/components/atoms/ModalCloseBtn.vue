<template>
  <div 
    class="c-modal__closeBtn"
    @click="handleClick">×</div>
</template>

<script>
export default {
  name: 'ModalCloseBtn',
  methods: {
    handleClick(e) {
      this.$emit('click-event', e)
    }
  },
}
</script>
