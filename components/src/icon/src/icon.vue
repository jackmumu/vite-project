<template>
  <svg class="svg-icon">
    <use :xlink:href="'#' + iconName"></use>
  </svg>
</template>
<script lang="ts" setup>
defineOptions({
  name: 'LinIcon',
  inheritAttrs: false,
})
const pros = defineProps({
  iconName: {
    type: String
  }
})
</script>