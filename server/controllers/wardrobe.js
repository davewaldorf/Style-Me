exports.addToWardrobe = async (req, res) => {
  try {
    console.log('addItem');
    const item = req.body;
    const user = await User.findById(req.params.id);
    user.wardrobe.push(item);
    const updatedUser = await user.save();
    console.log(updatedUser, 'updatedUser');
    res.status(201).json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });  
  } 
}

