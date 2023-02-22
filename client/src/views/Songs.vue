<template>
  <div v-if="isUserLoggedIn" class="main-container">
    <div class="favourite-container">
      <div class="title">
        <p>Favourites</p>
      </div>
      <div class="favourite-container-content">
        <div v-if="favouriteSongs?.length && isUserLoggedIn" class="favourite-songs-list">
          <div v-for="song in favouriteSongs" :key="song.songId" class="favourite-song">
            <p>{{ song.songData.title }}</p>
            <button type="button" @click="viewSong(song.songData)">View</button>
          </div>
        </div>
        <p v-else-if="!favouriteSongs?.length && isUserLoggedIn">No songs added to favourite!</p>
        <p v-else>Please login!</p>
      </div>
    </div>
    <div class="songs-container">
      <div class="title">
        <p>Songs</p>
        <button v-if="isUserLoggedIn" type="button" @click="addSong">Add Song</button>
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
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { getFavourite, authenticateUser } from '@/services';

export default {
  name: 'Songs',
  data() {
    return {
      favouriteSongs: null,
    }
  },
  computed: {
    ...mapState(['allSongs', 'isUserLoggedIn', 'user', 'token']),
  },
  async created() {
    try {
      if(!this.isUserLoggedIn) {
        const user = await authenticateUser();
        this.setUserAction(user);
        this.setIsUserLoggedIn(true);
      }
      if(this.user) {
        this.getAllSongsAction();
        this.favouriteSongs = await getFavourite();
      }
    } catch(error) {
      this.$router.push({name: 'Login'});
    }
  },
  methods: {
    ...mapActions(['setUserAction', 'getAllSongsAction', 'setIsUserLoggedIn']),
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
.main-container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 24px;
  max-width: 1200px;
  margin-inline: auto;
}

.favourite-container {
  margin-top: 36px;
  border: 2px solid #008080;
  align-self: start;
}

.favourite-container-content {
  padding: 24px 16px;
  font-size: 20px;
  font-weight: 400;
}
.favourite-songs-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}


.favourite-song {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.songs-container {
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

.title p {
  padding: 8px 0;
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

.content button {
  margin-top: 16px;
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
