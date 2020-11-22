<template>
  <router-view :key="`content-${$route.fullPath}`" />
</template>

<script>
export default {
  name: 'AppMain'
}
</script>