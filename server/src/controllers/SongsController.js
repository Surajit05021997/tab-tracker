const Song = require('../models/Song.js');

module.exports = {
  async getAllSongs(req, res) {
    try {
      const songs = await Song.find();
      res.send(songs);
    } catch(err) {
      res.status(500).send('An error has occured trying to fetch all songs!');
    }
  },
  async postSong(req, res) {
    try {
      const song= new Song(req.body);
      await song.save();
      res.send(song);
    } catch(err) {
      res.status(500).send('An error has occured trying to create a song!');
    }
  },
  async getSong(req, res) {
    try {
      const song = await Song.findOne({_id: req.params.songId });
      res.send(song);
    } catch(err) {
      res.status(500).send('An error has occured trying to fetch song info!');
    }
  },
  async putSong(req, res) {
    try {
      const song = await Song.findOneAndUpdate({_id: req.params.songId }, req.body);
      res.send(song);
    } catch(err) {
      res.status(500).send('An error has occured trying to edit song info!');
    }
  },
}

