<template>
  <div class="hello">
    <h1>{{ $route.params.name }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
  },
  created(){
    console.log(this.$route)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
