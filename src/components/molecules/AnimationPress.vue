<template>
  <div class="wrapper">
    <div class="stampImage">
      <RenderImg
        :path="animationMeta.stampImage.path"
        :alt="animationMeta.stampImage.alt"
        class="img"
      />
    </div>
    <div class="starImage">
      <RenderImg
        :path="animationMeta.starImage.path"
        :alt="animationMeta.starImage.alt"
        class="img"
      />
    </div>
  </div>
</template>

<script>
import RenderImg from '@/components/atoms/RenderImg'
export default {
  name: 'AnimationPress',
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
$beforeOffsetTop: -23%;
$afterOffsetTop: -80%;
$beforeOffsetLeft: 0;
$afterOffsetLeft: 10%;
$beforeRotate: rotate(0);
$afterRotate: rotate(45deg);

.wrapper {
  .stampImage {
    animation: stampDown 0.2s 1s, stampRotate 0.4s 1.2s, stampFadeOut 0.2s 1.6s, hidden 3s 1.8s infinite;
    bottom: 0;
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    top: $beforeOffsetTop;
    width: 100%;
    z-index: 3;

    > .img {
      display: block;
    }
  }

  .starImage {
    align-items: center;
    animation: scaleUp 1s ease-out 1.2s;
    bottom: 0;
    display: flex;
    justify-content: center;
    left: 0;
    margin: auto;
    opacity: 0;
    padding-top: 20px;
    position: absolute;
    right: 0;
    top: 0;
    width: 40%;
    z-index: 2;

    > .img {
      display: block;
      width: 100%;
    }
  }
}

@keyframes stampDown {
  0% {
    opacity: 1;
    top: $beforeOffsetTop;
  }

  100% {
    top: -20%;
  }
}

@keyframes stampRotate {
  0% {
    opacity: 1;
    top: $beforeOffsetTop;
    transform: rotate(0);
  }

  100% {
    left: $afterOffsetLeft;
    top: $afterOffsetTop;
    transform: $afterRotate;
  }
}

@keyframes stampFadeOut {
  0% {
    left: $afterOffsetLeft;
    opacity: 1;
    top: $afterOffsetTop;
    transform: $afterRotate;
  }

  100% {
    left: $afterOffsetLeft;
    opacity: 0;
    top: $afterOffsetTop;
    transform: $afterRotate;
  }
}

@keyframes hidden {
  0% {
    left: $beforeOffsetLeft;
    opacity: 0;
    top: $afterOffsetTop;
    transform: $beforeRotate;
  }

  100% {
    left: $beforeOffsetLeft;
    opacity: 0;
    top: $afterOffsetTop;
    transform: $beforeRotate;
    visibility: hidden;
  }
}

@keyframes scaleUp {
  0% {
    opacity: 1;
    transform: scale(1);
  }

  50% {
    opacity: 1;
  }

  80% {
    transform: scale(2.7);
  }

  100% {
    opacity: 0;
    transform: scale(3);
  }
}
</style>
