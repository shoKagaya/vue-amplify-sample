<template>
  <h2 class="c-sectionTitle">{{ title }}</h2>
</template>

<script>
export default {
  name: 'SectionTitle',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
