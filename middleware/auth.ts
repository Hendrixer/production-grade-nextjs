import jwt from 'next-auth/jwt'

export default async (req, res, next) => {
  const token = await jwt.getToken({ req, secret: process.env.JWT_SECRET })

  if (token) {
    // Signed in
    req.user = token
    next()
  } else {
    // Not Signed in
    res.status(401)
    res.end()
  }
}
