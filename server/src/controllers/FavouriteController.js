const Favourite = require('../models/Favourite.js');
const Song = require('../models/Song.js');

module.exports = {
  async addFavourite(req, res) {
    try {
      const songData = await Song.findOne({_id: req.body.songId });    
      const newFavourite = new Favourite({
        userId: req.body.userId,
        songId: req.body.songId,
        songData: songData, 
      });
      await newFavourite.save();
      res.send(newFavourite);
    } catch(err) {
      res.status(500).send('Failed to add to favourite!');
    }
  },
  async getFavourite(req, res) {
    try {
      const favouriteData = await Favourite.find({userId: req.user._id});
      res.send(favouriteData);
    } catch(err) {
      res.status(500).send('Failed to get favrourite songs');
    }
  },
  async deleteFavourite(req, res) {
    try {
      const result = await Favourite.deleteOne({_id: req.params.favouriteId});
      res.send(result);
    } catch(err) {
      res.status(500).send('Failed to delete favrourite songs');
    }
  }
}