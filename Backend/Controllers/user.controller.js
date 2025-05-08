

const User = require('../Models/user.model');


module.exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (err) {
        next(err);
    }
}

module.exports.searchUser = (req, res, next) => {
    // res.send(`I GOT The Search ${req.query.name}  `);
    try {
        const users = User.find({ name: req.query.name });
        res.send(users);
    } catch (err) {
        next(err);
    }
}

module.exports.addUser = async (req, res, next) => {
    try {
        const user = await User.create(req.body);
        res.send(user);
    } catch (err) {
        next(err);

    }

}

module.exports.updateUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send(user);
    } catch (err) {
        next(err);
    }
}

module.exports.deleteUser = (req, res) => {
    try {
        const user = User.findByIdAndDelete(req.params.id);
        res.send(user);
    } catch (err) {
        next(err);
    }
}
