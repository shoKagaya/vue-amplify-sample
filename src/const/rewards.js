export const incentiveType = {
  coupon: '01',
  game: '02'
}

export const modalType = {
  addIncentive: 'addIncentive'
}

export const rewardsMeta = {
  sectionTitle: 'Award',
  btnText: 'GETする!',
  btnType: 'button',
  elemListTitle: 'p',
  thumbnailAlt: '商品画像',
  thumbnailNone: '/resource/rewards__couponImg_none.png',
  thumbnailNoneAlt: 'Image Not Found',
  rowNumberTitle: {
    titleLevel: 3,
    text: 'スタンプコンプリートで'
  },
  modal: {
    titleLevel: 4,
    btnTextGet: 'GET!',
    btnType: 'button',
    completeText: 'スタンプコンプリート!',
    couponGetText: {
      [incentiveType.coupon]: 'クーポンをゲット！',
      [incentiveType.game]: 'ゲーム挑戦権をゲット！',
    },
    btnTextToList: {
      [incentiveType.coupon]: 'クーポン一覧へ',
      [incentiveType.game]: 'ゲームコース選択へ',
    }
  }
}
