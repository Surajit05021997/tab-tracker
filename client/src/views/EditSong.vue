<template>
  <div class="song-form">
    <p class="form-title">Edit Song</p>
    <form action="">
      <div class="left-column">
        <div class="form-field">
          <label for="title">Title</label>
          <input type="text" id="title" v-model="song.title">
        </div>
        <div class="form-field">
          <label for="artist">Artist</label>
          <input type="text" v-model="song.artist">
        </div>
        <div class="form-field">
          <label for="genre">Genre</label>
          <input type="text" v-model="song.genre">
        </div>
        <div class="form-field">
          <label for="album">Album</label>
          <input type="text" v-model="song.album">
        </div>
        <div class="form-field">
          <label for="albumImageUrl">Album Image URL</label>
          <input type="text" v-model="song.albumImageUrl">
        </div>
        <div class="form-field">
          <label for="youtubeId">Youtube ID</label>
          <input type="text" v-model="song.youtubeId">
        </div>
      </div>
      <div class="right-column">
        <div class="form-field">
          <label for="lyrics">Lyrics</label>
          <textarea id="lyrics" v-model="song.lyrics" rows="7"></textarea>
        </div>
        <div class="form-field">
          <label for="tab">Tab</label>
          <textarea id="tab" v-model="song.tab" rows="7"></textarea>
        </div>
        <button @click.prevent="editSong">Edit</button>
      </div>
      <p class="error-msg" v-if="errorMsg" v-html="errorMsg"></p>
    </form>
  </div>  
</template>

<script>
import { getSong, editSong } from '@/services';

export default {
  name: 'EditSong',
  data() {
    return {
      song: {
        title: '',
        artist: '',
        genre: '',
        album: '',
        albumImageUrl: '',
        youtubeId: '',
        lyrics: '',
        tab: '',
      },
      errorMsg: null,
    }
  },
  async created() {
    try {
      this.song = await getSong(this.$router.currentRoute.value.params.id);
    } catch(error) {
      this.errorMsg = 'Faild to load song info!';
    }
  },
  methods: {
    async editSong() {
      try {
        await editSong({songId: this.$router.currentRoute.value.params.id, song: this.song});
        this.$router.push({name: 'Songs'});
      } catch(error) {
      this.errorMsg = 'Faild to edit song info!';
    }
    }
  },
}
</script>

<style scoped>
.song-form {
  width: 1200px;
  margin-top: 36px;
  margin-inline: auto;
  border: 2px solid #008080;
}

.form-title {
  padding: 16px;
  background-color: #008080;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
}

form {
  padding: 36px 24px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}

.left-column, .right-column {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form-field {
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid #008080;
  gap: 8px;
  font-size: 16px;
}

.form-field input, textarea {
  border: none;
  padding: 8px 4px;
  font-size: 20px;
  background-color: #ebebeb;
}

.form-field input:focus, textarea:focus {
  outline: none;
}

button {
  padding: 24px;
  background-color: #008080;
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  align-self: center;
}

button:hover {
  cursor: pointer;
}
</style>
