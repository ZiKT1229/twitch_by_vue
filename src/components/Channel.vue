<template>
  <section>
    <img :src="stream.preview.medium">
    <p>{{channel.name}}</p>
    <a :href="channel.url">link</a>
  </section>
</template>

<script>
export default {
  name: 'channel',
  props: {
    stream: Object
  },
  data() {
    return {
      channel: this.stream.channel
    };
  }
}
</script>

<style scoped>

</style>
