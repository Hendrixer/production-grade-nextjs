import { NextApiResponse } from 'next'
import nc from 'next-connect'
import middleware from '../../../middleware/all'
import { Request } from '../../../types'
import { doc } from '../../../db'

const handler = nc<Request, NextApiResponse>({
  onError(error, req, res, next) {
    console.log(error)
    res.status(500).end()
  },
})

handler.use(middleware)

handler.put(async (req, res) => {
  const updated = await doc.updateOne(req.db, req.query.id as string, req.body)

  res.send({ data: updated })
})

export default handler
