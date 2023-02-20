const mongoose = require('mongoose');

const favouriteSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  songId: {
    type: String,
    required: true,
  },
  songData: {
    type: Object,
    required: true,
  }
});
const Favourite = mongoose.model('favourite', favouriteSchema);

module.exports = Favourite;
