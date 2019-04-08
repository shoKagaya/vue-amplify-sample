import Vue from 'vue'
import Vuex from 'vuex'
import { API, graphqlOperation } from 'aws-amplify'
import { detailStampCard } from '../graphql/queries'
import { addIncentive } from '../graphql/mutations'
import * as types from './mutation-types'
import * as ERRORS from '../const/errors'
import { customURL } from '@/const'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isError: false,
    errorMsg: '',
    isCompletedLoading: false,
    isLoading: false,
    isAnimationCompleted: true,
    isConnecting: false,
    stampCard: {},
    stampCardRewards: [],
    incentive: {},
    isModalActive: false,
    modalData: {},
    customURL: '',
    visibleBtnType: {
      ok: false,
      retry: false,
      login: false
    },
    usedItems: {}
  },

  getters: {
    loading: state => state.isLoading,
    error: state => {
      return {
        isError: state.isError,
        errorMsg: state.errorMsg
      }
    },
    stampCard: state => state.stampCard,
    incentive: state => state.incentive,
    stampCardRewards: state => state.stampCardRewards
  },

  mutations: {
    [types.SET_ERROR](state, { isError, errorMsg }) {
      state.isError = isError
      state.errorMsg = errorMsg
    },
    [types.COMPLETED_LOADING](state, isCompletedLoading) {
      state.isCompletedLoading = isCompletedLoading
    },
    [types.SET_LOADING](state, isLoading) {
      state.isLoading = isLoading
    },
    [types.SET_CONNECTING](state, isConnecting) {
      state.isConnecting = isConnecting
    },
    [types.SET_STAMP](state, { stampCard }) {
      state.stampCard = stampCard
    },
    [types.SET_INCENTIVE](state, incentive) {
      state.incentive = incentive
    },
    [types.SET_REWARDS](state, { stampCardRewards }) {
      state.stampCardRewards = stampCardRewards
    },
    [types.TOGGLE_MODAL](state, isVisibility) {
      state.isModalActive = isVisibility
    },
    [types.SET_MODAL](state, modalData) {
      state.modalData = modalData
    },
    [types.SET_CUSTOM_URL](state, url) {
      state.customURL = url
    },
    [types.SET_VISIBLE_BTN_TYPE](state, btnType) {
      state.visibleBtnType = btnType
    },
    [types.SET_USED_ITEMS](state, usedItems) {
      state.usedItems = usedItems
    },
    [types.ANIMATION_COMPLETED](state, isAnimationCompleted) {
      state.isAnimationCompleted = isAnimationCompleted
    }
  },

  actions: {
    async getStampDetail(
      { commit },
      { hashedMemberKey, loginTerminalId, stampId }
    ) {
      commit(types.SET_LOADING, true)
      try {
        const response = await API.graphql(
          graphqlOperation(detailStampCard, {
            detailStampCardInput: {
              hashedMemberKey,
              loginTerminalId,
              stampId
            }
          })
        )

        if (response.data.detailStampCard.status !== '000') {
          throw new Error('error')
          //TODO: システムエラーのエラーをセットする。別issue対応
        }
        commit(types.SET_STAMP, {
          stampCard: response.data.detailStampCard.data.stampCard
        })
        commit(types.SET_REWARDS, {
          stampCardRewards: response.data.detailStampCard.data.stampCardRewards
        })
        commit(types.COMPLETED_LOADING, true)
        commit(types.ANIMATION_COMPLETED, true)
        return response
      } catch (e) {
        commit(types.SET_ERROR, {
          isError: true,
          errorMsg: ERRORS.NETWORK
        })
        //TODO: アプリに戻すボタンおく。別issue対応
        commit(types.SET_VISIBLE_BTN_TYPE, {
          ok: true,
          retry: true,
          login: false
        })
      } finally {
        commit(types.SET_LOADING, false)
      }
    },
    async getAddIncentive(
      { commit, dispatch },
      { hashedMemberKey, loginTerminalId, incentiveTrgId, stampId }
    ) {
      try {
        const response = await API.graphql(
          graphqlOperation(addIncentive, {
            addInput: {
              hashedMemberKey,
              loginTerminalId,
              incentiveTrgId,
              stampId
            }
          })
        )
        if (response.data.addIncentive.response.status !== '000') {
          dispatch(
            'fetchErrorStatus',
            response.data.addIncentive.response.status
          )
        } else {
          commit(
            types.SET_INCENTIVE,
            response.data.addIncentive.response.incentive
          )
          return response
        }
      } catch (e) {
        commit(types.SET_ERROR, {
          isError: true,
          errorMsg: ERRORS.NETWORK
        })
        commit(types.SET_CONNECTING, false)
        commit(types.SET_CUSTOM_URL, customURL.openChanceTop)
      } finally {
        commit(types.SET_LOADING, false)
      }
    },
    fetchErrorStatus({ commit }, statusCode) {
      let errMsg = ''
      let isShowOk, isShowRetry, isShowLogin

      switch (statusCode) {
        case '051':
          errMsg = ERRORS.PASSWORD_LOCK;
          [isShowOk] = [true]
          break
        case '052':
          errMsg = ERRORS.COUPON_LOCK;
          [isShowOk] = [true]
          break
        case '064':
          errMsg = ERRORS.PASSCODE_LOCK;
          [isShowOk] = [true]
          break
        case '065':
          errMsg = ERRORS.COUPON_SET_LIMIT;
          [isShowOk] = [true]
          break
        case '104':
        case '105':
          errMsg = ERRORS.CONTACT;
          [isShowOk] = [true]
          break
        case '001':
        case '002':
        case '003':
        case '103':
          errMsg = ERRORS.INVALID_LOGIN;
          [isShowLogin] = [true]
          break
        case '098':
          errMsg = ERRORS.MAINTENANCE;
          [isShowOk, isShowRetry] = [true, true]
          break
        default:
          errMsg = ERRORS.SYSTEM_ERROR;
          [isShowOk] = [true]
          break
      }
      commit(types.SET_VISIBLE_BTN_TYPE, {
        ok: isShowOk,
        retry: isShowRetry,
        login: isShowLogin
      })
      commit(types.SET_ERROR, {
        isError: true,
        errorMsg: errMsg
      })
      commit(types.SET_CONNECTING, false)
    }
  }
})
export default store
