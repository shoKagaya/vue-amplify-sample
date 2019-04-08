<template>
  <div class="animationArea">
    <Animation-Start
      v-if="status === 2"
      :animation-meta="start" />
    <Animation-Press
      v-else-if="status === 3"
      :animation-meta="press" />
    <Animation-Completed
      v-else-if="status === 4"
      :animation-meta="completed" />
  </div>
</template>

<script>
import { start, completed, press  } from '@/const/animation'
import AnimationStart from '../molecules/AnimationStart'
import AnimationCompleted from '../molecules/AnimationCompleted'
import AnimationPress from '../molecules/AnimationPress'

export default {
  name: 'Animations',
  components:{
    AnimationStart,
    AnimationCompleted,
    AnimationPress
  },
  props: {
    status: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      start,
      completed,
      press
    }
  }
}
</script>

<style lang="scss" scoped>
.animationArea {
  animation: hidden 1s infinite 2s;
  height: 100%;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  z-index: 3;
}

@keyframes hidden {
  0% {
    visibility: hidden;
    z-index: -999;
  }

  100% {
    visibility: hidden;
    z-index: -999;
  }
}
</style>
