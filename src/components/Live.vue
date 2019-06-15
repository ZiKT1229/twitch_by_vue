<template>
  <main>
    <Channel v-for="(stream, index) in streams" :key="index" :stream="stream"></Channel>
  </main>
</template>

<script>
import Channel from '@/components/Channel.vue';

export default {
  name: 'live',
  components: {
    Channel
  },
  created() {
    this.fetchLive();
  },
  props: {
    game: String,
  },
  data() {
    return {
      url: 'https://api.twitch.tv/kraken/streams/',
      clientId: 'a7wvr2seuhub9br5h63epquw6c031h',
      limit: 15,
      streams: null,
    };
  },
  methods: {
    async fetchLive() {
      const endpoint = `${this.url}?client_id=${this.clientId}&game=${this.game}&limit=${this.limit}`;

      try {
        const response = await fetch(endpoint);
        if (response.ok) {
          const jsonResponse = await response.json();
          this.streams = jsonResponse.streams;
        } else {
          throw new Error('Oh my god!');
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style scoped>
main {
  height: calc(100vh - 50px);
  overflow: scroll;
  overflow-x: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr
}
</style>
