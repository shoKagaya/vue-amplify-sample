<template>
  <div class="wrapper">
    <div class="title">
      <RenderImg
        :path="animationMeta.start.path"
        :alt="animationMeta.start.alt"
        class="img"
      />
    </div>
    <div class="icon">
      <RenderImg
        :path="animationMeta.circle.path"
        :alt="animationMeta.circle.alt"
        class="img"
      />
    </div>
  </div>
</template>

<script>
import RenderImg from '@/components/atoms/RenderImg'
export default {
  name: 'AnimationStart',
  components: {
    RenderImg
  },
  props: {
    animationMeta: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  .title {
    align-items: center;
    animation: startFadeIn linear 1s, startFadeOut linear 2s 1s;
    bottom: 0;
    display: flex;
    justify-content: center;
    left: 0;
    margin: auto;
    opacity: 0;
    position: absolute;
    right: 0;
    text-align: center;
    top: 0;
    width: 270px;

    .img {
      height: 92px;
      width: 100%;
    }
  }

  .icon {
    align-items: center;
    bottom: 0;
    display: flex;
    justify-content: center;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 4;

    .img {
      animation: scaleUp ease-in 0.4s 0.9s;
      height: 150px;
      opacity: 0;
      transform: scale(0.7);
      width: 255px;
    }
  }
}

@keyframes startFadeIn {
  0% {
    opacity: 0.4;
    top: 80%;
    width: 100px;
  }

  40% {
    opacity: 1;
    top: -30%;
    width: 240px;
  }

  65% {
    top: 15%;
  }

  100% {
    opacity: 1;
    top: 0;
    width: 270px;
  }
}

@keyframes startFadeOut {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 1;
  }

  80% {
    opacity: 0.6;
  }

  100% {
    opacity: 0;
  }
}

@keyframes scaleUp {
  0% {
    opacity: 0;
    transform: scale(0.7);
  }

  20% {
    opacity: 0.3;
  }

  70% {
    opacity: 0.8;
  }

  100% {
    transform: scale(2);
  }
}
</style>
