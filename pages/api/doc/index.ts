import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'
import middleware from '../../../middleware/all'

const handler = nc<NextApiRequest, NextApiResponse>()

handler.use(middleware)

handler.get(async (req, res) => {
  res.json({ ok: true })
})

handler.post(async (req, res) => {
  res.json({ ok: true })
})
export default handler
