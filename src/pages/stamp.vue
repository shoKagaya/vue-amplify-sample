<template>
  <div>
    <Loading />
    <template
      v-if="!$store.state.isError"
      v-show="$store.state.isCompletedLoading">
      <section class="stamp">
        <Background-Image
          :background-image="stamp.imageUrlBlur"
        />
        <Stamp :stamp="stamp" />
        <Animations
          v-if="$store.state.isAnimationCompleted"
          :status="stamp.status" />
      </section>
      <Rewards
        :stamp-card-rewards="rewards"
        :reward-id="stamp.rewardId"
        :is-accomplished="stamp.isAccomplished"
        :modal-data="modalData"
        @modalClose="modalClose"
        @modalActive="modalActive"
        @onClickModalBtn="onClickModalBtn"
      />
    </template>
    <Modal v-else>
      <template slot="modalContents">
        <p>{{ $store.state.errorMsg }}</p>
        <button
          v-if="$store.state.visibleBtnType.ok"
          class="c-btn u-mb0"
          @click="modalClose">OK</button>
        <button
          v-if="$store.state.visibleBtnType.retry && $store.state.isCompletedLoading === true"
          class="c-btn u-mb0"
          @click="useCoupon($store.state.usedItems)"
        >再試行</button>
        <a
          v-if="$store.state.visibleBtnType.login"
          href="fmid-app://open-chance-top"
          class="c-btn u-mb0">再ログイン</a>
      </template>
    </Modal>
  </div>
</template>

<script>
import script from '../scripts/stamp'

export default {
  mixins: [script]
}
</script>

<style lang="scss" scoped>
.stamp {
  position: relative;
}
</style>
