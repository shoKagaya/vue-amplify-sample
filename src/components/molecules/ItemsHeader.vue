<template>
  <header class="missionArea">
    <div class="thumb">
      <div class="inner">
        <render-img
          :path="thumb"
          :alt-text="'商品サムネイル'"
          class="img" />
      </div>
    </div>
    <render-title
      :text="title"
      :title-level="2"
      class="text" />
  </header>
</template>

<script>
import RenderImg from '../atoms/RenderImg'
import RenderTitle from '../atoms/RenderTitle'

export default {
  name: 'ItemsHeader',
  components: {
    RenderImg,
    RenderTitle
  },
  props: {
    thumb:{
      type: String,
      default: ''
    },
    title:{
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.missionArea {
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 18px;

  .thumb {
    align-items: center;
    background-color: #fff;
    display: flex;
    min-height: 77px;
    min-width: 77px;
    width: 36.735%;

    .img {
      width: 100%;
    }
  }

  .text {
    color: #00ab4d;
    font-size: 1.3rem;
    font-weight: bold;
    line-height: 1.308;
    padding: 11px;
    width: 63.265%;
  }
}
</style>
