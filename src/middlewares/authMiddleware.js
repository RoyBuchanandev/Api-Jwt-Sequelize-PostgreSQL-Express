const { verifyToken } = import('../utils/auth.js');

function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  const decoded = token ? verifyToken(token) : null;

  if (!decoded) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  req.userId = decoded.sub;
  next();
}

export default authMiddleware;
