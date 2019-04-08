<template>
  <img 
    :src="path" 
    :alt="altText">
</template>

<script>
export default {
  name: 'RenderImg',
  props: {
    path: {
      type: String,
      default: ''
    },
    altText: {
      type: String,
      default: ''
    }
  }
}
</script>
