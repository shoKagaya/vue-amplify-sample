// eslint-disable
// this is an auto generated file. This will be overwritten

export const updateCouponSet = `mutation UpdateCouponSet($updateInput: UpdateCouponSetInput) {
  updateCouponSet(updateInput: $updateInput) {
    response {
      status
      errorName
      detailCode
      total
      coupons {
        id
        serialId
        name
        note
        listImage
        detailImage
        start
        end
        riyoStatus
        description
        usedDate
        usedTime
        hakkouMaisu
        kaisuKenFlg
        joutoKahiFlg
      }
    }
  }
}
`;
export const addIncentive = `mutation AddIncentive($addInput: AddIncentiveInput) {
  addIncentive(addInput: $addInput) {
    response {
      status
      errorName
      detailCode
      incentive {
        id
        type
      }
    }
  }
}
`;
export const addAccount = `mutation AddAccount($addInput: AddAccountInput) {
  addAccount(addInput: $addInput) {
    response {
      status
      errorName
      detailCode
    }
  }
}
`;
export const deleteAccount = `mutation DeleteAccount($deleteInput: DeleteAccountInput) {
  deleteAccount(deleteInput: $deleteInput) {
    response {
      status
      errorName
      detailCode
    }
  }
}
`;
