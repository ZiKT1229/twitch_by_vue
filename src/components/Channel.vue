<template>
  <section>
    <a :href="channel.url" target="_blank"><img :src="stream.preview.medium"></a>
    <div class="info">
      <img class="logo" :src="channel.logo">
      <figure>
        <p class="status">{{channel.status}}</p>
        <p class="name">{{channel.name}}</p>
      </figure>
    </div>
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
};
</script>

<style scoped>
section {
  margin: 20px auto;
  border: 1px solid white;
  width: 320px;
}

section:hover {
  box-shadow: 0 0 20px whitesmoke;
  filter: brightness(120%);
}

a {
  display: block;
  height: 180px;
}

.info {
  display: flex;
  height: 50px;
}

.logo {
  width: 50px;
  height: 50px;
}

figure {
  margin: 0;
  width: 270px;
  height: 50px;
}

p {
  margin: 0 auto;
  height: 25px;
  line-height: 25px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.status {
  font-size: 1rem;
  font-family: Arial, Helvetica, sans-serif;
}

.name {
  font-size: 1rem;
  font-family: 'Times New Roman', Times, serif;
}
</style>
