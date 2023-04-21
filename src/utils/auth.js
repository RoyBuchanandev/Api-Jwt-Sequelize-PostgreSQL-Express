const jwt = import('jsonwebtoken');

function generateToken(user) {
  const payload = {
    sub: user.id,
    name: user.name,
    email: user.email,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  return token;
}

function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
  } catch (error) {
    return null;
  }
}

export default {
  generateToken,
  verifyToken,
};
