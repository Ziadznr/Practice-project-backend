const ProfileModel = require("../models/ProfileModel");
const jwt = require('jsonwebtoken')
exports.CreateProfile = async(req, res) => {
    try {
        let reqBody = req.body;
        let data = await ProfileModel.create(reqBody);
        res.status(200).json({ status: 'Success', data: data });
    } catch (error) {
        res.status(500).json({ status: 'Fail', error: error.message });
    }
};


exports.UserLogin = async(req, res) => {
    try {

        let UserName = req.body['UserName']
        let Password = req.body['Password']
        let data = await ProfileModel.find({
            UserName: UserName,
            Password: Password

        });
        if (data.length > 0) {

            // Create auth token
            let Payload = {
                exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60),
                data: data[0]
            }
            var token = jwt.sign(Payload, 'SecretKey123456');

            res.status(200).json({ status: 'Success', token: token, data: data });
        } else {
            res.status(401).json({ status: 'Fail', message: 'Invalid Username or Password' });
        }
    } catch (error) {
        res.status(500).json({ status: 'Fail', error: error.message });
    }
};

exports.SelectProfile = async(req, res) => {
    try {
        let UserName = req.headers['username']
        let data = await ProfileModel.find({ UserName: UserName })
        res.status(200).json({ status: 'Success', data: data });
    } catch (error) {
        res.status(500).json({ status: 'Fail', error: error.message });
    }
}

exports.UpdateProfile = async(req, res) => {
    try {
        let UserName = req.headers['username']
        let reqBody = req.body;

        res.status(200).json({ status: 'Success', data: reqBody });
    } catch (error) {
        res.status(500).json({ status: 'Fail', error: error.message });
    }
}