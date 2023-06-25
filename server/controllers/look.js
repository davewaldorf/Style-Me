const User = require('../models/user');
const mongoose = require('mongoose');


exports.getAllLooks = async (req, res) => {
  try {
    console.log('getAllLooks');
    const users = await User.find();
    const looks = users.map((user) => [...user.looks]).flat().reverse();
    res.status(200).json({ looks });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

exports.addLook = async (req, res) => {
  try {
    console.log('addLook');
    const look = req.body;
    const user = await User.findById(req.params.id);
    user.looks.push(look);
    const updatedUser = await user.save();
    console.log(updatedUser, 'updatedUser');
    res.status(201).json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

exports.getLikesByUser = async (req, res) => {
  try {
    const likesByUser = await User.aggregate([
      { $match: { _id: new mongoose.Types.ObjectId(req.params.id) } },
      {
        $project: {
          _id: 0,
          totalLikes: { $sum: '$looks.likes' } // calculate the total likes for all the user's looks
        }
      }
    ]);

    res.status(200).json( likesByUser[0].totalLikes );
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.handleLike = async (req, res) => {
  try {
    const { lookId, userId} = req.params;

    const user = await User.findById(userId);
    const look = user.looks.id(lookId);
    console.log(user, 'look');
    oldLikes = look.likes;
    look.likes += 1;
    await user.save();
    res.status(200).json({ message: 'Like updated' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

