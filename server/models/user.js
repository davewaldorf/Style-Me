const mongoose = require('../db');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  profileImg: { type: String, required: false },
  dateOfBirth: { type: Date, required: false },
  gender: { type: String, required: false },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  country: { type: String, required: false },
  looks: [{
    imageUrl: { type: String, required: false },
    category: { type: String, required: false },
    tags: { type: String, required: false },
    description: { type: String, required: false },
    likes: { type: Number, required: false }
  }],
  wardrobe: [{
    imageUrl: { type: String, required: false },
    category: { type: String, required: false },
    size: { type: String, required: false },
    color: { type: String, required: false },
    description: { type: String }
  }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
