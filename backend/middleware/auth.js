const jwt = require('jsonwebtoken');
const secretKey = 'yourSecretKey';
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token)
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }
  
  try {
    const decoded = jwt.verify(token, secretKey);
    console.log(decoded.user)
    req.user = decoded;
    console.log(req.user)
    // Check if token is expired
    const currentTimestamp = Math.floor(Date.now() / 1000);
    if (decoded.exp && decoded.exp < currentTimestamp) {
      return res.status(401).json({ message: 'Token expired' });
    }

    next();
  } catch (error) {
    console.error('Token verification error:', error.message);
    res.status(401).json({ message: error });
  }
};

module.exports = authMiddleware;
