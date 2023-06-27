const User = require('../models/user');
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.register = async (req, res) => {
  try {
    const { firstName, lastName, dateOfBirth, gender, country, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = await User.create({
      firstName,
      lastName,
      dateOfBirth,
      gender,
      country,
      email,
      password: hashedPassword
    });
  
    console.log(user);
    res.status(200).json({ message: 'User created' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    // At this point, the user has provided valid credentials
    
    res.send(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.logout = async (req, res) => {
  try {
    res.status(200).json({ message: 'User logged out' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ user });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const data = req.body;
    await User.findByIdAndUpdate(req.params.id, data);
    res.status(200).json({ message: 'Profile updated' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteProfile = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Profile deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.addToWardrobe = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    await User.findByIdAndUpdate(req.params.id, { $push: { wardrobe: data } });
    res.status(200).json({ message: 'Item added to wardrobe' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.addToLooks = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    await User.findByIdAndUpdate(req.params.id, { $push: { looks: data } });
    res.status(200).json({ message: 'Item added to looks' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Changing password

// exports.changePassword = async (req, res) => {
//   try {
//     const { password } = req.body;
//     const hashedPassword = await bcrypt.hash(password, saltRounds);
//     await User.findByIdAndUpdate(req.params.id, { password: hashedPassword });
//     res.status(200).json({ message: 'Password changed' });
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// }





