<script setup lang="ts">
import {  RouterView } from 'vue-router'
import Toaster from '@/components/ui/toast/UseToaster.vue'

</script>

<template>



  <RouterView />

  <Toaster />

</template>

<style scoped>
.toast {
  background-color: red
}
</style>
