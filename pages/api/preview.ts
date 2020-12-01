import { NextApiResponse } from 'next'

export default (req, res: NextApiResponse) => {
  res.setPreviewData({})
  res.redirect(req.query.route)
}
