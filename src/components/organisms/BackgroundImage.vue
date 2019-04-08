<template>
  <div
    :style="{'background-image': 'url(' + backgroundImage + ')'}"
    class="backgroundImage"/>
</template>

<script>

export default {
  name: 'BackgroundImage',
  props: {
    backgroundImage: {
      type: String,
      default: ''
    },
  }
}
</script>

<style lang="scss" scoped>
.backgroundImage {
  background-size: 0;
  height: 100%;
  left: 0;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 0;

  &::before {
    $blur:20px;

    background-image: inherit;
    background-repeat: no-repeat;
    background-size: cover;
    bottom: - $blur;
    content: '';
    filter: blur($blur);
    left: - $blur;
    position: absolute;
    right: - $blur;
    top: - $blur;
    z-index: -1;
  }

  &::after {
    $blur:20px;

    background-color: rgba(0, 0, 0, 0.2);
    bottom: - $blur;
    content: '';
    left: - $blur;
    position: absolute;
    right: - $blur;
    top: - $blur;
    z-index: -1;
  }
}
</style>
