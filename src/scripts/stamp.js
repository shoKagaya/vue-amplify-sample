import { mapGetters } from 'vuex'
import * as types from '@/store/mutation-types'
import BackgroundImage from '../components/organisms/BackgroundImage'
import Stamp from '../components/organisms/Stamp'
import Animations from '../components/organisms/Animations'
import Rewards from '../components/organisms/Rewards'
import Loading from '../components/atoms/Loading'
import Modal from '../components/molecules/Modal'
import { rewardsMeta, incentiveType, modalType } from '@/const/rewards'
import { customURL } from '@/const'

export default {
  name: 'stamp',
  components: {
    BackgroundImage,
    Stamp,
    Animations,
    Rewards,
    Loading,
    Modal
  },
  data() {
    return {
      rewardsMeta,
      incentiveType,
      customURL,
      modalType,
      modalData: {
        type: null,
        isActive: false,
        title: '',
        btnText: '',
        couponList: [],
        col2: false
      }
    }
  },
  created() {
    this.$store.dispatch('getStampDetail', {
      hashedMemberKey: this.$route.query.hashedMemberKey,
      loginTerminalId: this.$route.query.loginTerminalId,
      stampId: this.$route.params.stampId
    })
  },
  computed: {
    ...mapGetters(['incentive']),
    stamp() {
      return this.$store.getters.stampCard
    },
    rewards() {
      return this.$store.getters.stampCardRewards
    },
    status() {
      return this.$store.state.status
    }
  },
  methods: {
    modalClose() {
      if (!this.$store.state.isCompletedLoading) {
        location.href = 'fmid-app://open-chance-top'
        return
      }
      this.$store.commit(types.SET_ERROR, {
        isError: false,
        errorMsg: null
      })
      this.$store.commit(types.ANIMATION_COMPLETED, false)
      this.$store.commit(types.TOGGLE_MODAL, false)
      this.$store.commit(types.SET_MODAL, {
        type: null,
        title: null,
        btnText: null,
        couponList: null,
        col2: false
      })
      this.modalData = this.$store.state.modalData
    },
    modalActive(itemLists) {
      this.$store.commit(types.TOGGLE_MODAL, true)
      this.$store.commit(types.SET_MODAL, {
        title: this.rewardsMeta.modal.completeText,
        couponList: itemLists,
        btnText: this.rewardsMeta.modal.btnTextGet,
        col2: itemLists.length >= 2
      })
      this.modalData = this.$store.state.modalData
    },
    onClickModalBtn(item) {
      if (this.modalData.type === this.modalType.addIncentive) {
        switch (this.incentive.type) {
          case this.incentiveType.coupon:
            location.href = this.customURL.openCouponList
            break
          case this.incentiveType.game:
            location.href = this.customURL.openChanceTop
            break
        }
      } else {
        this.useCoupon(item)
      }
    },
    useCoupon(couponItem) {
      if (this.$store.state.isConnecting) return
      this.$store.commit(types.SET_CONNECTING, true)
      this.$store.commit(types.SET_LOADING, true)
      this.$store.commit(types.SET_USED_ITEMS, {
        rewardId: couponItem.rewardId,
        imageUrl: couponItem.imageUrl,
        name: couponItem.name
      })
      this.$store
        .dispatch('getAddIncentive', {
          hashedMemberKey: this.$route.query.hashedMemberKey,
          loginTerminalId: this.$route.query.loginTerminalId,
          incentiveTrgId: couponItem.rewardId,
          stampId: this.$route.params.stampId
        })
        .then(() => {
          // ステータスコードが正常の場合
          const incentiveType = this.incentive.type
          const title = this.rewardsMeta.modal.couponGetText[incentiveType]
          const btnText = this.rewardsMeta.modal.btnTextToList[incentiveType]
          this.$store.commit(types.SET_MODAL, {
            isActive: true,
            type: this.modalType.addIncentive,
            title,
            btnText,
            couponList: [couponItem],
            col2: false
          })
          this.modalData = this.$store.state.modalData
        })
    }
  }
}
