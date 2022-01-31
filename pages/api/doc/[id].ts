import { NextApiResponse } from 'next'
import nc from 'next-connect'
import middleware from '../../../middleware/all'
import { Request } from '../../../types'
import { doc } from '../../../db'
import onError from '../../../middleware/error'

const handler = nc<Request, NextApiResponse>({
  onError,
})

handler.use(middleware)

handler.put(async (req, res) => {
  const updated = await doc.updateOne(req.db, req.query.id as string, req.body)

  res.send({ data: updated })
})

export default handler
