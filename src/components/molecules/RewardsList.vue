<template>
  <section class="rewards__coupon">
    <render-title
      :text="rewardsMeta.rowNumberTitle.text"
      :title-level="rewardsMeta.rowNumberTitle.titleLevel"
      :has-icon="true"
      class="rewards__rowNumberTitle">
      <span
        :style="{backgroundImage: `url(${incentiveStatus})`}"
        class="rewards__rowNumberTitle__icon"
      >icon</span>
    </render-title>
    <div class="rewards__couponList">
      <div
        v-for="(coupon, index) in rewardsList"
        :key="index"
        class="rewards__couponItem">
        <div
          v-if="index !== 0"
          class="rewards__couponLine">or</div>
        <render-img
          v-if="!coupon.imageUrl"
          :path="rewardsMeta.thumbnailNone"
          :alt-text="rewardsMeta.thumbnailNoneAlt"
        />
        <render-img
          v-else
          :path="coupon.imageUrl"
          :alt-text="coupon.name"
        />
        <render-text
          :text="coupon.name"
          :element="'p'"
          class="rewards__couponText" />
      </div>
    </div>
    <btn
      v-if="!rewardId && isAccomplished"
      :btn-type="rewardsMeta.btnType"
      :text="rewardsMeta.btnText"
      @click-event="modalActive(rewardsList)"/>
  </section>
</template>

<script>
import { rewardsMeta } from '@/const/rewards'
import Btn from '../atoms/Btn'
import RenderImg from '../atoms/RenderImg'
import RenderTitle from '../atoms/RenderTitle'
import RenderText from '../atoms/RenderText'
import iconOpened from '@/assets/img/rewards__rowNumberTitle__icon--opened.svg'
import iconGet from '@/assets/img/rewards__rowNumberTitle__icon--get.svg'
import iconNon from '@/assets/img/rewards__rowNumberTitle__icon--non.svg'

export default {
  name: 'RewardsList',
  components:{
    Btn,
    RenderImg,
    RenderTitle,
    RenderText
  },
  props: {
    rewardsList: {
      type: Array,
      default:() => []
    },
    rewardId: {
      type: String,
      default: ''
    },
    isAccomplished: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      rewardsMeta,
      iconOpened,
      iconGet,
      iconNon
    }
  },
  computed: {
    incentiveStatus() {
      if (this.rewardId && this.isAccomplished) {
        return this.iconOpened
      } else if (!this.rewardId && this.isAccomplished) {
        return this.iconGet
      } else {
        return this.iconNon
      }
    }
  },
  methods:{
    modalActive(modalData) {
      this.$emit('modalActive', modalData)
    },
  }
}
</script>

<style lang="scss" scoped>
.rewards__rowNumberTitle {
  background-repeat: no-repeat;
  color: #00ab4d;
  font-weight: bold;
  margin: auto;
  margin-bottom: 20px;
  text-align: center;
}

.rewards__rowNumberTitle__icon {
  background: no-repeat;
  background-position: center;
  display: inline-block;
  font-size: 0;
  height: 21px;
  margin-right: 5px;
  position: relative;
  top: -2px;
  vertical-align: middle;
  width: 26px;
}

.rewards__coupon {
  border-radius: 15px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, .15);
  margin-bottom: 15px;
  padding: 20px 0 10px;

  &:last-child {
    margin-bottom: 0;
  }
}

.rewards__couponItem {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 10px;
  padding: 0 20px;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 20px;
  }

  > img {
    max-width: 40px;
    width: 15%;
  }
}

.rewards__couponLine {
  color: #00ab4d;
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 1;
  margin: 0 auto 10px;
  position: relative;
  text-align: center;
  width: 100%;

  &::before {
    background: url(~@/assets/img/rewards__couponLine.svg) no-repeat;
    background-position: center;
    background-size: 100%;
    content: '';
    height: 2px;
    left: 0;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    width: 44%;
  }

  &::after {
    background: url(~@/assets/img/rewards__couponLine.svg) no-repeat;
    background-position: center;
    background-size: 100%;
    content: '';
    height: 2px;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(0, -50%);
    width: 44%;
  }
}

.rewards__couponText {
  color: #747882;
  font-size: 1.3rem;
  line-height: 1.1;
  padding: 4px 10px;
  width: 85%;
}

</style>
