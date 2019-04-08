<template>
  <entry-element :is="tag">
    {{ text }}
  </entry-element>
</template>

<script>
export default {
  name: 'RenderText',
  props: {
    element: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  },
  computed:{
    tag() {
      return `${this.element}`
      /*
        div, p, span
      */
    }
  }
}
</script>
