import { NextApiResponse } from 'next'

export default (req, res: NextApiResponse) => {
  res.clearPreviewData()
  res.end('preview over')
}
