const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  title: String,
  artist: String,
  genre: String,
  album: String,
  albumImageUrl: String,
  youtubeId: String,
  lyrics: String,
  tab: String,
});
const Song = mongoose.model('song', songSchema);

module.exports = Song;
