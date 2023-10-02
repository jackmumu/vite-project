<template>
  <div class="lin-button">
    <span>我是button</span>
    <lin-icon :iconName = "iconName"></lin-icon>
  </div>
</template>
<script lang="ts" setup>
import '@lin/theme-chalk/src/button.scss'
defineOptions({
  name: 'LinButton',
})
const pros = defineProps({
  iconName: {
    type: String
  }
})
</script>