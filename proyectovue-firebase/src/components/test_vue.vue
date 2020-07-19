<template>
  <div id="test_vue">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: "TestVue",
  props: {
    msg: {
      type: String,
      default: "Hola"
    }
  }
};
</script>

<style lang="scss" scoped>
p {
  color: brown;
}
</style>
