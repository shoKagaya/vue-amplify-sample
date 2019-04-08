<template>
  <entry-element :is="tag">
    <slot v-if="hasIcon"/>{{ text }}
  </entry-element>
</template>

<script>
export default {
  name: 'RenderTitle',
  props: {
    titleLevel: {
      type: Number,
      default: 1,
      required:true
    },
    text: {
      type: String,
      default: ''
    },
    hasIcon: {
      type:Boolean,
      required: false,
      default: false
    }
  },
  computed:{
    tag() {
      return `h${this.titleLevel}`
      /*
        h1...h6
      */
    }
  }
}
</script>
