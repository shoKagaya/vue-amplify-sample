<template>
  <section class="wrapper">
    <Section-Title :title="rewardsMeta.sectionTitle" />
    <Rewards-List
      :rewards-list="stampCardRewards"
      :reward-id="rewardId"
      :is-accomplished="isAccomplished"
      @modalActive="modalActive"
    />
    <Modal
      v-if="$store.state.isModalActive"
      @click-event="modalClose">
      <template slot="modalContents">
        <render-title
          :text="modalData.title"
          :title-level="4"
          class="c-modal__title"/>
        <div
          :class="{'rewardsModal__coupon--col2':modalData.col2}"
          class="rewardsModal__coupon">
          <div
            v-for="(item, index) in modalData.couponList"
            :key="item.reward_id"
            class="rewardsModal__item">
            <div class="rewardsModal__item__inner">
              <div class="rewardsModal__thumb">
                <render-img
                  :path="item.imageUrl"
                  :alt-text="item.name"
                  width="88" />
              </div>
              <render-text
                :text="item.name"
                :element="'p'"
                class="rewardsModal__text" />
              <btn
                :text="modalData.btnText"
                :btn-type="rewardsMeta.modal.btnType"
                class="rewardsModal__getBtn"
                @click-event="onClickModalBtn(item)" />
            </div>
            <div
              v-if="index === 0"
              class="rewardsModal__item__centerColumn">or</div>
          </div>
        </div>
      </template>
    </Modal>
  </section>
</template>

<script>
import { rewardsMeta } from '@/const/rewards'
import SectionTitle from '../atoms/SectionTitle'
import RewardsList from '../molecules/RewardsList'
import Btn from '../atoms/Btn'
import RenderImg from '../atoms/RenderImg'
import RenderTitle from '../atoms/RenderTitle'
import RenderText from '../atoms/RenderText'
import Modal from '../molecules/Modal'

export default {
  name: 'Rewards',
  components:{
    SectionTitle,
    RewardsList,
    Modal,
    Btn,
    RenderImg,
    RenderTitle,
    RenderText
  },
  props: {
    stampCardRewards: {
      type: Array,
      default: () => []
    },
    rewardId: {
      type: String,
      default: ''
    },
    isAccomplished: {
      type: Boolean,
      default: false
    },
    modalData: {
      type: Object,
      default: () =>  {}
    }
  },
  data() {
    return {
      rewardsMeta
    }
  },
  methods: {
    modalClose() {
      this.$emit('modalClose')
    },
    modalActive(itemLists) {
      this.$emit('modalActive', itemLists)
    },
    onClickModalBtn(item) {
      this.$emit('onClickModalBtn', item)
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  background-color: #fff;
  padding: 30px 37.5px;
  position: relative;
}

.rewardsModal__coupon {
  align-items: flex-start;
  display: flex;
  justify-content: center;
  position: relative;
}

.rewardsModal__item {
  width: 90px;
}

.rewardsModal__item__centerColumn {
  display: none;
}

.rewardsModal__getBtn {
  bottom: -55px;
  left: 50%;
  position: absolute;
  transform: translate(-50%, 0);
}

.rewardsModal__retryBtn {
  margin-bottom: 0;
  position: static;
  transform: initial;
}

.rewardsModal__thumb {
  text-align: center;
}

.rewardsModal__text {
  color: #7e7e7e;
  font-size: 1.1rem;
  height: 3.5em;
  margin: 10px auto 15px;
  overflow: hidden;
  width: 90px;
}

.rewardsModal__coupon--col2 {
  .rewardsModal__item {
    &:first-child {
      display: flex;
      width: 120px;
    }
  }

  .rewardsModal__item__inner {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    max-width: 90px;
  }

  .rewardsModal__item__centerColumn {
    color: #03ab4f;
    display: block;
    font-size: 1.3rem;
    font-weight: bold;
    margin: 0 6px;
    padding-top: 37px;
    text-align: center;
    width: 30px;
  }

  .rewardsModal__getBtn {
    left: initial;
    transform: translate(0, 0);
    width: 90px;
  }
}

</style>
