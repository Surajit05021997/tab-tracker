<template>
  <div class="songs-container">
    <div class="title">
      <p>Songs</p>
      <button type="button" @click="addSong">Add Song</button>
    </div>
    <div class="content">
      <div class="song-panel" v-for="song in allSongs" :key="song.title">
        <div class="left-panel">
          <p class="song-title">{{ song.title }}</p>
          <p class="song-album"><span style="font-weight:600">Album: </span>{{ song.album }}</p>
          <button type="button" @click="viewSong(song)">View</button>
        </div>
        <div class="right-panel">
          <img :src="song.albumImageUrl" alt="Album Image">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Songs',
  computed: {
    ...mapState(['allSongs']),
  },
  created() {
    this.setAllSongsAction();
  },
  methods: {
    ...mapActions(['setAllSongsAction']),
    addSong() {
      this.$router.push({ name: 'CreateSong' });
    },
    viewSong(song) {
      this.$router.push({ name: 'ViewSong', params: {
        id: song._id,
      } });
    },
  },
}
</script>

<style scoped>
.songs-container {
  max-width: 1200px;
  margin-inline: auto;
  margin-top: 36px;
  border: 2px solid #008080;
}

.title {
  padding: 16px;
  background-color: #008080;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

button {
  padding: 8px 24px;
  background-color: #008080;
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
}

button:hover {
  cursor: pointer;
}

.content {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.song-panel {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.left-panel {
  align-self: center;
  justify-self: center;
  text-align: center;
}

.song-title {
  font-size: 32px;
  font-weight: 700;
}

.song-album {
  font-size: 20px;
  font-weight: 400;
}
</style>
