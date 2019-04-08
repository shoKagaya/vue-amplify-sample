<template>
  <transition
    name="modal"
    appear>
    <div
      class="c-modal"
      @click.self.stop="modalClose">
      <div
        :class="{'is-error' : $store.state.isError}"
        class="c-modal__content">
        <slot name="modalContents" />
        <modal-close-btn 
          v-if="!$store.state.isError" 
          @click-event="modalClose" />
      </div>
    </div>
  </transition>
</template>

<script>
import ModalCloseBtn from '../atoms/ModalCloseBtn'

export default {
  name: 'Modal',
  components: {
    ModalCloseBtn
  },
  data() {
    return {
      btnText: "×"
    }
  },
  methods: {
    modalClose() {
      this.$emit('click-event')
    }
  },
}
</script>

<style lang="scss" scoped>
// オーバーレイのトランジション
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.4s;

  // オーバーレイに包含されているモーダルウィンドウのトランジション
  .modal-window {
    transition: opacity 0.4s, transform 0.4s;
  }
}

// モーダルウィンドウが消えた後にオーバーレイを消すディレイ
.modal-leave-active {
  transition: opacity 0.3s ease 0.2s;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
}
</style>
