// eslint-disable
// this is an auto generated file. This will be overwritten

export const listPointHistory = `query ListPointHistory($searchInput: SearchPointMoneyHistoryInput) {
  listPointHistory(searchInput: $searchInput) {
    response {
      status
      errorName
      detailCode
      total
      historyRecords {
        usedDate
        usedTime
        torihikiType
        place
        reason
        addPoint
        subPoint
        expiredDate
      }
    }
  }
}
`;
export const listCoupon = `query ListCoupon($searchInput: SearchCouponInput) {
  listCoupon(searchInput: $searchInput) {
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
export const listAccount = `query ListAccount($searchInput: SearchAccountInput) {
  listAccount(searchInput: $searchInput) {
    fmId
    popinfoId
  }
}
`;
export const listPopupImage = `query ListPopupImage($searchInput: SearchPopupImageInput) {
  listPopupImage(searchInput: $searchInput) {
    error {
      code
      message
    }
    status
    errorName
    detailCode
    data {
      id
      shownAt
      hiddenAt
      url
    }
    total
  }
}
`;
export const listStampCard = `query ListStampCard($searchInput: SearchStampCardInput) {
  listStampCard(searchInput: $searchInput) {
    error {
      code
      message
    }
    status
    errorName
    detailCode
    total
    data {
      id
      shownAt
      hiddenAt
      imageUrl
      webviewUrl
      status
    }
  }
}
`;
export const detailStampCard = `query DetailStampCard($detailStampCardInput: DetailStampCardInput) {
  detailStampCard(detailStampCardInput: $detailStampCardInput) {
    status
    errorName
    detailCode
    data {
      stampCard {
        id
        name
        description
        shownAt
        hiddenAt
        imageUrlBlur
        imageUrlTitle
        stampImageUrl
        status
        repetition {
          isCleared
        }
        rewardId
        isAccomplished
      }
      stampCardRewards {
        imageUrl
        name
        rewardId
      }
    }
  }
}
`;
export const getStampCardsStatus = `query GetStampCardsStatus($getInput: GetStampCardsStatusInput) {
  getStampCardsStatus(getInput: $getInput) {
    status
    errorName
    detailCode
    event
  }
}
`;
