const jwt = require('jsonwebtoken');

module.exports = async(req, res, next) => {

    const Token = req.headers['token-key'];

    jwt.verify(Token, 'SecretKey123456', function(err, decoded) {
        if (err) {
            res.status(401).json({ status: 'unauthorized' })
        } else {
            let username = decoded['data']['UserName']
            req.headers.username = username

            next()
        }
    })
};