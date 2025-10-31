import jwt from 'jsonwebtoken';

export function verifyToken(token) {
  try {
    if (!token) return null;
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    return decoded;
  } catch (error) {
    console.error('Token verification error:', error);
    return null;
  }
}