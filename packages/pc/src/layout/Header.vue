<template>
  <div class="sw-header">
    <lin-button v-for="item of HeaderMenu" :key="item.id" :iconName="item.iconName" ></lin-button>
  </div>
</template>
<script lang="ts" setup>
import buttons from '../config/button'
const HeaderMenu = buttons.header.children
defineOptions({
  name: 'Header',
})
</script>