import { NextApiResponse } from 'next'
import nc from 'next-connect'
import { doc } from '../../../db'
import middleware from '../../../middleware/all'
import onError from '../../../middleware/error'
import { Request } from '../../../types'

const handler = nc<Request, NextApiResponse>({
  onError,
})

handler.use(middleware)
handler.post(async (req, res) => {
  const newDoc = await doc.createDoc(req.db, {
    createdBy: req.user.id,
    folder: req.body.folder,
    name: req.body.name,
  })
  res.send({ data: newDoc })
})

export default handler
