<template>
  <div class="layout">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Layout',
}
</script>

<style scoped lang="scss">

.layout {
  max-width: 1600px;
  padding: 0 24px;
  margin: 90px auto 0 auto;
}

</style>
