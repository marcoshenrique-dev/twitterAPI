const jwt = require('jsonwebtoken');
const secrect = require('../../config');

module.exports = {

  auth: (req, res, next) => {
    const responseToken = req.headers.auth;

    if (!responseToken) { return res.status(401).send({ error: 'No token provided' }); }

    const parts = responseToken.split(' ');

    if (!parts.length === 2) { return res.status(401).send({ error: 'Token error' }); }

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme)) { return res.status(401).send({ error: 'Token malformatted' }); }

    jwt.verify(token, secrect.KEY, (err, decoded) => {
      if (err) return res.status(401).send({ error: 'token invalid' });

      req.user = decoded.email;
      return next();
    });
  },
};
