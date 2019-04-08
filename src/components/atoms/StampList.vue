<template>
  <ul class="list u-font--MPLUS">
    <li
      v-for="(item, index) in list"
      :key="index"
      class="item"
    >
      <div
        class="inner">
        <div
          :class="{'is-cleared' : item.isCleared}"
          :style="[item.isCleared ? stampIcon : '']"
          class="icon">
          <div class="number">{{ index + 1 }}</div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>

export default {
  name: 'StampList',
  props: {
    list:{
      type: Array,
      default: () => []
    },
    icon: {
      type: String,
      default: ''
    }
  },
  computed: {
    stampIcon() {
      return {
        backgroundImage: `url('${this.icon}')`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: -10px;

  .item {
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative;
    width: 33.333%;
  }

  .inner {
    background: url(~@/assets/img/border.svg) no-repeat;
    background-color: #fff;
    background-size: 69px 69px;
    border-radius: 19px;
    height: 69px;
    margin: 6% 0;
    position: relative;
    width: 69px;
  }

  .icon {
    &.is-cleared {
      &::before {
        background-image: inherit;
        background-position: center;
        background-repeat: no-repeat;
        background-size: 57px;
        content: '';
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 2;
      }
    }
  }

  .number {
    color: #bebebe;
    font-size: 2.4rem;
    font-weight: bold;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
