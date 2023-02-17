<template>
  <div>
    <div v-if="!errorMsg && song" class="view-song-panel">
      <div class="panel song-info">
        <p class="panel-title">Song Info</p>
        <div class="panel-content">
          <p><span class="info-label">Title: </span>{{ song.title }}</p>
          <p><span class="info-label">Artist: </span>{{ song.artist }}</p>
          <p><span class="info-label">Genre: </span>{{ song.genre }}</p>
          <p><span class="info-label">Album: </span>{{ song.album }}</p>
          <button type="button" @click="editSong">Edit Song</button>
        </div>
      </div>
      <div class="panel song-video">
        <p class="panel-title">Song Video</p>
        <div class="panel-content">
          <iframe :src="'https://www.youtube.com/embed/'+song.youtubeId" width="100%" height="300px"></iframe>
        </div>
      </div>
      <div class="panel song-lyrics">
        <p class="panel-title">Song Lyrics</p>
        <div class="panel-content">
          <p v-html="song.lyrics"></p>
        </div>
      </div>
      <div class="panel song-tab">
        <p class="panel-title">Song Tab</p>
        <div class="panel-content">
          <p v-html="song.tab"></p>
        </div>
      </div>
    </div>
    <p v-else>{{ errorMsg }}</p>
  </div>
</template>

<script>
import { getSong } from '@/services';

export default {
  name: 'View Song',
  data() {
    return {
      errorMsg: '',
      song: null,
    }
  },
  async created() {
    try {
      this.song = await getSong(this.$router.currentRoute.value.params.id);
    } catch(error) {
      this.errorMsg = 'Faild to load song info!'
    }
  },
  methods: {
    editSong() {
      this.$router.push({name: 'EditSong', params: {id: this.$router.currentRoute.value.params.id}})
    },
  },
}
</script>

<style scoped>
.view-song-panel {
  width: 1200px;
  margin-inline: auto;
  padding: 36px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.panel {
  border: 2px solid #008080;
  align-self: start;
}

.panel-title {
  padding: 16px;
  background-color: #008080;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
}

.panel-content {
  padding: 24px;
}
.info-label {
  font-size: 20px;
  font-weight: 600;
}

.song-info .panel-content {
  text-align: center;
}

.song-lyrics .panel-content, .song-tab .panel-content {
  height: 550px;
  overflow-y: scroll;
}

button {
  padding: 16px 24px;
  margin-top: 24px;
  background-color: #008080;
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
}

button:hover {
  cursor: pointer;
}
</style>