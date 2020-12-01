import { NextApiResponse } from 'next'

export default function handler(req, res: NextApiResponse) {
  res.setPreviewData({})
  res.redirect(req.query.route)
}
