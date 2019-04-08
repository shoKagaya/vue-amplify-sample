<template>
  <div class="wrapper">
    <div class="title">
      <RenderImg
        :path="animationMeta.completedText.path"
        :alt="animationMeta.completedText.alt"
        class="img"
      />
    </div>
    <div class="starIcon">
      <div class="inner">
        <RenderImg
          v-for="(item, index) in animationMeta.star"
          :alt="item.alt"
          :key="index"
          :src="starIconList[index]"
          :class="`img${index+1}`"
          class="star"
        />
      </div>
    </div>
    <div class="bgImg">
      <RenderImg
        :path="animationMeta.bgImg.path"
        :alt="animationMeta.bgImg.alt"
        class="img"
      />
    </div>
  </div>
</template>

<script>
import RenderImg from '@/components/atoms/RenderImg'
import star1 from '@/assets/img/anime_star1.svg'
import star2 from '@/assets/img/anime_star2.svg'
import star3 from '@/assets/img/anime_star3.svg'
import star4 from '@/assets/img/anime_star4.svg'
import star5 from '@/assets/img/anime_star5.svg'
import star6 from '@/assets/img/anime_star6.svg'
import star7 from '@/assets/img/anime_star7.svg'
import star8 from '@/assets/img/anime_star8.svg'
import star9 from '@/assets/img/anime_star9.svg'
import star10 from '@/assets/img/anime_star10.svg'
import star11 from '@/assets/img/anime_star11.svg'
import star12 from '@/assets/img/anime_star12.svg'
import star13 from '@/assets/img/anime_star13.svg'
import star14 from '@/assets/img/anime_star14.svg'

export default {
  name: 'AnimationCompleted',
  components: {
    RenderImg
  },
  props: {
    animationMeta: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      starIconList: [
        star1,
        star2,
        star3,
        star4,
        star5,
        star6,
        star7,
        star8,
        star9,
        star10,
        star11,
        star12,
        star13,
        star14
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  .title {
    align-items: center;
    animation: startFadeIn linear 1s, fadeOut linear 2s 1s;
    bottom: 0;
    display: flex;
    justify-content: center;
    left: 0;
    margin: auto;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 4;
  }

  .starIcon {
    height: 100%;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    z-index: 3;

    .inner {
      .star {
        display: block;
        opacity: 0;
        position: absolute;
      }

      .img1 {
        animation: flashing 1s 1s;
        left: 10%;
        top: 32%;
      }

      .img2 {
        animation: flashing 1s 1.5s;
        left: 12%;
        top: 26%;
      }

      .img3 {
        animation: flashing 1s 1s;
        left: 17%;
        top: 31%;
      }

      .img4 {
        animation: flashing 1s 1.5s;
        left: 62%;
        top: 31%;
      }

      .img5 {
        animation: flashing 1s 1s;
        left: 80%;
        top: 28%;
      }

      .img6 {
        animation: flashing 1s 1.5s;
        left: 87%;
        top: 26%;
      }

      .img7 {
        animation: flashing 1s 1s;
        left: 87%;
        top: 32%;
      }

      .img8 {
        animation: flashing 1s 1.5s;
        left: 6%;
        top: 63%;
      }

      .img9 {
        animation: flashing 1s 1s;
        left: 11%;
        top: 70%;
      }

      .img10 {
        animation: flashing 1s 1.5s;
        left: 18%;
        top: 62%;
      }

      .img11 {
        animation: flashing 1s 1s;
        left: 11%;
        top: 70%;
      }

      .img12 {
        animation: flashing 1s 1.5s;
        left: 68%;
        top: 63%;
      }

      .img13 {
        animation: flashing 1s 1s;
        left: 76%;
        top: 63%;
      }

      .img14 {
        animation: flashing 1s 1.5s;
        left: 82%;
        top: 65%;
      }
    }
  }

  .bgImg {
    animation: rotate linear 3s 0.7s, fadeOut2 3s 0.8s;
    bottom: 0;
    left: 0;
    margin: auto;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 2;

    .img {
      display: block;
      height: 100%;
      width: 100%;
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

@keyframes fadeOut {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.8;
  }

  80% {
    opacity: 0.4;
  }

  100% {
    opacity: 0;
  }
}

@keyframes fadeOut2 {
  0% {
    opacity: 0.4;
  }

  30% {
    opacity: 1;
  }

  50% {
    opacity: 0.6;
  }

  80% {
    opacity: 0.1;
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

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes flashing {
  0% {
    opacity: 0;
  }

  25% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  75% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
</style>
