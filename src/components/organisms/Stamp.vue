<template>
  <div class="content">
    <items-header
      :thumb="stamp.imageUrlTitle"
      :title="stamp.name" />
    <stamp-term
      :start-date="stamp.shownAt"
      :end-date="stamp.hiddenAt" />
    <stamp-list
      :list="stamp.repetition"
      :icon="stamp.stampImageUrl"
    />
    <render-text
      :text="stamp.description"
      :element="'p'"
      class="footerText" />
  </div>
</template>

<script>
import ItemsHeader from '../molecules/ItemsHeader'
import RenderText from '../atoms/RenderText'
import StampTerm from '../atoms/StampTerm'
import StampList from '../atoms/StampList'

export default {
  name: 'Stamp',
  components:{
    ItemsHeader,
    RenderText,
    StampTerm,
    StampList
  },
  props: {
    stamp: {
      type: Object,
      default: () => {}
    },
  }
}
</script>

<style lang="scss" scoped>
.content {
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  margin: 110px 10.133% 90px;
  padding: 26px 5%;
  position: relative;
}

.footerText {
  font-size: 1.3rem;
  line-height: 1.538;
  margin-top: 22px;
}

</style>
